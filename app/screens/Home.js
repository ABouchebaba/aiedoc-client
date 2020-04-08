import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/actions";

const Home = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  console.log(user);

  const onPress = () => dispatch(logout());

  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Text>
        user : {user.firstname} with email: {user.email}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Logout</Text>
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

export default Home;
