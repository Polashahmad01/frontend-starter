import { NavLink } from "react-router-dom"
import { useAppNavbar } from "./hooks/useAppNavbar"

import avatarImgUrl from "../assets/images/avatar-image.jpeg"

export const AppNavbar = () => {
  const { userInfo } = useAppNavbar()

  return (
    <header>
      <div className="px-4 md:container md:mx-auto">
        <nav className="flex items-center justify-between py-6">
          <NavLink
            to={"/"}
            className="text-base font-bold md:text-xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-indigo-400">
              FrontEnd
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-600">
              Starter
            </span>
          </NavLink>
          <ul className="flex items-center gap-2 md:gap-4">
            {!userInfo && (<>
              <li>
                <NavLink
                  className="bg-primary rounded-full py-1 px-4 text-base font-normal cursor-pointer border border-solid border-transparent transition duration-25 md:py-2 md:px-5 md:font-medium hover:border-secondary"
                  to={"/signin"}
                >
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="bg-primary rounded-full py-1 px-4 text-base font-normal cursor-pointer border border-solid border-transparent transition duration-25 md:py-2 md:px-5 md:font-medium hover:border-secondary"
                  to={"/signup"}
                >
                  Sign Up
                </NavLink>
              </li>
            </>)}
            {userInfo && (<>
              <li>
                <div
                  className="w-11 h-11 rounded-full border-4 border-double border-transparent hover:border-secondary"
                >
                  <img
                    className="rounded-full cursor-pointer w-full h-full object-cover"
                    src={avatarImgUrl}
                    alt="profile"
                  />
                </div>
              </li>
            </>)}
          </ul>
        </nav>
      </div>
    </header>
  )
}
