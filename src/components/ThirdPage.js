import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ThirdPage = ({ route, navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
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
            Settings
          </Text>
          <Button
            onPress={() => navigation.navigate('FirstPage')}
            title="Go to Home Page"
          />
          <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Open Profile"
          />
        </View>
        <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
        View souce code on
        </Text>
        <Text
          style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          https://github.com/Nilesh-M-Nair
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default ThirdPage;