import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../Store/actions";

const user = {
  name: "a",
  email: "a@a.a",
};

const AuthPin = (props) => {
  const dispatch = useDispatch();
  const onPress = () => dispatch(login(user));

  const verifyPhone = () => {
    // verify phone number
    // and send to AuthForm
    // or set user and go to Home
    props.navigation.navigate("AuthForm");
    // dispatch(login(user));
  };

  return (
    <View style={styles.container}>
      <Text>This is user enter pin code</Text>
      <TouchableOpacity onPress={verifyPhone}>
        <Text>Verify pin code </Text>
      </TouchableOpacity>
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
