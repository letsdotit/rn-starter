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
      <Button
        style={styles.button}
        title="Go to Counter Demo"
        onPress={() => navigation.navigate('Counter') }
      />
      <Button
        style={styles.button}
        title="Go to Color Demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        style={styles.button}
        title="Go to Square Demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        style={styles.button}
        title="Go to Text Demo"
        onPress={() => navigation.navigate('Text')}
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
