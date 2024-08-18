import { SetStateAction } from 'jotai';

export interface HeaderProps {
    date: number;
    country: string;
    local: string;
}

export const buttonCount = (count: number | HeaderProps, setCount: (update: SetStateAction<number> | SetStateAction<HeaderProps>) => void, flag: string) => {

    console.log("count: ", count);

    if (typeof count === 'number') {
        if(flag == 'add'){
            setCount(count + 1);
        }else {
            count === 0 ? '' : setCount(count - 1);
        }
    }else{
        if(flag == 'add'){
            console.log("aa: ", count);
            setCount((prev:any) => ({ ...prev, date: prev.date + 1 }));
        }else {
            console.log("bb: ", count);
            count.date === 0 ? '' : setCount((prev:any) => ({ ...prev, date: prev.date - 1 }));
        }
    }
}   