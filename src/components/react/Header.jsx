import BlogIcon from "../icons/BlogIcon"
import EatIcon from "../icons/EatIcon"
import GymIcon from "../icons/GymIcon"
import HomeIcon from "../icons/HomeIcon"

export default function Header(){

  let userName = 'David'

  return(
    <header className="bg-personal-black grid grid-rows-2 grid-cols-2 p-1 items-center h-28 lg:h-14 xl:px-4 lg:grid-rows-1 lg:grid-cols-3">
      {/* Logo and user name */}
      <div className="flex items-center cursor-pointer" >
        <GymIcon width='40' heigth='40' fill='#fff'/>
        <h1 className="ml-3 text-2xl flex h-50 text-white" >Hola<span className="text-green-500 ml-2">{userName}</span></h1>
      </div>
      {/* Menu */}
      <nav className="flex bg-personal-black w-full justify-center row-start-2 col-span-2 lg:row-start-1 lg:col-start-2 lg:col-span-1">
        <ul className="flex w-full max-w-xl justify-around">
          <a href="/"><li><HomeIcon width='26' heigth='26'/></li></a>
          <a href="/blog"><li><BlogIcon width='26' heigth='26' /></li></a>
          <a href="/ejercicio"><li><GymIcon width='26' heigth='26' fill='#fff'/></li></a>
          <a href="/recetas"><li><EatIcon width='26' heigth='26' /></li></a>
        </ul>
      </nav>
      {/* User profile photo and menu 2 */}
      <div className="flex justify-end">
        <img src={`/img/profile-photo/${userName}.png`} alt={userName} className="rounded-full h-10 cursor-pointer"/>
      </div>
    </header>
  )
}