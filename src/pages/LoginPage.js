import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Image,
} from "react-native"
import MyButton from "../components/Button"
import MyTextInput from "../components/TextInput"
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useUser } from "../lib/UserContext"

const Login = () => {
  const navigation = useNavigation()
  const { loginUser } = useUser()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerNavigate = () => {
    navigation.navigate("Register")
  }

  const navigateToMainApp = async () => {
    try {
      const storedUserData = await AsyncStorage.getItem("@UserData")
      if (storedUserData) {
        const userData = JSON.parse(storedUserData)
        console.log("Parsed User Data:", userData)
        if (userData.email === email && userData.password === password) {
          loginUser(userData)
          navigation.navigate("MainApp")
        } else {
          alert("email atau password tidak cocok")
          // Tampilkan pesan kesalahan jika email atau password tidak cocok
        }
      } else {
        alert("pengguna tidak ditemukan")
        // Tampilkan pesan kesalahan jika data pengguna tidak ditemukan
      }
    } catch (error) {
      console.error("Login failed", error)
      // Tampilkan pesan kesalahan atau tindakan yang sesuai
    }
  }

  return (
    <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Image
            source={require("../public/login.png")}
            style={{ width: 256, height: 183 }}
          />
        </View>

        <Text style={{ marginTop: 50, fontWeight: "bold", fontSize: 25 }}>
          Login
        </Text>
        <View style={{ marginTop: 30 }}>
          <MyTextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <MyTextInput
            placeholder="Password"
            isPassword={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={{ marginTop: 40 }}>
          <MyButton
            onPress={navigateToMainApp}
            text="Login"
            color="orangered"
          />
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>
              New Users? {""} {""}
              <Text
                onPress={registerNavigate}
                style={{
                  color: "orangered",
                  textDecorationLine: "underline",
                  textDecorationStyle: "dashed",
                  fontStyle: "italic",
                }}
              >
                Register
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  centeredContent: {
    marginTop: 50,
    alignItems: "center",
  },
})
