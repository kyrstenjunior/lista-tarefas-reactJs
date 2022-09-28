import { GoPlus } from 'react-icons/go';

export function InsertTask() {
    
    return(
        <div className="w-1/2 h-12 mt-10 flex items-center justify-evenly">
            <input placeholder='Insira uma tarefa aqui...' type="text" name="insertText" id="insertText" className="w-11/12 h-full pl-5 rounded-md bg-stone-400 text-white font-bold text-xl align-center placeholder:text-[#ffffff60]" />
            <button className='bg-white w-6 h-6 flex justify-center items-center rounded-xl'>
                <GoPlus className='text-green-500 text-xl' />
            </button>
        </div>
    )
}