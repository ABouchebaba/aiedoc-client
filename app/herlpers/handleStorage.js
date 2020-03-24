import { AsyncStorage } from "react-native";

export const getItem = async key => {
  try {
    return JSON.parse(await AsyncStorage.getItem(key));
  } catch (e) {
    console.log("Error (getItem) :::" + e);
  }
};
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return getItem(key);
  } catch (e) {
    console.log("Error (setItem) :::" + e);
  }
};
export const addItemTo = async (item, key, id = "id") => {
  try {
    let data = await getItem(key);
    if (!data) data = {};
    data[item[id]] = item;
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return data;
  } catch (e) {
    console.log("Error (addItemTo) :::" + e);
  }
};

export const removeItemFrom = async (key, id) => {
  try {
    let data = await getItem(key);
    delete data[id];
    await setItem(key, data);
    return data;
  } catch (e) {
    console.log("Error (removeItem) :::" + e);
  }
};
