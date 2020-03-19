import React, { useEffect } from "react";
import { Text, View } from "react-native";

function ArticleCard(props) {
  return (
    <View>
      <Text>
        {props.data.id} ==> {props.data.title}
      </Text>
    </View>
  );
}

export default ArticleCard;
