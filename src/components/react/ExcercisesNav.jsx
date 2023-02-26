export default function ExcercisesNav(props){
  return(
    <nav className=' w-full h-auto lg:max-w-5xl'>
      <ul className="text-white w-full  m-0 p-2 gap-4 flex flex-shrink overflow-x-auto">
        <a href="/ejercicios/aparatos">
          <li className="bg-personal-black p-2 skew-x-6">Aparatos</li>
        </a>
        <a href="/ejercicios/aparatos">
          <li className="bg-personal-black p-2 skew-x-6">Mancuernas</li>
        </a>
        <a href="/ejercicios/aparatos">
          <li className="bg-personal-black p-2 skew-x-6">Ligas</li>
        </a>
        <a href="/ejercicios/aparatos">
          <li className="bg-personal-black p-2 skew-x-6">Por Area Muscular</li>
        </a>
      </ul>
    </nav>
  )
}