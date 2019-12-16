import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        borderWidth: 1,
        borderColor : 'black',
        flexDirection : "row",
        justifyContent : "space-between",
        height : 100
    },
    textOneStyle : {
        borderWidth : 2,
        borderColor : 'red',
        backgroundColor : 'red',
        height : 100,
        flex : 1,
        alignSelf: "flex-start"
    },
    textTwoStyle : {
        borderWidth : 2,
        borderColor : 'green',
        backgroundColor : 'green',
        height : 100,
        flex : 1,
        alignSelf: "center",
        top : 50
    },
    textThreeStyle : {
        borderWidth : 2,
        borderColor : 'blue',
        backgroundColor : 'blue',
        height : 100,
        flex : 1,
        alignSelf: "flex-end"
    }
});

export default BoxScreen;