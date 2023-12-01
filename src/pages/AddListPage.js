import React, { useState, useEffect } from "react"
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
} from "react-native"
import MyTextInput from "../components/TextInput"
import MyButton from "../components/Button"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"

const AddList = () => {
  const navigation = useNavigation()
  const [selectedValue, setSelectedValue] = useState("")
  const [text, setText] = useState("")
  const [categories, setCategories] = useState([])

  useEffect(() => {
    retrieveCategories()
  }, [])

  const retrieveCategories = async () => {
    try {
      const storedCategories = await AsyncStorage.getItem("categories")
      if (storedCategories !== null) {
        setCategories(JSON.parse(storedCategories))
      }
    } catch (error) {
      console.error("Error retrieving categories", error)
    }
  }

  const handleAddList = () => {
    const newData = {
      title: text,
      category: selectedValue,
      description: text,
      date: new Date(),
      // backgroundColor dan color tidak lagi didefinisikan di sini
    }

    navigation.navigate("ListTodo", { newData })
  }

  return (
    <ScrollView backgroundColor={"#F5F5F5"}>
      <View style={styles.container}>
        <Text style={{ marginTop: 30, fontSize: 25, fontWeight: "bold" }}>
          Add List
        </Text>
        <MyTextInput placeholder="Name" />

        {/* <-- dropdown --> */}
        <View>
          <Picker
            selectedValue={selectedValue}
            style={styles.dropdown}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Select a category" value="" />
            {categories.map((category) => (
              <Picker.Item
                key={category.value}
                label={category.name}
                value={category.value}
              />
            ))}
          </Picker>
        </View>
        {/* <-- dropdown --> */}

        {/* TextArea */}
        <View style={styles.textarea}>
          <TextInput
            placeholder="Description"
            multiline
            numberOfLines={4}
            value={text}
            onChangeText={(newText) => setText(newText)}
            style={styles.textArea}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <MyButton text="Add List" color="orangered" onPress={handleAddList} />
        </View>
      </View>
    </ScrollView>
  )
}

export default AddList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 20,
    border: "none",
    borderColor: "#dedede",
    borderWidth: 1,
  },
  textarea: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
    height: 100,
    borderColor: "#dedede",
    borderWidth: 1,
    padding: 8,
  },
})
