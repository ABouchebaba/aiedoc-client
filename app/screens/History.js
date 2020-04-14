import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { TabBar, TabView } from "react-native-tab-view";
import { useDispatch, useSelector } from "react-redux";
import { Header, Interventions, Purchaces } from "../components";

// const initialLayout = { width: Dimensions.get('window').width };

const History = (props) => {
  const dispatch = useDispatch();
  const { interventions } = useSelector((state) => state.user.user);

  //console.log(interventions);

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "préstations" },
    { key: "second", title: "achats" },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "first":
        return <Interventions interventions={interventions} />;
      case "second":
        return <Purchaces />;
      default:
        return null;
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/bg/bgHome.png")}
      style={styles.container}
    >
      <View style={styles.header}>
        <Header navigation={props.navigation} />
      </View>
      <View style={styles.mainView}>
        <TabView
          lazy={true}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: "white" }}
              style={styles.tabView}
              activeColor={"#D61F2C"}
              inactiveColor={"#48C2E3"}
              pressColor={"#D61F2C"}
            />
          )}
          //renderPager={props => <ScrollPager { ...props } overscroll={true}/>}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "contain",
  },
  header: {
    height: "15%",
    width: "100%",
    justifyContent: "center",
  },
  mainView: {
    height: "85%",
    width: "100%",
  },
  tabView: {
    backgroundColor: "white",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  scene: {
    flex: 1,
  },
});

export default History;
