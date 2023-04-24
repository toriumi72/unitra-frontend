import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getFunctions } from 'firebase/functions'

export default defineNuxtPlugin((nuxtApp) => {

  /** firebase app initialize */
  const config = useRuntimeConfig()
  const firebaseConfig = {
    apiKey: config.public.apiKey,
    authDomain: config.public.authDomain,
    projectId: config.public.projectId,
    storageBucket: config.public.storageBucket,
    appId: config.public.appId,
  }
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  /** provide things */
  nuxtApp.provide('firebaseApp', app)
  nuxtApp.provide('fireAuth', auth)
  nuxtApp.provide('fireStore', getFirestore(app))
  nuxtApp.provide('fireStorage', getStorage(app))
  nuxtApp.provide('fireFunctions', getFunctions(app))

  /** auth state observer */
  onAuthStateChanged(auth, (user) => {
    const { setFireAuthInCurrentUser, loggedInUser } = useAuth()
    if (user) {
      user.getIdTokenResult(true)
      .then((idTokenResult) => {
        console.log('logged in')
        setFireAuthInCurrentUser(user)
        navigateTo('/buyAndSell')
        // needRegister.value = true
      })
    }
    else {
      loggedInUser.value = null
      console.log('not logged in')
      navigateTo('/login', { replace: true })
    }
  })
})