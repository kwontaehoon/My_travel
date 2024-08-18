import { SetStateAction } from "react";

export const checkBbox = (
    state: boolean[],
    setState: (update: SetStateAction<boolean[]>) => void,
    selectIndex: number,
    dupl?: boolean
) => {

    let arr = [];

    if(dupl){
        // 중복 허용
        arr = [...state];
    } else {
        // 중복 불가
        arr = Array(state.length).fill(false);
    }

    arr[selectIndex] = true;
    setState(arr);
}