import React from "react";
import { StyleSheet, FlatList, View } from 'react-native';
import friendsData from "../json/friends.json";
import FriendsDetail from "../components/FriendsDetail";

const DetailScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <FlatList
      data={friendsData.albumList}
      renderItem={({ item }) => 
      <FriendsDetail 
        friend={item}       
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

export default DetailScreen;
