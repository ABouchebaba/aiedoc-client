import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../Store/actions";

const user = {
  name: "a",
  email: "a@a.a",
};

const AuthForm = (props) => {
  const dispatch = useDispatch();

  const register = () => {
    // register user in backend
    // then go to Home
    dispatch(login(user));
  };

  return (
    <View style={styles.container}>
      <Text>This is user fills form</Text>

      <TouchableOpacity onPress={register}>
        <Text>Register</Text>
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

export default AuthForm;
