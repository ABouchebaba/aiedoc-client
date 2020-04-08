import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../Store/actions";

const AuthPin = (props) => {
  const dispatch = useDispatch();
  const [verificationCode, setVerificationCode] = useState("");
  const { phoneNumber, verificationId } = props.route.params;

  const onPinError = () => {
    alert("Wrong pin code");
  };
  const onVerfiyPhoneError = (err) => {
    props.navigation.navigate("AuthForm", { phoneNumber });
  };

  const onPressConfirmVerificationCode = async () =>
    dispatch(
      login(
        {
          phoneNumber,
          verificationId,
          verificationCode,
        },
        {
          onPinError,
          onVerfiyPhoneError,
        }
      )
    );

  return (
    <View style={styles.container}>
      <TextInput onChangeText={setVerificationCode} />
      <Button
        title="Confirm Verification Code"
        onPress={onPressConfirmVerificationCode}
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

export default AuthPin;
