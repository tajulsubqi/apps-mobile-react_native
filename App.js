import React from "react"
import Routes from "./src/routes/routes"
import { NavigationContainer } from "@react-navigation/native"
import { UserProvider } from "./src/lib/UserContext"

const App = () => {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </UserProvider>
    </>
  )
}

export default App
