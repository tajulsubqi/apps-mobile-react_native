import React, { useState, useEffect } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import MyTextInput from "../components/TextInput"
import MyButton from "../components/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"

const getRandomColor = () => {
  // Mendapatkan komponen warna dalam bentuk heksadesimal
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("")
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // Mendapatkan kategori dari penyimpanan lokal saat komponen dimuat
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

  const storeCategories = async (categoriesToStore) => {
    try {
      // Menyimpan kategori ke penyimpanan lokal
      await AsyncStorage.setItem(
        "categories",
        JSON.stringify(categoriesToStore),
      )
    } catch (error) {
      console.error("Error storing categories", error)
    }
  }

  const addCategory = () => {
    if (categoryName.trim() !== "") {
      const newCategory = {
        name: categoryName,
        backgroundColor: getRandomColor(),
      }
      const updatedCategories = [...categories, newCategory]
      setCategories(updatedCategories)
      setCategoryName("")

      // Menyimpan kategori yang telah diperbarui ke penyimpanan lokal
      storeCategories(updatedCategories)
    }
  }

  return (
    <ScrollView backgroundColor={"#F5F5F5"}>
      <View style={styles.container}>
        <Text style={{ marginTop: 30, fontSize: 25, fontWeight: "bold" }}>
          Add Category
        </Text>
        <MyTextInput
          placeholder="Name"
          value={categoryName}
          onChangeText={(text) => setCategoryName(text)}
        />

        <View style={{ marginTop: 20 }}>
          <MyButton
            text="Add Category"
            color="orangered"
            onPress={addCategory}
          />
        </View>

        <Text style={{ marginTop: 90, fontSize: 25, fontWeight: "bold" }}>
          List Category
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 6,
            marginTop: 25,
            width: 350,
            flexWrap: "wrap",
          }}
        >
          {categories.map((category, index) => (
            <Text
              key={index}
              style={{
                backgroundColor: category.backgroundColor,
                color: "white",
                paddingHorizontal: 15,
                paddingVertical: 3,
                borderRadius: 8,
              }}
            >
              {category.name}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  )
}

export default AddCategory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
})
