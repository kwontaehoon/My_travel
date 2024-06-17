import { headerAtom } from '@/store/course';
import { SetStateAction } from 'jotai';

export interface HeaderProps {
    date: number;
    country: string;
    local: string;
}

interface ButtonCountProps {
    count: number;
    setCount: (count: number | SetStateAction<HeaderProps>) => void;
    flag: 'add' | 'subtract';
}

export const buttonCount = (count: number, setCount: SetStateAction<HeaderProps>, flag: string) => {
    if (typeof count === 'number') {
        if(flag == 'add'){
            setCount(count + 1);
        }else {
            count === 0 ? '' : setCount(count - 1);
        }
    }else{
        if(flag == 'add'){
            setCount(prevState => ({ ...prevState, date: prevState.date + 1 }));
        }else {
            count === 0 ? '' : setCount(prevState => ({ ...prevState, date: prevState.date - 1 }));
        }
    }
}   