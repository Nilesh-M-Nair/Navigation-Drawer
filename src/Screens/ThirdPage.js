import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { iOSColors, systemWeights} from 'react-native-typography'

class ThirdPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styler.View}>
        <Text style={styler.text} > Formik form </Text>
        <Text style={styler.text}> Work in progress🚣 </Text>
        <Button
            title="Go back"
            onPress={() => this.props.navigation.push('SecondPage')}
          />
      </View>

    )
  }
}

export default ThirdPage

const styler = StyleSheet.create({
  View:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:iOSColors.black
  },
  text:{
    ...systemWeights.thin,
    color:iOSColors.white,
    fontSize: 30,
    marginBottom:10

  }
})