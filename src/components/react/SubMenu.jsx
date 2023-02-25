import CloseIcon from "../icons/CloseIcon"
import UserIcon from "../icons/UserIcon"
import NotificationsIcon from "../icons/NotificationsIcon"
import SettingsIcon from "../icons/SettingsIcon"
import Button from "../react/Button"
import SignOutIcon from "../icons/SignOutIcon"

export default function SubMenu({userName}){
  return(
    <nav className="flex flex-col absolute w-screen h-screen z-10 right-0 top-0 bg-submenu items-center p-5
    lg:w-96 lg:h-auto lg:top-14 lg:left-none lg:border-b-8 lg:border-green-500">
      <div className="w-full flex flex-col items-center lg:flex-row lg:gap-2">
        <div className="w-full flex justify-end lg:hidden"><CloseIcon width='20' heigth='20'/> </div>
        <img src={`/img/profile-photo/${userName}.png`} alt={userName} className="rounded-full w-32 aspect-square cursor-pointer
        lg:w-12 lg:border-4 lg:border-green-500"/>
        <h2 className="text-white text-3xl mt-2 lg:mt-0 lg:text-xl">{userName}</h2>
      </div>
      <ul className="w-full text-2xl flex flex-col items-start gap-10 py-5 tablet:text-4xl">
        <a href="#" className="text-white">
          <li className="flex gap-3">
            <UserIcon width='30' heigth='30'/>
            Perfil
          </li>
        </a>
        <a href="#" className="text-white">
          <li className="flex gap-3">
            <NotificationsIcon width='30' heigth='30' />
            Notificaciones
          </li>
        </a>
        <a href="#" className="text-white">
          <li className="flex gap-3">
            <SettingsIcon width='30' header='30' />
            Configuracion
          </li>
        </a>
      </ul>
      <div className="flex w-full mt-20">
        <Button>
          Salir
          <SignOutIcon width='30' header='30' />
        </Button>
      </div>
    </nav>
  )
}