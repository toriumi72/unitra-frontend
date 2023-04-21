import {
  doc,
  collection,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  CollectionReference,
  DocumentReference,
  DocumentData,
  Query
} from "firebase/firestore"

export const useFireStore = () => {

  const { $fireStore } = useNuxtApp()
  //マジで良くない、型がなくしょうがないので、anyにしている
  const db = $fireStore as any

  const collectionRef = (collectionName:string) => collection(db, collectionName)

  const docRef = (collectionRef:string, id:string) => doc(db, collectionRef, id)

  const getDocumentSnapshot = async (docRef:DocumentReference) => {
    const documentSnapshot = await getDoc(docRef).catch((e:Error) => Promise.reject(e))
    if (!documentSnapshot.exists()) {
      throw new Error("ドキュメントがないよ！")
    }
    return Promise.resolve(documentSnapshot)
  }

  const getQuerySnapshot = async (query:Query) => {
    const querySnapshot = await getDocs(query).catch((e:Error) => Promise.reject(e))
    if (querySnapshot.empty) {
      throw new Error("ドキュメントが一つもないよ！")
    }
    return Promise.resolve(querySnapshot)
  }

  const voidSetDoc = async (docRef:DocumentReference, data:DocumentData) => {
    await setDoc(docRef, data).catch((e:Error) => Promise.reject(e))
    return Promise.resolve()
  }

  const getAddDocRef = async (collectionRef:CollectionReference, docData:DocumentData) => {
    const documentRef:DocumentReference = await addDoc(collectionRef, docData).catch((e:Error) => Promise.reject(e))
    return Promise.resolve(documentRef)
  }

  const voidUpdateDoc = async (docRef:DocumentReference, data:DocumentData) => {
    await updateDoc(docRef, data).catch((e:Error) => Promise.reject(e))
    return Promise.resolve()
  }

  const voidDeleteDoc = async (docRef:DocumentReference) => {
    await deleteDoc(docRef).catch((e:Error) => Promise.reject(e))
    return Promise.resolve()
  }

  return {
    collectionRef,
    docRef,
    getDocumentSnapshot,
    getQuerySnapshot,
    voidSetDoc,
    getAddDocRef,
    voidUpdateDoc,
    voidDeleteDoc,
  }
}