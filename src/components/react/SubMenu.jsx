import CloseIcon from "../icons/CloseIcon"
import UserIcon from "../icons/UserIcon"
import NotificationsIcon from "../icons/NotificationsIcon"
import SettingsIcon from "../icons/SettingsIcon"
import SignOutIcon from "../icons/SignOutIcon"

export default function SubMenu({userName, subMenuStyle, handleSubMenu}){


  return(
    <nav className={`${subMenuStyle} overflow-hidden flex flex-col absolute w-screen z-10 right-0 top-0 bg-submenu items-center
    lg:w-96 lg:top-14 lg:left-none transition-all duration-700`}>
      <div className="w-full flex flex-col items-center lg:flex-row lg:gap-2 lg:backdrop-blur-sm
       lg:bg-green-500/30 lg:p-4 lg:rounded-xl">
        <div className="w-full flex justify-end lg:hidden" onClick={() => handleSubMenu()}>
          <CloseIcon width='20' heigth='20'/>
        </div>
        <img src={`/img/profile-photo/${userName}.png`} alt={userName} className="rounded-full w-32 aspect-square cursor-pointer
        lg:w-12 lg:border-4 lg:border-white"/>
        <h2 className="text-white text-3xl mt-2 lg:mt-0 lg:ml-3">{userName}</h2>
      </div>
      <ul className="w-full text-2xl flex flex-col items-start gap-10 py-5 mt-20 tb:text-4xl 
      lg:text-xl lg:mt-0 lg:ml-0 lg:gap-3">
        <a href="#" className="text-white lg:w-full hover:lg:backdrop-blur-sm
       hover:lg:bg-green-500/30 rounded-md lg:py-2 lg:px-3 transition-all">
          <li className="flex gap-5 tb:gap-7 lg:gap-3">
            <UserIcon width='30' heigth='30'/>
            Perfil
          </li>
        </a>
        <a href="#" className="text-white lg:w-full hover:lg:backdrop-blur-sm
       hover:lg:bg-green-500/30 rounded-md lg:py-2 lg:px-3 transition-all">
          <li className="flex gap-5 tb:gap-7 lg:gap-3">
            <NotificationsIcon width='30' heigth='30'/>
            Notificaciones
          </li>
        </a>
        <a href="#" className="text-white lg:w-full hover:lg:backdrop-blur-sm
       hover:lg:bg-green-500/30 rounded-md lg:py-2 lg:px-3 transition-all">
          <li className="flex gap-5 tb:gap-7 lg:gap-3">
            <SettingsIcon width='30' heigth='30'/>
            Configuracion
          </li>
        </a>
        <a href="#" className="text-white lg:w-full hover:lg:backdrop-blur-sm
       hover:lg:bg-green-500/30 rounded-md lg:py-2 lg:px-3 transition-all">
          <li className="flex gap-5 tb:gap-7 lg:gap-3">
            <SignOutIcon width='30' heigth='30'/>
            Salir
          </li>
        </a>

      </ul>
    </nav>
  )
}