import React from 'react';
import { Text, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
      <Text style={styles.text}>Tes</Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
