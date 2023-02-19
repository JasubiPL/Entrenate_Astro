import GymIcon from "../icons/GymIcon"

export default function Header(){

  let userName = 'Jasubi'

  return(
    <header className="bg-personal-black flex p-1 justify-between items-center h-14 xl:px-4">
      {/* Logo and user name */}
      <div className="flex items-center">
        <GymIcon width='40' heigth='40' fill='#fff'/>
        <h1 className="ml-3 text-2xl flex h-50 text-white" >Hola<span className="text-green-500 ml-2">{userName}</span></h1>
      </div>
      {/* Menu */}
      <nav>

      </nav>
      {/* User profile photo */}
      <img src={`/img/profile-photo/${userName}.png`} alt={userName} className="rounded-full h-10 align-middle"/>
    </header>
  )
}