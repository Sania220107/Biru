import React, { useState } from 'react'

const Kalkulator = () => {

    const [value, setValue] = useState();
    const handleClick = (e)=> {
        const buttonValue = e.target.value;
        setValue((prevValue) => {
            if(buttonValue === "clear"){
                return "";
            }else if(buttonValue === "del"){
                return prevValue.slice(0,-1);
            }else if(buttonValue === "action"){
                try {
                    return eval(prevValue).toString();
                } catch{
                    return "error";
                }
            }else{
                return prevValue + buttonValue;
            }
        })
    }
  return (
    <section>
        <div className="bg-blue-300 flex justify-center items-center pt-5 h-screen ">
            <div className="bg-blue-100 w-80 h-[550px] rounded-2xl flex flex-col p-5 shadow-[inset_5px_5px_12px_#a0ced9]">
                <form className="h-1/3 w-full rounded-2xl flex justify-center pt-5">
                    <input
                    type="text" 
                    id='screen'
                    value={value}
                    placeholder='0'
                    className='bg-blue-200 border-none text-right text-3xl rounded-2xl shadow-[inset_5px_5px_12px_#a0ced9] w-full outline-none'
                    readOnly/>
                </form>
                <div className="h-2/3 w-full flex justify-center text-center rounded-2xl pt-5">
                   <div className="grid grid-cols-4 gap-4">
                    <button value='clear' onClick={handleClick}
                    className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">AC</button>
                    <button value="del" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">DEL</button>
                    <button value="%" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">%</button>
                    <button value="/" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">/</button>
                    <button value="9" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">9</button>
                    <button value="8" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">8</button>
                    <button value="7" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">7</button>
                    <button value="*" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">x</button>
                    <button value="6" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">6</button>
                    <button value="5" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">5</button>
                    <button value="4" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">4</button>
                    <button value="+" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">+</button>
                    <button value="3" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">3</button>
                    <button value="2" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">2</button>
                    <button value="1" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">1</button>
                    <button value="-" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">-</button>
                    <button value="00" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">00</button>
                    <button value="." onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">.</button>
                    <button value="0" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">0</button>
                    <button value="action" onClick={handleClick} className="bg-sky-300 rounded-2xl h-12 w-12 hover:scale-110 hover:bg-blue-400">=</button>
                    
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Kalkulator