export default function Button(props){
  return(
    <button className='text-white bg-green-500 rounded-full py-3 w-full lg:w-2/3 justify-self-center my-5' onClick={props.click} >
      {props.text}
    </button>
  )
}