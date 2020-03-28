import React, { useState } from "react";
import { Text, Button, View, FlatList } from "react-native";

function ForYou(props) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  return (
    <View>
      <Text>ForYou</Text>
      <FlatList
        style={{ marginBottom: 25 }}
        data={[...Array(100)]}
        keyExtractor={(item, index) => {
          return `${index}`;
        }}
        renderItem={({ index }) => {
          return <Text key={index}>blabla {index}</Text>;
        }}
        refreshing={isRefreshing}
        onRefresh={() => {
          setIsRefreshing(true);
          setTimeout(() => setIsRefreshing(false), 2000);
          // console.log("refreshing");
        }}
        ListHeaderComponent={() => <Text>Header</Text>}
        ListFooterComponent={() => <Text>Footer</Text>}
      />
    </View>
  );
}

export default ForYou;
