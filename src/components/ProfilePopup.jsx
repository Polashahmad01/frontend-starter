import { NavLink } from 'react-router-dom'
import ReactModal from 'react-modal'
import { CgProfile } from "react-icons/cg"
import { FiLogOut } from "react-icons/fi"
import { useSignOut } from '../hooks/useSignOut'
ReactModal.setAppElement("#root")

const customStyles = {
  content: {
    top: '5rem',
    right: '1rem',
    left: 'auto',
    bottom: 'auto',
    padding: "0",
    backgroundColor: "#242424",
    color: "rgba(255, 255, 255, 0.87)",
    border: "none",
    borderRadius: "8px"
  },
  overlay: {
    backgroundColor: "none"
  }
}

export const ProfilePopup = ({ isModalOpen, onModalCloseHandler, userInfo }) => {
  const { name, email } = userInfo
  const profileEmail = email.length >= 20 ? email.split(".com")[0].concat("...") : email
  const { logoutHandler } = useSignOut()

  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onModalCloseHandler}
      shouldCloseOnOverlayClick={true}
      style={customStyles}
    >
      <div className="py-2">
        <div className="mb-4">
          <p className=" font-normal px-6 mb-1 pt-2">{name}</p>
          <p className="px-6">{profileEmail}</p>
        </div>
        <div className="mb-2">
          <NavLink
            className="flex items-center gap-4 py-2 px-6 hover:bg-neutral-700 hover:text-secondary"
            to={"/profile"}
          >
            <CgProfile
              size="1.5em"
            />
            Profile
          </NavLink>
        </div>
        <hr />
        <div className="mb-2 pt-2">
          <div
            className="flex items-center cursor-pointer gap-4 py-2 px-6 hover:bg-neutral-700 hover:text-secondary"
            onClick={logoutHandler}
          >
            <FiLogOut
              size="1.5em"
            />
            Sign Out
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
