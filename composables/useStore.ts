import {
  doc,
  collection,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  FieldValue,
  Timestamp,
  serverTimestamp,
  writeBatch,
} from "firebase/firestore"
import { cdate } from "cdate"

export const useStore = () => {

  const {
    collectionRef,
    docRef,
    getDocumentSnapshot,
    getQuerySnapshot,
    voidSetDoc,
    getAddDocRef,
    voidUpdateDoc,
    voidDeleteDoc,
  } = useFireStore()

  const { $fireStore } = useNuxtApp()
  const db = $fireStore

  const getUserData = async () => {
    const documentSnapshot = await getDocumentSnapshot(docRef("test", "Sxv47j9kF3vsCpyW029E")).catch((e:Error) => Promise.reject(e))
    return Promise.resolve(documentSnapshot.data())
  }

  return {
    getUserData,
  }
}