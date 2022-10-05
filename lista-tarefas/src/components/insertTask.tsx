import { useState, KeyboardEvent } from 'react';
import { GoPlus } from 'react-icons/go';

type Props = {
    onEnter: (taskName: string) => void;
}

export function InsertTask({ onEnter }: Props) {
    
    const [inputText, setInputText] = useState('');

    function handleKeyUp (e: KeyboardEvent) {
        if(e.code === "Enter" && inputText !== ""){
            onEnter(inputText);
            setInputText("");
        }
    }

    return(
        <div className="w-1/2 h-12 my-10 flex items-center justify-evenly bg-stone-400 rounded-md">
            <GoPlus className='text-white text-xl w-6 h-6' />
            <input
                placeholder='Insira uma tarefa aqui... + "Enter"'
                type="text"
                value={inputText}
                onChange={ e => setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
                className="w-11/12 h-full pl-5 bg-stone-400 text-white font-bold text-xl align-center placeholder:text-[#ffffff60] focus:shadow-none outline-none"
            />
        </div>
    )
}