import { HiRocketLaunch } from "react-icons/hi2";
import { TbBrain } from "react-icons/tb";
import { MdOutlinePalette } from "react-icons/md";
import { CgDebug } from "react-icons/cg";
import { FaSearch, FaTools, FaGitAlt, FaDraftingCompass } from "react-icons/fa";
import { FaTree, FaGear, FaRegKeyboard } from "react-icons/fa6";
import { IoExtensionPuzzleSharp } from "react-icons/io5";

const features = [
  {
    title: "Performance",
    bg: "bg-yellow-950",
    fg: "text-yellow-300",
    icon: HiRocketLaunch,
    description: "High-speed, lightweight setup ensuring responsive editing, instant feedback, and efficient handling of all coding features with minimal system load."
  },
  {
    title: "Autocomplete",
    bg: "bg-pink-950",
    fg: "text-pink-300",
    icon: TbBrain,
    description: "Language intelligence system that provides autocomplete, snippets, formatting, linting, diagnostics, code actions, auto pairs, and enhanced completion UI with icons for a fast and context-aware coding experience."
  },
  {
    title: "Beautiful UI",
    bg: "bg-green-950",
    fg: "text-green-300",
    icon: MdOutlinePalette,
    description: "Clean and modern interface with smooth animations, rich icons, polished statusline, and refined visual elements that create a distraction-free and pleasant Neovim experience.",
  },
  {
    title: "Powerful Search",
    bg: "bg-cyan-950",
    fg: "text-cyan-300",
    icon: FaSearch,
    description: "Fast fuzzy searching, smart pattern matching, and quick buffer switching for instantly finding files, text, and symbols across your project."
  },
  {
    title: "Treesitter",
    bg: "bg-green-950",
    fg: "text-green-500",
    icon: FaTree,
    description: "Modern syntax parsing with accurate highlighting, improved indentation, smart folds, context display, auto-tagging, and textobjects for precise code selection."
  },
  {
    title: "Enchantments",
    bg: "bg-gray-800",
    fg: "text-gray-400",
    icon: FaGear,
    description: "Utilities that improve coding workflow with better navigation, visuals, and productivity features inside the editor."
  },
  {
    title: "Customization",
    bg: "bg-blue-950",
    fg: "text-blue-300",
    icon: FaTools,
    description: "Easily customize everything using a clean modular Lua config - change themes, plugins, keymaps, UI, and language support without touching core files."
  },
  {
    title: "Git Integration",
    bg: "bg-red-950",
    fg: "text-red-500",
    icon: FaGitAlt,
    description: "Full Git workflow inside Neovim with inline change indicators, side-by-side diffs, and a clean interface for staging, committing, and managing branches efficiently."
  },
  {
    title: "Plugin Manager",
    bg: "bg-green-950",
    fg: "text-green-300",
    icon: IoExtensionPuzzleSharp,
    description: "Fast and reliable lazy-loaded plugin system with organized structure, loading only required features on demand for better performance and clean configuration management."
  },
  {
    title: "Debugging",
    bg: "bg-yellow-950",
    fg: "text-yellow-500",
    icon: CgDebug,
    description: "Integrated debugging support with breakpoints, runtime inspection, and UI controls for testing and troubleshooting code."
  },
  {
    title: "Keymaps",
    bg: "bg-neutral-800",
    fg: "text-white",
    icon: FaRegKeyboard,
    description: "Powerful keymaps for fast window navigation, buffer management, commenting, formatting, terminal control, and textobjects - designed to maximize speed and workflow efficiency."
  },
  {
    title: "Easy to Use",
    bg: "bg-purple-950",
    fg: "text-purple-300",
    icon: FaDraftingCompass,
    description: "Simple setup with clean, sensible defaults and an intuitive workflow that reduces complexity, making the editor easy to use for both beginners and experienced developers."
  },

]

function Feature() {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-20">
      {
        features.map((item, key) => {
          const Icon = item.icon
          return (
            <div key={key} className="flex flex-col justify-center items-center text-center gap-5 h-max">
              <span className={`${item.bg} p-10 text-6xl rounded-full`}><Icon className={item.fg} /></span>
              <h3 className="text-2xl lg:text-4xl md:text-3xl font-bold text-nowrap">{item.title}</h3>
              <p className="text-[#aaaaaa] text-lg">{item.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Feature
