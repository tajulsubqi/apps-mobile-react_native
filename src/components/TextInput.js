import React from "react"
import { TextInput } from "react-native"

const MyTextInput = (props) => {
  return (
    <TextInput
      secureTextEntry={props.isPassword}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      style={{
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 20,
        height: props.height,
        numberOfLines: props.numberOfLines,
        borderColor: "#dedede",
        borderWidth: 1,
      }}
    ></TextInput>
  )
}

export default MyTextInput
