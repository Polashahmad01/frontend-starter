import { useSelector } from "react-redux"

export const useAppNavbar = () => {
  const { userInfo } = useSelector(state => state.auth)

  return {
    userInfo
  }
}
