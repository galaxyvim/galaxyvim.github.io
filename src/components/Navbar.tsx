import Image from "next/image"
import { IoLogoGithub } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 w-full border-b-2 border-[#303030]">
      <div className="flex space-x-2 items-center justify-center">
        <Image className="w-8 pointer-events-none select-none" width={100} height={100} src="/logo.png" alt="" />
        <a className="text-xl font-bold select-none" href="/" title="Home">galaxyvim</a>
      </div>
      <div>
        <a target="_blank" href="https://github.com/galaxyvim/galaxyvim">
          <IoLogoGithub className="text-3xl" />
        </a>
      </div>
    </nav>
  )
}

