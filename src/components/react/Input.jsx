export default function Input(props){
  return(
    <input 
      id={props.id} 
      type={props.type} 
      placeholder={props.placeholder} 
      className="mb-3 text-white bg-white/20 skew-x-12 px-3 py-2 outline-none border-solid border-l-8 border-secundari"
    />
  )
}