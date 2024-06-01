import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ChatList = () => {

    const list = [
        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Tohid",
            lMsg: "Hello",
            day: "8:00 pm",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Fardin",
            lMsg: "Hii",
            day: "2:00 pm",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sohel",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Tanmay",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Vivek",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },
        {
            name: "Mayur",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },
        {
            name: "Ravi",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },
        {
            name: "Monish",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },
        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },
        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },

        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },
        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },
        {
            name: "Sahil",
            lMsg: "Hii",
            day: "yesterday",
            img: "https://wallpaperaccess.com/full/4726499.jpg"
        },


    ]


    return (
        <View>
            <FlatList
                style={{ marginBottom: 50 }}
                keyExtractor={item => item.name}
                data={list}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: "row", marginHorizontal: 10, marginTop: 20 }}>
                            <View style={{flexDirection:"row", width: "50%" }}>
                                <View >
                                    <Image style={{
                                        height: 50
                                        , width: 50, borderRadius: 100
                                    }} source={{ uri: item.img }} />
                                </View>


                                <View style={{ justifyContent: "space-around", marginLeft: 10 }}>
                                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.name}</Text>
                                    <Text>{item.lMsg}</Text>
                                </View>
                            </View>
                            <View style={{ width: "50%", flexDirection: "row", justifyContent: "flex-end" }}>
                                <Text >{item.day}</Text>
                            </View>



                        </View>
                    )
                }}
            />
        </View>
    )
}

export default ChatList

const styles = StyleSheet.create({})