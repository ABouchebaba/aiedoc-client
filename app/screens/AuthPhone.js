import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseAuthApplicationVerifier,
} from "expo-firebase-recaptcha";

const AuthPhone = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(
    FirebaseAuthApplicationVerifier
  );

  const onPressSendVerificationCode = async () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((res) =>
        props.navigation.navigate("AuthPin", {
          verificationId: res,
          phoneNumber,
        })
      )
      .catch((err) => {
        console.log(err);
        alert("Invalid phone number");
      });
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={setRecaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
      <TextInput
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={setPhoneNumber}
      />
      <Button
        title="Send Verification Code"
        onPress={onPressSendVerificationCode}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default AuthPhone;
