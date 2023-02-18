export default function Header(){

  let userName = 'Jasubi'

  return(
    <header className="bg-personal-black flex p-1 justify-between items-center h-14 xl:px-4">
      <div className="flex items-center">
        <img src='/img/icons/logo.png' alt='logoIcon' className="h-8 align-middle"/>
        <h1 className="ml-3 text-2xl flex h-50 text-white" >Hola<span className="text-green-500 ml-2">{userName}</span></h1>
      </div>
      <img src={`/img/profile-photo/${userName}.png`} alt={userName} className="rounded-full h-10 align-middle"/>
    </header>
  )
}