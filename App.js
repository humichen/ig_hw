import React from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, View, Image, TouchableOpacity, Linking } from 'react-native';


import AlbumScreen from './src/screens/AlbumScreen';
import DetailScreen from './src/screens/DetailScreen2';
import albumData from "./src/json/albums.json";
import friendsData from "./src/json/friends.json";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AlbumScreen}
          options={({ navigation }) => ({
            title: " ",
            headerTitle: () => <Image style={styles.titleStyle} source={{ uri: "https://github.com/humichen/ig_hw/blob/master/src/img/instagram_PNG5.png?raw=true" }} />,
            headerRight: () =>
              <TouchableOpacity
                onPress={() => navigation.navigate('Detail')}
              >
                <Image
                  style={styles.headiconrightStyle}
                  source={{
                    uri: "https://github.com/humichen/ig_hw/blob/master/src/img/b5228eb4316921ff5639755998e5b990_instagram-icons-1652-free-vector-icons_600-564.png?raw=true"
                  }}
                />
              </TouchableOpacity>,
            headerLeft:()=><Image style={styles.headiconleftStyle} source={{ uri: "https://github.com/humichen/ig_hw/blob/master/src/img/382b083cd554a83dd48ff2d3a4d83748%202.png?raw=true" }} />,
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerRight: () =>
              <View style={styles.headimglayout}>
                <Image style={styles.headiconStyle} source={{ uri: "https://github.com/humichen/ig_hw/blob/master/src/img/icons8-video-call-50.png?raw=true" }} />
                <Image style={styles.headiconStyle} source={{ uri: "https://github.com/humichen/ig_hw/blob/master/src/img/edit.png?raw=true" }} />
              </View>,

            title: friendsData.albumTitle,
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: '400',
              fontSize: 20
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headiconStyle: {
    width: 32,
    height: 32,
    marginLeft: 30
  },
  headimglayout: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15
  },
  titleStyle: {
    height: 32,
    width: 100
  },
  headiconleftStyle: {
    width: 32,
    height: 32,
    marginLeft: 15
  },
  headiconrightStyle: {
    width: 32,
    height: 32,
    marginRight: 15
  },
});
export default App;