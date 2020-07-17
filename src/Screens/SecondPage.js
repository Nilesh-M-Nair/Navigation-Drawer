import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { iOSColors} from 'react-native-typography'

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, backgroundColor: iOSColors.black }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Profile
          </Text>
          <Button
            title="Open Random Color Picker"
            onPress={() => navigation.navigate('FirstPage')}

          />
          <Text style={{paddingVertical:10}}></Text>
          <Button
            title="Open Formik form"
            onPress={() => navigation.navigate('ThirdPage')}
          />
        </View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: iOSColors.gray }}>
        View souce code on
        </Text>
        <Text
          style={{ fontSize: 18, textAlign: 'center', color: iOSColors.gray }}>
          https://github.com/Nilesh-M-Nair
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default SecondPage;