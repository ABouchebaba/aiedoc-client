import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/actions";
import { Entypo } from "@expo/vector-icons";
import { BackImage } from "../components";

const Profile = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const onPress = () => dispatch(logout());
  // console.log(user);
  return (
    <BackImage source={require("../../assets/bg/bgHome.png")}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={props.navigation.openDrawer}>
            <Entypo name="menu" size={60} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.mainView}>
          <View style={styles.inputGroup}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              editable={false}
              value={user.email}
              style={styles.TextInput}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.text}>Nom complet</Text>
            <TextInput
              editable={false}
              value={user.firstname + " " + user.lastname}
              style={styles.TextInput}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.text}>Date d'inscription</Text>
            <TextInput
              editable={false}
              value={user.createdAt.slice(0, 10)}
              style={styles.TextInput}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.text}>Date de naissance</Text>
            <TextInput
              editable={false}
              value={user.birthdate.slice(0, 10)}
              style={styles.TextInput}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.text}>Numéro de téléphone</Text>
            <TextInput
              editable={false}
              value={user.phone}
              style={styles.TextInput}
            />
          </View>
          {/* <View style={styles.inputGroup}>
            <Button
              title={"changer le numéro de téléphone"}
              onPress={() => props.navigation.navigate("ChangePhoneNumber")}
            />
          </View> */}
        </View>
      </View>
    </BackImage>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
    alignItems: "stretch",
    justifyContent: "flex-start",
    paddingHorizontal: 30,
  },
  header: {
    height: "15%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  inputGroup: {
    width: "100%",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 0,
  },
  text: {
    textAlign: "left",
    fontSize: 15,
    color: "white",
    paddingBottom: 10,
  },
  TextInput: {
    backgroundColor: "#F2F2F2",
    alignSelf: "center",
    width: "100%",
    borderRadius: 50,
    paddingLeft: 20,
    fontSize: 15,
    paddingVertical: 10,
    marginBottom: 40,
  },
  mainView:{
    height:"85%",
    justifyContent:'flex-start',
  }
});

export default Profile;
