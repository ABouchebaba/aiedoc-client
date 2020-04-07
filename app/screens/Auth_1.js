import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../Store/actions";

const user = {
  name: "a",
  email: "a@a.a",
};

const Auth_1 = (props) => {
  const dispatch = useDispatch();
  const onPress = () => dispatch(login(user));

  return (
    <View style={styles.container}>
      <Text>This is Auth_1 screen</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Login</Text>
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

export default Auth_1;
