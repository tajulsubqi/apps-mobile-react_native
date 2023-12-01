import { StyleSheet, TextInput, View } from "react-native"
import React from "react"

const MyTextArea = () => {
  return (
    <View>
      <TextInput
        placeholder="Type here..."
        multiline
        numberOfLines={4} // Anda dapat mengatur berapa baris yang ingin ditampilkan
        value={text}
        onChangeText={(newText) => setText(newText)}
        style={styles.textArea}
      />
    </View>
  )
}

export default MyTextArea

const styles = StyleSheet.create({
  textArea: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 100,
    borderColor: "#dedede",
    borderWidth: 1,
    padding: 8,
  },
})
