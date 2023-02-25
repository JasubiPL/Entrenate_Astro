import Button from './Button';
import { useState } from 'react';
import { changeLogin, loged } from '../../js/handleLogin';


export default function LoginForm(){

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = e =>{
    e.preventDefault();

    if(userName === 'jasubi@gmail.com' && password === '123456'){
      changeLogin()
      alert(loged)
    }else{
      alert('Claves incorrectas')
    }


  }

  return(
    <main className="grid content-center h-full w-full row-span-3">
      <form className="w-5/6 lg:w-80 grid justify-self-center " onSubmit={handleLogin}>

        <h1 className="mb-5 text-center text-white text-5xl">PINEYRO FIT</h1>

        <label className=" text-white">Nombre de Usuario</label>
        <input 
          type='email' 
          placeholder='Escribe tu correo' 
          onChange={(e) => setUserName(e.target.value)} 
          value={userName}
          className="mb-3 text-white bg-white/20 skew-x-12 px-3 py-2 outline-none border-solid border-l-8 border-green-600"
        />

        <label className=" text-white mt-5">Nombre de Usuario</label>
        <input 
          type='password' 
          placeholder='Escribe tu contraseña' 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className="mb-3 text-white bg-white/20 skew-x-12 px-3 py-2 outline-none border-solid border-l-8 border-green-600"
        />

        <Button click={() => alert("click")}> Entrar</Button>
      </form>
    </main>
  )
}