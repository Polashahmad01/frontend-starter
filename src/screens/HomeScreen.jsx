import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { setCredentials, logout } from "../store/slices/authSlice"
import { useRegisterMutation, useLoginMutation, useLogoutMutation } from "../store/slices/usersApliSlice"

export const HomeScreen = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [registerApiCall] = useRegisterMutation()
  const [loginApiCall] = useLoginMutation()
  const [logoutApiCall] = useLogoutMutation()

  const formData = { name: "Polash Ahmad", email: "dev.polashahmad@gmail.com", password: "polash123" }

  const registerHandler = async () => {
    try {
      const response = await registerApiCall(formData).unwrap()
      dispatch(setCredentials(response.data))
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

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
      navigate("/signin")
      console.log(response)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="card">
        <button
          onClick={registerHandler}
          className="bg-primary rounded-full py-2 px-5 text-base font-normal cursor-pointer border border-solid border-transparent transition duration-25 hover:border-secondary"
        >
          Register
        </button>
        <br />
        <br />
        <button
          className="bg-primary rounded-full py-2 px-5 text-base font-normal cursor-pointer border border-solid border-transparent transition duration-25 hover:border-secondary"
          onClick={loginHandler}
        >
          Login
        </button>
        <br />
        <br />
        <button
          className="bg-primary rounded-full py-2 px-5 text-base font-normal cursor-pointer border border-solid border-transparent transition duration-25 hover:border-secondary"
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </>
  )
}
