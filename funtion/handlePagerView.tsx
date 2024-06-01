import PagerView from "react-native-pager-view";

interface HandlePageViewProps {
    pagerRef: React.RefObject<PagerView>;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

// pageView 이전 버튼
export const handlePreviosPage = ({ pagerRef, currentPage, setCurrentPage}: HandlePageViewProps) => {
    if (pagerRef.current && currentPage !== 0) {
        const nextPage = currentPage - 1;
        pagerRef.current.setPage(nextPage);
        setCurrentPage(nextPage);
    }
}

// pagerView 다음 버튼
export const handleNextPage = ({ pagerRef, currentPage, setCurrentPage }: HandlePageViewProps) => {
    if (pagerRef.current) {
        const nextPage = currentPage + 1;
        pagerRef.current.setPage(nextPage);
        setCurrentPage(nextPage);
    }
};