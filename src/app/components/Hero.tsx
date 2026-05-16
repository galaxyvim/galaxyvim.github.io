"use client"

import { FaDownload, FaXmark, FaRegCopy, FaApple, FaWindows, FaDocker } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { SiFlatpak } from "react-icons/si";
import Image from "next/image"
import { useState } from "react";

const tabs = [
  {
    label: "Linux",
    icon: FcLinux,
    content: "git clone https://github.com/galaxyvim/starter ~/.config/nvim",
  },
  {
    label: "Flatpak",
    icon: SiFlatpak,
    content: "git clone https://github.com/galaxyvim/starter ~/.var/app/io.neovim.nvim/config/nvim && flatpak run io.neovim.nvim",
  },
  {
    label: "MacOS",
    icon: FaApple,
    content: "git clone https://github.com/galaxyvim/starter ~/.config/nvim",
  },
  {
    label: "Windows",
    icon: FaWindows,
    content: "git clone https://github.com/galaxyvim/starter $env:LOCALAPPDATA\\nvim",
  },
  {
    label: "Docker",
    icon: FaDocker,
    content: `docker run -w /root -it --rm alpine:latest sh -uelic '
  apk add git nodejs neovim ripgrep build-base wget --update
  git clone https://github.com/galaxyvim/starter ~/.config/nvim
  nvim
  '`,
  }
]

function Hero() {
  const [activeKey, setActiveKey] = useState(0)
  const [modal, setModal] = useState(false)
  const content = tabs[activeKey].content

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => alert("Failed to copy!"))
  }

  return (
    <div className="pb-6">
      <div className="text-center p-5 flex flex-col items-center space-y-4">
        <h2 className="text-4xl font-bold text-blue-200 md:text-5xl">Modern. Minimal. Powerful</h2>
        <p className="text-base font-bold md:text-lg">A modern Neovim configuration built for productivity and a clean development experience.</p>
        <div className={`group relative ${modal && "modal"}`}>
          <div className="hidden z-10 absolute rounded-lg bg-neutral-800 w-[90dvw] lg:w-[70dvw] h-65 left-1/2 top-1/2 -translate-1/2 group-[.modal]:block">
            <button onClick={() => setModal(!modal)} className="absolute -right-3 p-2 bg-neutral-700 -top-3 cursor-pointer rounded-full" type="button"><FaXmark /></button>
            <div className="p-5 flex flex-col items-baseline gap-5">
              <h2 className="font-bold text-2xl">Installation</h2>
              <div className="flex gap-5 overflow-x-auto w-full py-2">
                {
                  tabs.map((item, key) => {
                    const Icon = item.icon
                    const active = key === activeKey

                    return (
                      <button onClick={() => setActiveKey(key)} key={key} className={`flex justify-center items-center gap-2 hover:brightness-110 cursor-pointer rounded-lg py-2 px-3 ${active ? "bg-blue-200 text-black" : "bg-neutral-700"}`}>
                        {item.label}
                        <Icon className={`${item.label === "Linux" && "text-xl"}`} />
                      </button>
                    )
                  })
                }

              </div>

              <div className="relative  w-full">
                <button onClick={() => copyContent(content)} className="absolute right-3 top-3 bg-neutral-600 p-2 rounded-lg cursor-pointer hover:brightness-110" type="button"><FaRegCopy /></button>
                <pre className="text-left bg-neutral-700 w-full p-4 pr-8 max-h-22 overflow-y-auto rounded-lg scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                  <code className="text-sm">{content}</code>
                </pre>
              </div>
            </div>
          </div>
          <button onClick={() => setModal(!modal)} className="w-30 h-10 text-lg flex justify-center items-center gap-2 rounded-full hover:brightness-110 transition-all duration-300 cursor-pointer bg-blue-800">
            <FaDownload />
            <p className="font-bold">Install</p>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Image className="max-w-[80%] border-3 rounded-lg border-[#505050]" width={1280} height={720} src="/screenshots/preview1.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
