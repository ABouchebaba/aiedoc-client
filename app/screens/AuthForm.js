import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { useDispatch } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { register } from "../Store/actions";

const AuthForm = (props) => {
  const dispatch = useDispatch();
  const { phoneNumber: phone } = props.route.params;
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const showDatePicker = () => setShow(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate.toISOString();
    setShow(Platform.OS === "ios");
    setBirthdate(currentDate);
  };

  const submit = () => {
    // register user in backend
    dispatch(register({ phone, email, firstname, lastname, birthdate }));
  };

  return (
    <View style={styles.container}>
      <Text>Register Form</Text>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          onChangeText={setEmail}
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
          style={styles.TextInput}
        />
        <TextInput
          placeholder="First Name"
          onChangeText={setFirstname}
          autoCompleteType="name"
          textContentType="givenName"
          style={styles.TextInput}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={setLastname}
          autoCompleteType="name"
          textContentType="familyName"
          style={styles.TextInput}
        />
        <TouchableOpacity onPress={showDatePicker}>
          <Text>Birthdate: {birthdate}</Text>
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            display="spinner"
            value={new Date()}
            onChange={onChange}
          />
        )}
      </View>
      <TouchableOpacity onPress={submit}>
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
  formContainer: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "grey",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
  },
  TextInput: {
    padding: 10,
  },
};

export default AuthForm;
