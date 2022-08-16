import { StyleSheet, Text, View,ScrollView,Image} from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'; 
import { SCREEN_HEIGHT } from '@gorhom/bottom-sheet';


const PeopleList = () => {
    const [people,setPeople] = useState([
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Mounir Kanane' , host: true},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Zaid Takriti', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Yusuf Elley', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Yousef Ibrahim' , host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Mounir Kanane', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Zaid Takriti', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Yusuf Elley', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Yousef Ibrahim', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Mounir Kanane', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Zaid Takriti', host: false},
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Yusuf Elley', host: false}, 
        {image: "https://images.app.goo.gl/GZ91NT6AnATeirpg7", name: 'Yousef Ibrahim', host: false},
    ]);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>People</Text>
            <Feather style={styles.icon} name="users" size={22} color="gray" />
            <Text style={[styles.title,{marginLeft:10},{color:"gray"}]}>6/10</Text>
        </View>
        <ScrollView style={styles.scroll}>
            {people.map((item) => {
            return (
                <View style={styles.peopleContainer}>
                    <Image style={styles.image} source={require('../assets/images/UserIcon.png')} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            )
            })}
        </ScrollView>
    </View>
  )
}

export default PeopleList

const styles = StyleSheet.create({
    container:{
        height: SCREEN_HEIGHT/3.18
    },
    header: {
        flexDirection: "row",
        alignItems: "center"
    },
    title : {
        fontSize: 20,
        fontFamily: "Racing"
    },
    icon : {
        marginLeft: 20
    },
    scroll: {
    },
    peopleContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: 10,
        alignItems:"center"
    },
    image: {
        width: 35,
        height: 35
    },
    name: {
        fontSize: 25,
        marginLeft: 10
    }
})