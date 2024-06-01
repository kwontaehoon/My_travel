interface ButtonCountProps {
    count: number;
    setCount: (count: number) => void;
    flag: string;
}

export const buttonCount = ({count, setCount, flag}: ButtonCountProps) => {
    if(flag == 'add'){
        setCount(count + 1);
    }else {
        count === 0 ? '' : setCount(count - 1);
    }
}