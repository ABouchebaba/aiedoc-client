import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../Store/actions";

const user = {
  name: "a",
  email: "a@a.a",
};

const AuthPhone = (props) => {
  const dispatch = useDispatch();
  // const login = () => dispatch(login(user));
  const sendPin = () => {
    // send pin login then
    // navigate to pin screen
    props.navigation.navigate("AuthPin");
  };

  return (
    <View style={styles.container}>
      <Text>This is Where user enters phone number</Text>
      <TouchableOpacity onPress={sendPin}>
        <Text>Send pin code </Text>
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

export default AuthPhone;
