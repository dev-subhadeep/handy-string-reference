import React from "react"
import { useSelector } from "react-redux"

const Home = () => {
  const data = useSelector((store) => store.authReducer)
  console.log(data)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
