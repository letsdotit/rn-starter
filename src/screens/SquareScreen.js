import React, { useReducer}  from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const colorIncreament = 15;

const reducer = (state, action) => {
    switch (action.colorToChange){
        case 'red':
            return { ...state, red : state.red + action.amount};
        case 'green':
            return { ...state, green : state.green + action.amount};
        case 'blue':
            return { ...state, blue : state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, runMyReducer] = useReducer(reducer, { red:0, green:0, blue:0 });

    return (
        <View>
            <ColorCounter
                color='Red'
                onIncrease={()=> runMyReducer({ colorToChange : 'red', amount : colorIncreament})}
                onDecrease={()=> runMyReducer({ colorToChange : 'red', amount : -1 * colorIncreament})}
            />
            <ColorCounter
                color='Green' 
                onIncrease={()=> runMyReducer({ colorToChange : 'green', amount : colorIncreament})}
                onDecrease={()=> runMyReducer({ colorToChange : 'green', amount : -1 * colorIncreament})}
            />
            <ColorCounter
                color='Blue'
                onIncrease={()=> runMyReducer({ colorToChange : 'blue', amount : colorIncreament})}
                onDecrease={()=> runMyReducer({ colorToChange : 'blue', amount : -1 * colorIncreament})}
            />
            <View 
                style={{
                    height:150,
                    width:150,
                    backgroundColor:`rgb(${red},${green},${blue})`
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SquareScreen;