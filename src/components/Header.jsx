import logo from "../assets/logo.jpg";
import Navbar from "./Navbar";

export const Header = () => {
  return (
    <header className="bg-white-500 flex place-content-between items-center mb-8 ">
      <img src={logo} alt="logo nflgirls" className="w-16  cursor-pointer" />
      <Navbar/>
    </header>
  )
}

