import { useLogout } from "../hooks/useLogout";

export default function AppPage() {
  const { isLogoutPending, logoutMutation } = useLogout();

  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-xl font-bold leading-none mb-8 tracking-normal opacity-80 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          App Page
        </h1>
        <button
          disabled={isLogoutPending}
          className="w-full cursor-pointer rounded-full px-6 py-2 flex items-center justify-center text-white opacity-80 bg-[#000000] transition-all duration-400 hover:bg-[#f3f3f3] hover:text-[#000000] disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => logoutMutation()}
        >
          {isLogoutPending ? "Signing Out..." : "Sign Out"}
        </button>
      </div>
    </section>
  );
}
