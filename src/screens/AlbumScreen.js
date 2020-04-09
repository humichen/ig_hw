import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AlbumDetail from "../components/AlbumDetail";
import albumData from "../json/albums.json";

const AlbumScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <FlatList
      data={albumData.albumList}
      renderItem={({ item }) => 
      <AlbumDetail 
        album={item}       
      />}
      keyExtractor={item => item.title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle:{
    flex:1,
    backgroundColor:"#fff"
  }
});

export default AlbumScreen;