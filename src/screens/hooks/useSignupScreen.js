import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../store/slices/authSlice"
import { useRegisterMutation } from "../../store/slices/usersApliSlice"
import { useNotification } from "../../hooks/useNotification.js"

const user = {
  name: "",
  email: "",
  password: "",
  repeatPassword: ""
}

export const useSignupScreen = () => {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm(user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { notifySuccess, notifyError } = useNotification()

  const [registerUserApiCall, { isLoading, isSuccess }] = useRegisterMutation()

  const onSubmit = async (userData) => {
    try {
      const response = await registerUserApiCall(userData).unwrap()
      dispatch(setCredentials(response.data))
      notifySuccess("Successfully signed In")
      navigate("/")
    } catch(error) {
      notifyError(error.data.error)
    }
  }

  return {
    errors,
    isLoading,
    isSuccess,
    register,
    getValues,
    handleSubmit,
    onSubmit
  }
}
