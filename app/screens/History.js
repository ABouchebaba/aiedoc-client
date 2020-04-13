import React, {useState} from "react";
import { View, Text, ScrollView, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/actions";
import { Header } from "../components";
import { TabView, SceneMap, TabBar, ScrollPager } from 'react-native-tab-view';

const Interventions = () => {

  //const interventions = props.interventions
  const interventions= [
    {
        "_id": "5e655fad2e011c00165eeb06",
        "totalPrice": 0,
        "intervention_id": "5e655fad2e011c00165eeb05",
        "date": "2020-03-08T21:12:13.409Z",
        "sp_name": "service provider"
    },
    {
      "_id": "5e655fad2e011c00165eeb06",
      "totalPrice": 0,
      "intervention_id": "5e655fad2e011c00165eeb05",
      "date": "2020-03-08T21:12:13.409Z",
      "sp_name": "service provider"
  }
  ]

  return  (
    <ScrollView style={{ backgroundColor: 'white',flex:1 }}>
      {interventions.map((inv,i) => 
        <View key={i} style={{height:120, borderRadius:30,borderWidth:1, margin:15}} >
        </View>
        )
      }
      
    </ScrollView>
)};

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const interventions = [
  {
      "_id": "5e655fad2e011c00165eeb06",
      "totalPrice": 0,
      "intervention_id": "5e655fad2e011c00165eeb05",
      "date": "2020-03-08T21:12:13.409Z",
      "sp_name": "service provider"
  }
]

const markets = [
  {
      "_id": "5e655fad2e011c00165eeb06",
      "totalPrice": 0,
      "intervention_id": "5e655fad2e011c00165eeb05",
      "date": "2020-03-08T21:12:13.409Z",
      "sp_name": "service provider"
  }
]

const initialLayout = { width: Dimensions.get('window').width };

const History = (props) => {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'préstations' },
    { key: 'second', title: 'achats' },
  ]);

  const renderScene = SceneMap({
    first: Interventions,
    second: SecondRoute,
  });


  return (
    <ImageBackground
      source={require("../../assets/bg/bgHome.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Header navigation={props.navigation}/>
      </View >
      <View style={styles.mainView}>
        {/* <View style={styles.tabView}>
          <Text style={{fontSize: 20, textAlign:'center'}}>HISTORIQUE</Text>
        </View> */}
        <TabView
          lazy={true}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          //initialLayout={initialLayout}
          renderTabBar={props => 
              <TabBar {...props} 
                      indicatorStyle={{ backgroundColor: 'white' }} 
                      style={styles.tabView} 
                      activeColor={'#D61F2C'}
                      inactiveColor={'#48C2E3'}
                      pressColor={"#D61F2C"}
                      />}
          //renderPager={props => <ScrollPager { ...props } overscroll={true}/>}
        />
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain"
  },
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
  },
  mainView:{
    height: "85%",
    width: "100%",
  },
  tabView:{
    backgroundColor:'white',
    borderTopEndRadius:30,
    borderTopLeftRadius:30
  },
  scene: {
    flex: 1,
  },
});

export default History;
