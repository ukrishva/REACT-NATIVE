import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle, fixFlex } = styles;
    return (
        <View style={containerStyle}>

            <Text style={labelStyle}> {label} </Text>
            <View style={fixFlex}>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                underlineColorAndroid='transparent'
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                
            />
            </View>
        </View>
    );
};

const styles = {
    iputStyle: {
        textAlign: 'left',
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        overflow: 'hidden',
        textAlignVertical: 'top'
    },
    fixFlex: {
        flex: 2
    },
    labelStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
