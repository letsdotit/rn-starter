import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Tes</Text>
      <Button
        style={styles.button}
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components') }
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => navigation.navigate('List') }
      />
      <Button
        style={styles.button}
        title="Go to Image Demo"
        onPress={() => navigation.navigate('Image') }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button:{
    marginBottom : 10
  }
});

export default HomeScreen;
