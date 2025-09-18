import { useAppSelector, useAppDispatch } from "../store/hooks/useStore";
import {
  increment,
  incrementByAmount,
  decrement,
  reset,
} from "../store/slices/counterSlice";

export default function AppPage() {
  const { value: count, loading } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

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
          </div>
        </div>
      </div>
    </section>
  );
}
