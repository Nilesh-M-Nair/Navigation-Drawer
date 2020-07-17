import React from "react";
import {ImageBackground} from "react-native";

const splashImage = require('../Assets/splash.png');
// const splashLogo= require('..Assets/Image-Source-PlusPNG.com.png')

class Splash extends React.Component{
    constructor(props){
        super(props);
        setTimeout(()=>{
            this.props.navigation.replace("FirstPage")
        },5000);
    }
// Check with someone & learn how to implement splash in IOS & Android - Nilesh.M.Nair (This method is wrong!!)
    render(){
        return(
            <ImageBackground
            source ={splashImage}
            style ={{height: '100%', width: '100%'}}
            >
            </ImageBackground>
        )
    }
}