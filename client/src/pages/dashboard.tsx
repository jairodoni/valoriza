import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"


export default function Deshboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>
        <h5>Nome: {user.name}</h5>
        <h5>Email: {user.email}</h5>
      </div>
    </>
  )
}

