import { Timestamp } from '@google-cloud/firestore'
import type { UserInfo } from 'firebase/auth'
export type LoggedInUser = {
  uid: UserInfo['uid'],
  displayName: UserInfo['displayName'],
  photoURL: UserInfo['photoURL'],
  email: UserInfo['email'],
  // registerDate: Timestamp,
  // lastLoginDate: Timestamp,
}
export type UserProfile = {
  uid: string,
  displayName: string,
  photoURL: string,
  email: string,
  university: string,
  faculty: string,
  selfIntroduction: string
  // registerDate: Timestamp,
  // lastLoginDate: Timestamp,
}