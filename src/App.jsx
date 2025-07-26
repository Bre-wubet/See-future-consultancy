import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default App

