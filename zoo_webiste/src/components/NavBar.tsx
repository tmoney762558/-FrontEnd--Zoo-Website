import { NavLink } from "react-router-dom"
import zooLogo from "../assets/zooLogo.png"


const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-20">
        <ul className="flex lg:justify-between justify-center w-full py-5 lg:px-10 md:px-5 px-1 text-white oswald">
            <li><NavLink to={"./"}><img className="w-[5rem]" src={zooLogo}></img></NavLink></li>
            <li className="lg:flex hidden items-center gap-4">
                <NavLink><p className="border-b-2 border-transparent hover:border-white cursor-pointer">Animals</p></NavLink>
                <NavLink><p className="border-b-2 border-transparent hover:border-white cursor-pointer">Donations</p></NavLink>
                <NavLink><p className="py-1 px-5 border-2 border-white cursor-pointer">Plan Your Visit!</p></NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar