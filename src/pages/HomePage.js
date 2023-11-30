import { ScrollView, Image, StatusBar, StyleSheet, Text, View } from "react-native"
import React from "react"
import MyButton from "../components/Button"
import { useNavigation } from "@react-navigation/native"

const Home = () => {
  const navigation = useNavigation()

  const navigateToLogin = () => {
    navigation.navigate("Login")
  }

  const navigateToRegister = () => {
    navigation.navigate("Register")
  }

  return (
    <ScrollView backgroundColor={"white"}>
      <StatusBar backgroundColor={"white"} />
      <View style={styles.container}>
        <View style={{ marginTop: 90 }}>
          <Image
            source={require("../public/logo.png")}
            style={{ width: 228, height: 258 }}
          />
        </View>

        <Text style={{ fontWeight: "bold", fontSize: 35 }}>
          Ways <Text style={{ color: "red" }}>To</Text>
          <Text style={{ color: "tomato" }}>Do</Text>
        </Text>

        <View>
          <Text
            style={{
              fontSize: 12,
              width: 224,
              textAlign: "center",
              marginTop: 30,
            }}
          >
            Write your activity and finish your activity. Fast, Simple and Easy to Use
          </Text>
        </View>

        <View style={{ marginTop: 80, width: 340 }}>
          <MyButton onPress={navigateToLogin} text="Login" color="orangered" />
          <MyButton onPress={navigateToRegister} text="Register" color="grey" />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
})
