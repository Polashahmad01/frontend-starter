import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

export const Private = () => {
  const { userInfo } = useSelector(state => state.auth)

  return userInfo ? <Outlet /> : <Navigate to="/signin" replace />
}
