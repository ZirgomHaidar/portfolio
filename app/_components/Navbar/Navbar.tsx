import Image from "next/image"
import logo from "@/public/ZHlogo.svg"
import menu from "@/public/menu.svg"

export default function Navbar() {
  return (
    <nav className="m-2 my-6 flex items-center justify-between md:m-10 lg:m-10">
      <Image src={logo} alt="melogo" className="size-11 md:size-14" />
      <Image src={menu} alt="melogo" className="size-8 md:size-10" />
    </nav>
  )
}
