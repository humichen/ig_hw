import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text, Image } from 'react-native-elements';


const FriendsDetail = ({friend}) => {
    return (
        <View style={styles.thumbnailContainerStyle}>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri: friend.thumbnail_image
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text style={styles.texttitleStyle}>{friend.title}</Text>
                    <Text style={styles.textwordStyle}>{friend.description}</Text>
                </View>
            </View>
            <Image
                style={styles.iconStyle}
                source={{
                    uri: "https://github.com/humichen/ig_hw/blob/master/src/img/382b083cd554a83dd48ff2d3a4d83748%202.png?raw=true"
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
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
    texttitleStyle: {
        fontWeight: "600",
        fontSize: 18
    },
    textwordStyle: {
        color: "#636363"
    }
});

export default FriendsDetail;