import React from "react";
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import friendsData from "../json/friends.json";
import FriendsDetail from "../components/FriendsDetail.js";


const DetailScreen = () => {
  return (
    <ScrollView style={styles.ScrollViewStyle}>
      <View style={styles.thumbnailContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://github.com/humichen/ig_hw/blob/master/src/img/69474%202.jpg?raw=true"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.texttitleStyle}>Fang_1129</Text>
            <Text style={styles.textwordStyle}>在１則現時動態提及你.３小時前</Text>
          </View>
        </View>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://github.com/humichen/ig_hw/blob/master/src/img/382b083cd554a83dd48ff2d3a4d83748%202.png?raw=true"
          }}
        />
      </View>
      <View style={styles.thumbnailContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://github.com/humichen/ig_hw/blob/master/src/img/69474%203.jpg?raw=true"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.texttitleStyle}>mewmewmew</Text>
            <Text style={styles.textwordStyle}>７小時前上線</Text>
          </View>
        </View>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://github.com/humichen/ig_hw/blob/master/src/img/382b083cd554a83dd48ff2d3a4d83748%202.png?raw=true"
          }}
        />
      </View>
      <View style={styles.thumbnailContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://github.com/humichen/ig_hw/blob/master/src/img/69474%204.jpg?raw=true"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.texttitleStyle}>Neko_chen</Text>
            <Text style={styles.textwordStyle}>１天前上線</Text>
          </View>
        </View>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://github.com/humichen/ig_hw/blob/master/src/img/382b083cd554a83dd48ff2d3a4d83748%202.png?raw=true"
          }}
        />
      </View>
      <View style={styles.thumbnailContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: "https://github.com/humichen/ig_hw/blob/master/src/img/69474%205.jpg?raw=true"
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.texttitleStyle}>poppoppop</Text>
            <Text style={styles.textwordStyle}>１星期前上線</Text>
          </View>
        </View>
        <Image
          style={styles.iconStyle}
          source={{
            uri: "https://github.com/humichen/ig_hw/blob/master/src/img/382b083cd554a83dd48ff2d3a4d83748%202.png?raw=true"
          }}
        />
      </View>

    </ScrollView>
  )
};

const styles = StyleSheet.create({
  ScrollViewStyle:{
    backgroundColor: "#fff",
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  thumbnailStyle: {
    height: 70,
    width: 70,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 20,
    // backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  imageStyle: {
    height: 300,
    width: null
  },
  iconStyle: {
    height: 32,
    width: 32,
    marginRight: 15
  },
  texttitleStyle:{
    fontWeight:"600",
    fontSize:18
  },
  textwordStyle:{
    color:"#636363"
  }
});

export default DetailScreen;
