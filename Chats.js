import { StatusBar, StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import ChatList from './ChatList'

const Chats = () => {
    return (

        <ScrollView>
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>WhatsApp</Text>
                <View style={styles.headerContainer}>
                    <Image style={styles.imageStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/128/3409/3409518.png" }} />
                    <Image style={styles.imageStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2956/2956744.png" }} />
                    <Image style={styles.imageStyle} source={{ uri: "https://cdn-icons-png.flaticon.com/128/2311/2311524.png" }} />
                </View>
            </View>
            <View>
                <TextInput
                    style={styles.searchBarStyles}
                    placeholder="Search Here..."
                   
                />
            </View>

            <View>
                <ChatList />
            </View>
        </View>
        </ScrollView>
    )
}

export default Chats

const styles = StyleSheet.create({

    mainContainer: {
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:"#FFF",
        display:"flex",
        flex:1

    },
    container: {
        flexDirection: "row",

        justifyContent: "space-between"
    },
    headerContainer: {
        alignItems: "center",
        flexDirection: "row"
    },
    textStyle: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 15,
        color: "#1DAA61"
    },
    imageStyle: {
        height: 24,
        width: 24,
        marginHorizontal: 10

    },

    searchBarStyles : {

        borderRadius:100,
        backgroundColor:"#F6F5F3",
        paddingHorizontal:10,
        paddingVertical:10,
        marginHorizontal:10

    }
})