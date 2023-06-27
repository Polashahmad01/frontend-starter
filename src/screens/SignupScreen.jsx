import { NavLink } from "react-router-dom"
import { useSignupScreen } from "./hooks/useSignupScreen"

export const SignupScreen = () => {
  const { register, getValues, errors, handleSubmit, onSubmit } = useSignupScreen()

  return (
    <div className="flex justify-center items-center">
      <form
        className="bg-primary rounded-lg py-8 px-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center mb-4 text-base font-semibold sm:text-lg">Create an account to get started</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2 font-light">Name</label>
          <input
            className="py-2 px-3 rounded-md bg-main border border-transparent appearance-none leading-normal focus:outline-none focus:shadow-outline focus:border-secondary"
            type="text"
            {...register("name", {
              validate: {
                invalidName: value => value.length > 0 || "Name is required"
              }
            })}
          />
          {errors?.name?.type === "invalidName" && <span className=" text-sm mt-2 text-red-600">{errors?.name?.message}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2 font-light">Email</label>
          <input
            className="py-2 px-3 rounded-md bg-main border border-transparent appearance-none leading-normal focus:outline-none focus:shadow-outline focus:border-secondary"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors?.email?.type === "required" && <span className=" text-sm mt-2 text-red-600">{errors?.email?.message}</span>}
          {errors?.email?.type === "pattern" && <span className=" text-sm mt-2 text-red-600">{errors?.email?.message}</span>}
        </div>
        <div className="flex mb-4 flex-col gap-4 md:flex-row">
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-2 font-light">Password</label>
            <input
              className="py-2 px-3 rounded-md bg-main border border-transparent appearance-none leading-normal focus:outline-none focus:shadow-outline focus:border-secondary"
              type="password"
              {...register("password", {
                required: "Password is required",
                validate: {
                  minLength: value => value.length > 5 || "At least 6 characters long"
                }
              })}
            />
            {errors?.password?.type === "required" && <span className=" text-sm mt-2 text-red-600">{errors?.password?.message}</span>}
            {errors?.password?.type === "minLength" && <span className=" text-sm mt-2 text-red-600">{errors?.password?.message}</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="repeatPassword" className="mb-2 font-light">Repeat password</label>
            <input
              className="py-2 px-3 rounded-md bg-main border border-transparent appearance-none leading-normal focus:outline-none focus:shadow-outline focus:border-secondary"
              type="password"
              {...register("repeatPassword", {
                required: "Repeat password is required",
                validate: {
                  minLength: value => value.length > 5 || "At least 6 characters long",
                  validatePassword: (confirmPassword) => {
                    return confirmPassword !== getValues("password") ? "Password didn't match" : true
                  }
                }
              })}
            />
            {errors?.repeatPassword?.type === "required" && <span className=" text-sm mt-2 text-red-600">{errors?.repeatPassword?.message}</span>}
            {errors?.repeatPassword?.type === "minLength" && <span className=" text-sm mt-2 text-red-600">{errors?.repeatPassword?.message}</span>}
            {errors?.repeatPassword?.type === "validatePassword" && <span className=" text-sm mt-2 text-red-600">{errors?.repeatPassword?.message}</span>}
          </div>
        </div>
        <div className="flex mb-4">
          <button className="w-full bg-black font-medium py-2 px-3 rounded-md border border-transparent hover:border-secondary">Create account</button>
        </div>
        <div className="flex justify-center items-center">
          <p className=" font-light">
            Already have an account? &nbsp;
            <NavLink
              to={"/signin"}
              className="transition-colors hover:text-secondary"
            >
              Sign In
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
