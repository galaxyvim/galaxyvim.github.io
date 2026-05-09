import { FaTelegram, FaRedditAlien, FaDiscord } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center items-center flex-col bg-[#101010]">
      <div className="py-8 flex flex-col items-center space-y-5">
        <span className="text-2xl font-bold">Join our Communities</span>
        <div className="flex space-x-4">
          <a className="text-5xl" href="https://www.reddit.com/r/galaxyvim">
            <FaRedditAlien className="fill-[#ff5555]" />
          </a>
          <a className="text-5xl" href="https://discord.gg/uvtdTS8tFE">
            <FaDiscord className="fill-[#afaaff]" />
          </a>
          <a className="text-5xl" href="https://t.me/galaxyvim">
            <FaTelegramPlane className="fill-[#afddff]" />
          </a>
        </div>
      </div>
      <div className="py-4 flex justify-center items-center border-[#303030] border-t w-full" >
        <p className="font-bold pt-2">© {year} galaxyvim™</p>
      </div>
    </footer>
  )
}
