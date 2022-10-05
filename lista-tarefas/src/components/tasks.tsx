import * as Checkbox from '@radix-ui/react-checkbox';
import { useState } from 'react';
import { GoCheck } from "react-icons/go";
import { Item } from "../types/Item";

type Props = {
    item: Item;
}

export function Tasks ({item}: Props){

const [checked, setChecked] = useState(item.done);

    return (
        <div className='w-1/2 h-12 mb-3 flex items-center pl-5 rounded-md bg-stone-600'>
            <Checkbox.Root
                checked={checked}
                onCheckedChange={(checked) => {
                    if(checked === true){
                        setChecked(true);
                        item.done = true;
                    } else {
                        setChecked(false);
                        item.done = false;
                    }
                }}
                id="taskCheck" className='w-4 h-4 bg-white rounded flex items-center justify-center shadow-[#00000024]  hover:bg-[#f5f2ff]'
            >
                <Checkbox.Indicator>
                    <GoCheck className='text-green-500 text-center' />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label htmlFor="taskCheck" className={`text-white pl-3 text-xl ${checked ? 'line-through' : 'initial'}`}>{item.name}</label>
        </div>
    )
}