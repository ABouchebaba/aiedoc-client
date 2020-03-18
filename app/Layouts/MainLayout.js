import React, { useEffect } from "react";
import { View } from "react-native";

const MainLayout = props => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <View style={style.container}>
      <props.Top {...props} />

      <View style={style.content}>{props.children}</View>

      <props.Bottom {...props} />
    </View>
  );
};

const style = {
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  content: {
    flex: 20,
    alignItems: "center"
  }
};

export default MainLayout;
