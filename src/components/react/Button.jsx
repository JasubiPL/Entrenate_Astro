export default function Button(props){
  return(
    <button id={props.id} onClick={() => props.click()} className='text-white bg-green-500 rounded-full py-2 w-full md:w-2/3 justify-self-center my-5 hover:bg-green-700 transition-all duration-300 text-2xl'  >
      {props.text}
    </button>
  )
}