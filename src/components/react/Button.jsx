export default function Button(props){
  return(
    <button id={props.id} onClick={() => props.click()} className='text-white bg-secundari py-2 w-full md:w-2/3 justify-self-center my-5 transition-all duration-300 text-2xl flex justify-center gap-3'  >
      {props.children}
    </button>
  )
}