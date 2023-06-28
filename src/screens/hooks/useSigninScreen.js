import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../../store/slices/authSlice"
import { useLoginMutation } from "../../store/slices/usersApliSlice"
import { useNotification } from "../../hooks/useNotification"

const user = {
  email: "",
  password: ""
}

export const useSigninScreen = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { notifySuccess, notifyError } = useNotification()

  const [loginUserApiCall, { isLoading, isSuccess}] = useLoginMutation()

  const onSubmit = async (userData) => {
    try {
      const response = await loginUserApiCall(userData).unwrap()
      dispatch(setCredentials(response.data))
      notifySuccess("Successfully signed In")
      navigate("/")
    } catch(error) {
      notifyError(error.data.message)
    }
  }

  return {
    errors,
    isLoading,
    isSuccess,
    register,
    handleSubmit,
    onSubmit
  }
}
