import Header from "./components/header"
import Button from "./components/button";
import {Formateardinero, Calcularpagototal} from "./helpers/index.js";

import { useState, useEffect } from "react"



function App() {
  let [cantidad, setcantidad] = useState(10000);
  let [meses, setmeses] = useState(6);
  let [total, settotal] = useState(0);
  let [pago, setpago] = useState(0);


  // Se ejecuta Cada vez que el componente se renderiza o cambia el valor de cantidad
  useEffect(() => { 

    //Calcular el pago total
    console.log('Componente Listo o cuando la cantidad o los meses han cambiado');
    settotal(Calcularpagototal(cantidad, meses))

    //Calcular el pago mensual
    setpago(total / meses)

  }, [cantidad, meses, total]  
);



  const max  = 10000;
  const min  = 0;
  const step = 100;

  
  function handleChange(e){        
    console.log(parseInt(e.target.value));
    setcantidad(+e.target.value);
  }

  function handleClickIncrement(){
    const valor = cantidad + step  

    if (valor > max){
      alert("Cantidad NO VALIDA !!");
    }
    setcantidad(valor);  
  }

  function handleClickDecrement(){
    const valor = cantidad - step  
    
    if (valor < min){
      alert("Cantidad NO VALIDA !!");
    }
    setcantidad(valor);  
  }

   return (
     <>
     <div className='my-20 max-w-lg mx-auto bg-white shadow-900 p-10'>         
        <Header/>

        <div className="flex justify-between my-6">

          <Button 
            operation='-'
            fn = {handleClickDecrement}
          />
          <Button 
            operation='+'
            fn = {handleClickIncrement}
          />

          {/* <button type="button" className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-line-600 rounded-full
          hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-600' onClick={handleClickDecrement}>
            -
          </button>

          <button type="button" className="h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-line-600 rounded-full
          hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-indigo-600 " onClick={handleClickIncrement}>
            +
          </button> */}
        </div>

        <input type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 range-thumb"
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          value={cantidad}
        />
        <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{Formateardinero(cantidad)}</p>

        <h2 className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
            Elige un <span className="text-indigo-600">Plazo </span>  a pagar 
        </h2>

        <select className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500' value={meses} onChange={e => setmeses(+e.target.value)}>
          <option value="6">6 Meses </option>
          <option value="12">12 Meses </option>
          <option value="18">18 Meses </option>
          <option value="24">24 Meses </option>
        </select>        

        <div className="my-5 space-y-5 bg-gray-50 p-5" >
          <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
            RESUMEN <span className="text-indigo-600"> de Pagos </span>
          </h2>


          <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
          <p className="text-xl text-gray-500 text-center font-bold">{Formateardinero(Calcularpagototal(cantidad, meses))} Total a pagar</p>
          <p className="text-xl text-gray-500 text-center font-bold">{Formateardinero(pago)} Mensuales</p>
        </div>

     </div>

     </>


   )
 }

export default App
