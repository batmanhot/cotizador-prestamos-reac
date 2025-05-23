
function Button({operation, fn}) {
    console.log(operation)
    return ( 
         <button type="button" className='text-center bg-blue-500 h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-line-600 rounded-full p-4
          hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-600' onClick={fn}>
         {operation}
          </button>
     );
}




export default Button;