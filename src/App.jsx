import { useDispatch } from "react-redux"
import { setCredentials, logout } from "./store/slices/authSlice"
import { useLoginMutation, useLogoutMutation } from "./store/slices/usersApliSlice"

import './App.css'

function App() {
  const dispatch = useDispatch()

  const [loginApiCall] = useLoginMutation()
  const [logoutApiCall] = useLogoutMutation()

  const loginHandler = async () => {
    try {
      const response = await loginApiCall().unwrap()
      dispatch(setCredentials(response.data))
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

  const logoutHandler = async () => {
    try {
      const response = await logoutApiCall().unwrap()
      dispatch(logout())
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={loginHandler}
        >
          Login
        </button>
        <p></p>
        <button
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default App
