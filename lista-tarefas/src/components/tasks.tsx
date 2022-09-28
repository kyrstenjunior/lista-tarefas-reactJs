import * as Checkbox from '@radix-ui/react-checkbox';
import { useState } from 'react';
import { GoCheck } from "react-icons/go";

export function Tasks (){

const [selectTask, setSelectTask] = useState(false);

    return (
        <div className='w-1/2 h-12 mt-10 flex items-center pl-5 rounded-md bg-stone-600'>
            <Checkbox.Root
                checked={selectTask}
                onCheckedChange={(checked) => {
                    if(checked === true){
                        setSelectTask(true);
                    } else {
                        setSelectTask(false);
                    }
                }}
                id="taskCheck" className='w-4 h-4 bg-white rounded flex items-center justify-center shadow-[#00000024]  hover:bg-[#f5f2ff]'
            >
                <Checkbox.Indicator>
                    <GoCheck className='text-green-500 text-center' />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label htmlFor="taskCheck" className='text-white pl-3 text-xl'>Aqui dentro vai a tarefa digitada</label>
        </div>
    )
}