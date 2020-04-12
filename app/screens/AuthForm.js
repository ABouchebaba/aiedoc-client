import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  ImageBackground,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { useDispatch,useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import { register } from "../Store/actions";

const AuthForm = (props) => {
  const dispatch = useDispatch();
  //const { phoneNumber: phone } = props.route.params;
  const phone  = "+213555077414";
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  //const loading = useSelector((state) => state.user.loading);

  const showDatePicker = () => setShow(true);

  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === "ios");
    if (selectedDate) {
      const currentDate = selectedDate.toISOString() ;
      setBirthdate(currentDate);
    }
  };

  const submit = () => {
    // register user in backend
    console.log({ phone, email, firstname, lastname, birthdate })
    dispatch(register({ phone, email, firstname, lastname, birthdate }));
    //props.navigation.push("Home")
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bg/bg1.png')} style={styles.image}>
      {/* {loading ?
        <ActivityIndicator size="large" color="white" />: */}
      <View style={styles.mainView}>
          <Text style={{fontSize:25,color:'white', marginBottom:20}}>Formulaire d'inscription</Text>
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
        <TouchableOpacity onPress={showDatePicker} style={styles.TextInput}>
          {birthdate !== ""? 
          <Text style={{fontSize:20}} >{birthdate.slice(0,10)}</Text>:
          <Text style={{fontSize:20, color:"#bababa"}}>Birthdate</Text>
        }
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            display="spinner"
            value={new Date()}
            onChange={onChange}
          />
        )}
        {
        (email!=="" && firstname!=="" && lastname!=="" && birthdate!=="")?  
        <TouchableOpacity onPress={submit} style={styles.submit}>
        <Text style={{fontSize:27,color:'white'}}>Register</Text>
        </TouchableOpacity>:
        <TouchableOpacity style={styles.notSubmit} disabled={true}>
        <Text style={{fontSize:27,color:'#4a4a4a'}}>Register</Text>
        </TouchableOpacity>
        }
      </View>
      {/* }   */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  mainView:{
    alignItems:'center'
  },
  TextInput: {
    backgroundColor:"#F2F2F2",
    width:"80%",
    borderRadius:50,
    paddingLeft:20,
    fontSize:20,
    paddingVertical:10,
    marginBottom:40
  },
  submit:{
    backgroundColor:"#11A0C1",
    marginTop:30,
    paddingVertical:10,
    alignItems:'center',
    borderRadius:50,
    width:'70%',
    alignSelf:'center'
  },
  notSubmit:{
    backgroundColor:"#bababa",
    marginTop:30,
    paddingVertical:10,
    alignItems:'center',
    borderRadius:50,
    width:'70%',
    alignSelf:'center'
  },
});

export default AuthForm;
