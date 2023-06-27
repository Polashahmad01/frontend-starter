import { useSelector } from "react-redux"
import { useState } from 'react'


export const useAppNavbar = () => {
  const { userInfo } = useSelector(state => state.auth)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const modalOpenHandler = () => {
    setIsModalOpen(true)
  }

  const modalCloseHandler = () => {
    setIsModalOpen(false)
  }

  return {
    userInfo,
    isModalOpen,
    modalOpenHandler,
    modalCloseHandler
  }
}
