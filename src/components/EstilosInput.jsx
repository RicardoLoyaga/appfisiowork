import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textInput:{
        borderColor: "#ccc",
        borderBottomWidth: 1,
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:10
    }
})

const EstilosInput = ({style={}, ...props}) =>{
    const inputStyle = {
        ...styles.textInput,
        ...style
    }

    return <TextInput style={inputStyle} {...props} />
}

export default EstilosInput

