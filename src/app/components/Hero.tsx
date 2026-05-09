function Hero() {
  return (
    <div className="pb-6">
      <div className="text-center p-5 flex flex-col space-y-4">
      <h2 className="text-4xl font-bold text-blue-200 md:text-5xl">Modern. Minimal. Powerful</h2>
      <p className="text-base font-bold md:text-lg">A modern Neovim configuration built for productivity and a clean development experience.</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <img className="max-w-[80%] border-3 rounded-lg border-[#505050]" src="/screenshots/preview1.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
