import { useAppSelector, useAppDispatch } from "../store/hooks/useStore";
import {
  increment,
  incrementByAmount,
  decrement,
  reset,
} from "../store/slices/counterSlice";
import { useUsers, useCreateUser } from "../hooks/useUsers";

export default function AppPage() {
  const { value: count, loading } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const { data: users, isLoading, error } = useUsers();
  const createUserMutation = useCreateUser();

  const handleCreateUser = () => {
    createUserMutation.mutate({
      name: "Polash Ahmad",
      email: "polash@gmail.com",
      username: "Polashahmad01",
    });
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-xl font-bold leading-none mb-8 tracking-normal opacity-80 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          App Page
        </h1>
        <div className="bg-[#f3f3f3] rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => dispatch(increment())}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              disabled={loading}
            >
              +
            </button>
            <button
              onClick={() => dispatch(incrementByAmount(5))}
              disabled={loading}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              +5
            </button>
            <span>{count}</span>
            <button
              onClick={() => dispatch(decrement())}
              disabled={loading}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              -
            </button>
            <button
              onClick={() => dispatch(reset())}
              disabled={loading}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Reset
            </button>
            {loading && <p className="text-blue-600">Loading...</p>}
          </div>
        </div>
        <div className="bg-[#f3f3f3] rounded-lg shadow-md p-6">
          <div className="mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:opacity-50"
              onClick={handleCreateUser}
              disabled={createUserMutation.isPending}
            >
              {createUserMutation.isPending ? "Loading..." : "Create User"}
            </button>
            {createUserMutation.isError && (
              <p className="text-red-600 mt-2">
                Error: {createUserMutation.error?.message}
              </p>
            )}
            {createUserMutation.isSuccess && (
              <p className="text-green-600 mt-2">User created successfully!</p>
            )}
          </div>

          {isLoading && <p className="text-blue-600">Loading users...</p>}

          {error && (
            <p className="text-red-600">
              Error: {error instanceof Error ? error.message : "Unknown error"}
            </p>
          )}

          {users && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {users.slice(0, 6).map((user) => (
                <div key={user.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-gray-600">@{user.username}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
