export default function Input({id, type, placeholder}){
  return(
    <input 
      id={id} 
      type={type} 
      placeholder={placeholder} 
      className="mb-3 text-white bg-white/20 skew-x-12 px-3 py-2 outline-none border-solid border-l-8 border-green-600"
    />
  )
}