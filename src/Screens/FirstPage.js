import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { iOSColors, systemWeights} from 'react-native-typography'

const BackgroundScreen = iOSColors.black;
const commonTextColor = iOSColors.white;
const BottomTextColor = iOSColors.gray;

class FirstPage extends React.Component{
    constructor(props){
    super(props);
    this.state ={
        randomColor: "rgb(0,0,0)",
        isVisible : false
    }
  }

  getRandomColor = () => {
       return(
        "rgb("
        + Math.floor(Math.random() * 256) + ","
        + Math.floor(Math.random() * 256) + ","
        + Math.floor(Math.random() * 256) + ")"
       );
  }

  getChangeColor = () => {
      this.setState({ randomColor : this.getRandomColor()});
  }

  getModal =() => {
      this.setState({ isVisible: !this.state.isVisible});
  }

  render(){
    return(
      <SafeAreaView style={{ flex: 1 }}>
      <View style={[styler.view, {backgroundColor : this.state.randomColor}]}>
        <TouchableOpacity onPress={this.getChangeColor}>
            <Text style={styler.text}>
                Change Background
            </Text>
        </TouchableOpacity>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}
        >
        <View style={[styler.modal,{backgroundColor : this.state.randomColor}]}>
    <Text style={styler.modalText}> Copy "{this.state.randomColor}" </Text>
        <Button
          title="Click To Close Modal"
          onPress={this.getModal}/>
          <Text style ={{padding: 20, textAlign :"center", justifyContent: "center", color: commonTextColor}}>Close the modal to go back to background changer</Text>
        </View>
      </Modal>
      <TouchableOpacity onPress={()=>{this.setState({ isVisible: true });}}>
          <Text style={styler.text2}>
              Pick Color
          </Text>
      </TouchableOpacity>
      </View>
          <Text style={{ fontSize: 16, textAlign: 'center', color: BottomTextColor, backgroundColor: BackgroundScreen }}>
          View souce code on
          </Text>
          <Text
          style={{ fontSize: 18, textAlign: 'center', color: BottomTextColor ,backgroundColor: BackgroundScreen}}>
          https://github.com/Nilesh-M-Nair
          </Text>
  </SafeAreaView>
    )
  }
}

const styler = StyleSheet.create({
  view:{
      flex:1,
      backgroundColor: BackgroundScreen,
      justifyContent: "center",
      alignItems: "center"
  },
  text:{
      ...systemWeights.semibold,
      color: commonTextColor,
      backgroundColor: iOSColors.tealBlue,
      fontSize: 20,
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: commonTextColor,

  },
  text2:{
    color: commonTextColor,
    backgroundColor: iOSColors.green,
    marginTop: 20,
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: commonTextColor
},
  modal: {
    flex:1,
      alignItems: 'center',
      padding: 100,

    },
    modalText: {
      backgroundColor: iOSColors.white,
      color: iOSColors.black,
      margin: 10,
    },
})

export default FirstPage;