export default function MarqueeEffect() {
  return (
    <article className="marquee-container wrapper--vertical">
      <div className="marquee marquee--vertical">
        <div className="marquee__group">
          <div className="w-full h-20 bg-red-500 flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">01</h1>
          </div>
          <div className="w-full h-20 bg-amber-200 flex items-center justify-center rounded-2xl">
            <h1 className="text-amber-500 text-2xl">02</h1>
          </div>
          <div className="w-full h-20 bg-black flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">03</h1>
          </div>
          <div className="w-full h-20 bg-yellow-300 flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">04</h1>
          </div>
          <div className="w-full h-20 bg-pink-600 flex items-center justify-center rounded-2xl">
            <h1 className="text-blue-500 text-2xl">05</h1>
          </div>
          <div className="w-full h-20 bg-emerald-800 flex items-center justify-center rounded-2xl">
            <h1 className="text-amber-500 text-2xl">06</h1>
          </div>
          <div className="w-full h-20 bg-teal-800 flex items-center justify-center rounded-2xl">
            <h1 className="text-pink-400 text-2xl">07</h1>
          </div>
          <div className="w-full h-20 bg-fuchsia-700 flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">08</h1>
          </div>
        </div>
        <div aria-hidden="true" className="marquee__group">
          <div className="w-full h-20 bg-red-500 flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">01</h1>
          </div>
          <div className="w-full h-20 bg-amber-200 flex items-center justify-center rounded-2xl">
            <h1 className="text-amber-500 text-2xl">02</h1>
          </div>
          <div className="w-full h-20 bg-black flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">03</h1>
          </div>
          <div className="w-full h-20 bg-yellow-300 flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">04</h1>
          </div>
          <div className="w-full h-20 bg-pink-600 flex items-center justify-center rounded-2xl">
            <h1 className="text-blue-500 text-2xl">05</h1>
          </div>
          <div className="w-full h-20 bg-emerald-800 flex items-center justify-center rounded-2xl">
            <h1 className="text-amber-500 text-2xl">06</h1>
          </div>
          <div className="w-full h-20 bg-teal-800 flex items-center justify-center rounded-2xl">
            <h1 className="text-pink-400 text-2xl">07</h1>
          </div>
          <div className="w-full h-20 bg-fuchsia-700 flex items-center justify-center rounded-2xl">
            <h1 className="text-white text-2xl">08</h1>
          </div>
        </div>
      </div>
    </article>
  );
}
