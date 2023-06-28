import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useNotification } from "./useNotification"
import { logout } from "../store/slices/authSlice"
import { useLogoutMutation } from "../store/slices/usersApliSlice"

export const useSignOut = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { notifySuccess, notifyError } = useNotification()

  const [logoutUserApiCall] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logoutUserApiCall().unwrap()
      dispatch(logout())
      notifySuccess("Successfully Logged out")
      navigate("/signin")
    } catch(error) {
      notifyError("Unable to Logged out")
    }
  }

  return {
    logoutHandler
  }
}
