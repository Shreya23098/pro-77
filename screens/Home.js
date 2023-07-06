import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity,Platform,StatusBar,SafeAreaView,ImageBackground} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                    <Text style= {styles.titleText}>ISS Tracker App</Text>
                    </View>
                

                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}> ISS Location</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}> 
                        <Text style={styles.routeCard}> Meteors</Text>
                    </TouchableOpacity>

                </ImageBackground>
                
            </View>
           
                 
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    }, 
    droidSafeArea:{
        marginTop: Platform.OS === "andriod" ? StatusBar.currentHeight : 0
    },
    titleText:{
        flex:0.15,
        justifyContent: "center",
        alignItems: "center",
        fontWeight:"bold",
        color:"white"
    },
    routeCard:{
        felx:0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white',
        fontWeight:"bold",
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    }
});