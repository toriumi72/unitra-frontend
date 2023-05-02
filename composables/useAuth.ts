import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  GoogleAuthProvider, 
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth'
import type { User, IdTokenResult } from "firebase/auth"
import type { LoggedInUser, UserProfile } from '@/types'

export const useAuth = () => {

  const { $fireAuth } = useNuxtApp()

  // const loggedInUser = useState<LoggedInUser | null>('loggedInUser', () => null)
  const loggedInUser = useState<any | null>('loggedInUser', () => null)
  const token = useState<string | null>('token', () => null)
  const userProfile = useState<any>('userProfile', () => null)

  // When onAuthStateChanged runs, it will set the loggedInUser and token
  const setFireAuthInCurrentUser = (user:User) => {
    const { uid, displayName, photoURL } = user
    loggedInUser.value = {
      uid, displayName, photoURL
    }
    console.log('setFireAuthInCurrentUser')
  }

  //google login
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect($fireAuth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken
      // The signed-in user info.
      const user = result;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }
  
  //pass and email login
  const signUp = async (email: string, password: string) => {
    return await new Promise<void>((resolve, reject) => {
      createUserWithEmailAndPassword($fireAuth, email, password)
        .then((userCredential) => {
          userCredential.user
            .getIdToken()
            .then((idToken) => {
              token.value = idToken
              resolve()
            })
            .catch(reject)
        })
        .catch(reject)
    })
  }

  const signIn = async (email: string, password: string) => {
    return await new Promise<void>((resolve, reject) => {
      return signInWithEmailAndPassword($fireAuth, email, password)
        .then((userCredential) => {
          userCredential.user
            .getIdToken()
            .then((idToken) => {
              token.value = idToken
              resolve()
            })
            .catch(reject)
        })
        .catch(reject)
    })
  }
  
  const signOut = async () => {
    return await new Promise<void>((resolve, reject) => {
      firebaseSignOut($fireAuth)
        .then(() => {
          token.value = null
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  
  

  return {
    loggedInUser,
    // needRegister,
    token,
    userProfile,
    setFireAuthInCurrentUser,
    googleLogin,
    signUp,
    signIn,
    signOut,
  }
}
