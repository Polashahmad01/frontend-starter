import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setCredentials } from "../../store/slices/authSlice"
import { useRegisterMutation } from "../../store/slices/usersApliSlice"

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

  const [registerUserApiCall] = useRegisterMutation()

  const onSubmit = async (userData) => {
    try {
      const response = await registerUserApiCall(userData).unwrap()
      dispatch(setCredentials(response.data))
      navigate("/")
    } catch(error) {
      console.log(error)
    }
  }

  return {
    register,
    errors,
    getValues,
    handleSubmit,
    onSubmit
  }
}
