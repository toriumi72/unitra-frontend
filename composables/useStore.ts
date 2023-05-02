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
  onSnapshot,
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
  //マジで良くない、型がなくしょうがないので、anyにしている
  const db = $fireStore as any

  //read
  const getProfile = async (loggedInUser:any) => {
    const { uid } = loggedInUser
    // docRef("Users", uid)は、doc(db, "Users", uid)と同じ
    const documentSnapshot = await getDocumentSnapshot(doc(db, "Users", uid))
    const data = documentSnapshot.data()
    if (!data) {
      throw new Error("ドキュメントがないよ！")
    }
    console.log(data)
    return Promise.resolve(data)
  }

  //create
  const addProfile = async (loggedInUser:any, data:object) => {
    const { uid } = loggedInUser
    await voidSetDoc(docRef("Users", uid), {
      uid,
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }).catch((e: Error) => Promise.reject(e))
    return Promise.resolve()
  }
  //update
  const updateProfile = async (loggedInUser:any, data:object) => {
    const { uid } = loggedInUser
    await voidUpdateDoc(docRef("Users", uid), {
      ...data,
      updatedAt: serverTimestamp(),
    }).catch((e: Error) => Promise.reject(e))
    return Promise.resolve()
  }
  
  const testUpdate = async () => {
    await voidUpdateDoc(docRef("Test", "lhmKmHnsg0rgbybBNBjQ"), {
      test: "test2",
    }).catch((e: Error) => Promise.reject(e))
    return Promise.resolve()
  }
  //delete


  return {
    getProfile,
    addProfile,
    updateProfile,
    testUpdate,
  }
}