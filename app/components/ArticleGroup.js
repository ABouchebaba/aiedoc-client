import React from "react";
import Item from "./Item";
import HorizontalList from "./HorizontalList";

function ArticleGroup(props) {
  const renderItem = ({ item }) => <Item item={item} />;
  const keyExtractor = (item) => "" + item.id;

  return (
    <HorizontalList
      data={props.data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

export default React.memo(ArticleGroup);
