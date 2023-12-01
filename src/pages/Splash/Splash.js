import { Image, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import logo_kpu from "../../public/logo_kpu.png"

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home")
    }, 3000)
  }, [navigation])

  return (
    <View style={styles.container}>
      <Image source={logo_kpu} style={styles.logo}></Image>
      <Text style={{ fontWeight:"bold", fontSize:40, marginTop:20, color:"red" }}>CAPE UYY</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bebebe",
  },
  logo: {
    width: 150,
    height: 150,
  },
})
