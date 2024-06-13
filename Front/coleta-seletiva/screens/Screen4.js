import React from 'react';
import { View, Text, Button } from 'react-native';

const Screen4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
      <Button title="Go to Screen 1" onPress={() => navigation.navigate('Screen1')} />
    </View>
  );
};

export default Screen4;
