import PagerView from "react-native-pager-view";

interface HandleNextPageProps {
    pagerRef: React.RefObject<PagerView>;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export const handleNextPage = ({ pagerRef, currentPage, setCurrentPage }: HandleNextPageProps) => {
    if (pagerRef.current) {
        const nextPage = currentPage + 1;
        pagerRef.current.setPage(nextPage);
        setCurrentPage(nextPage);
    }
};