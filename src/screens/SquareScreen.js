import React, { useReducer}  from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const colorIncreament = 15;

const reducer = (state, action) => {
    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                    ? state : { ...state, red : state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state : { ...state, green : state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state : { ...state, blue : state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green:0, blue:0 });

    return (
        <View>
            <ColorCounter
                color='Red'
                onIncrease={()=> dispatch({ type : 'change_red', payload : colorIncreament})}
                onDecrease={()=> dispatch({ type : 'change_red', payload : -1 * colorIncreament})}
            />
            <ColorCounter
                color='Green' 
                onIncrease={()=> dispatch({ type : 'change_green', payload : colorIncreament})}
                onDecrease={()=> dispatch({ type : 'change_green', payload : -1 * colorIncreament})}
            />
            <ColorCounter
                color='Blue'
                onIncrease={()=> dispatch({ type : 'change_blue', payload : colorIncreament})}
                onDecrease={()=> dispatch({ type : 'change_blue', payload : -1 * colorIncreament})}
            />
            <View 
                style={{
                    height:150,
                    width:150,
                    backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({

});

export default SquareScreen;