import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { sendPin, getOptions } from "../Store/api";
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
    sendPin(phoneNumber, recaptchaVerifier)
      .then((res) =>
        props.navigation.navigate("AuthPin", {
          verificationId: res,
          phoneNumber,
        })
      )
      .catch((err) => {
        // console.log(err);
        alert("Invalid phone number");
      });
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={setRecaptchaVerifier}
        firebaseConfig={getOptions()}
      />
      <View style={styles.TextInput}>
        <TextInput
          placeholder="type your phone number ..."
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={setPhoneNumber}
        />
      </View>

      <Button title="Submit" onPress={onPressSendVerificationCode} />
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
  TextInput: {
    backgroundColor: "white",
    width: "60%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#efefef",
    borderRadius: 20,
    marginBottom: 10,
  },
};

export default AuthPhone;
