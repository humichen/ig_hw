import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from "react-native";

const AlbumDetail = ({album}) => {
  return (
    <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <View style={[styles.thumbnailContainerStyle2, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: album.thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.titleStyle}>{album.title}</Text>
          </View>
        </View>
        <Image
          style={styles.iconStyle2}
          source={{
            uri: "https://github.com/humichen/ig_hw/blob/master/src/img/icons8-menu-vertical-32.png?raw=true"
          }}
        />
      </View>
      <View style={styles.cardSectionStyle}>

        <Image
          style={styles.imageStyle}
          source={{
            uri: album.image
          }}
        />
      </View>
      <View style={[styles.cardSectionStyle, styles.bottomlayoutStyle]}>
        <View style={styles.iconlayout2Style}>
          <View style={styles.iconlayoutStyle}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://github.com/humichen/ig_hw/blob/master/src/img/b5228eb4316921ff5639755998e5b990_instagram-icons-1652-free-vector-icons_600-564%203.png?raw=true"
              }}
            />
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://github.com/humichen/ig_hw/blob/master/src/img/b5228eb4316921ff5639755998e5b990_instagram-icons-1652-free-vector-icons_600-564%202.png?raw=true"
              }}
            />
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://github.com/humichen/ig_hw/blob/master/src/img/b5228eb4316921ff5639755998e5b990_instagram-icons-1652-free-vector-icons_600-564.png?raw=true"
              }}
            />
          </View>
          <View>
            <Image
              style={styles.iconStyle2}
              source={{
                uri: "https://github.com/humichen/ig_hw/blob/master/src/img/b5228eb4316921ff5639755998e5b990_instagram-icons-1652-free-vector-icons_600-564%204.png?raw=true"
              }}
            />
          </View>
        </View>

        <Text style={[styles.textstrong, styles.likeStyle]}>{album.artist}</Text>
        <View style={styles.wordStyle}>
          <Text style={styles.textstrong}>{album.title} </Text>
          <Text>{album.description}</Text>
        </View>

      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  thumbnailContainerStyle2: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    backgroundColor:"#fff"
  },
  cardSectionStyle: {
    // padding: 5,
    backgroundColor: "#fff",
    // borderColor: "#ddd",
    // borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  },
  textstrong: {
    fontWeight: "bold",
  },
  wordStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  iconStyle: {
    height: 32,
    width: 32,
    marginRight: 10
  },
  iconStyle2: {
    height: 32,
    width: 32,
  },
  iconlayoutStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  iconlayout2Style: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bottomlayoutStyle: {
    padding: 15,
  },
  likeStyle: {
    fontSize: 16,
    marginTop: 5
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default AlbumDetail;
