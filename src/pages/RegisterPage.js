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

const RegisterPage = () => {
  const navigation = useNavigation()
  const { loginUser } = useUser()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const navigateLogin = () => {
    navigation.navigate("Login")
  }

  const handleRegister = async () => {
    try {
      // Simpan data pengguna di local storage
      const userData = { email, name, password }
      await AsyncStorage.setItem("@UserData", JSON.stringify(userData))

      // Navigasi ke halaman login setelah berhasil mendaftar
      navigateLogin()
    } catch (error) {
      console.error("Registration failed", error)
      // Tampilkan pesan kesalahan atau tindakan yang sesuai
    }
  }

  return (
    <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Image
            source={require("../public/login.png")}
            style={{ width: 256, height: 183 }}
          />
        </View>

        <Text style={{ marginTop: 50, fontWeight: "bold", fontSize: 25 }}>
          Register
        </Text>
        <View style={{ marginTop: 30 }}>
          <MyTextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <MyTextInput
            placeholder="Name"
            onChangeText={(text) => setName(text)}
          />
          <MyTextInput
            placeholder="Password"
            isPassword={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={{ marginTop: 40 }}>
          <MyButton
            onPress={handleRegister}
            text="Register"
            color="orangered"
          />
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>
              Joined us before? {""} {""}
              <Text
                onPress={navigateLogin}
                style={{
                  color: "orangered",
                  textDecorationLine: "underline",
                  textDecorationStyle: "dashed",
                  fontStyle: "italic",
                }}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default RegisterPage

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
