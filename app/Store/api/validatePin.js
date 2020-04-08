import * as firebase from "firebase/app";
import "firebase/auth";

export const validatePin = async (verificationId, verificationCode) => {
  const credential = firebase.auth.PhoneAuthProvider.credential(
    verificationId,
    verificationCode
  );
  return firebase.auth().signInWithCredential(credential);
};
