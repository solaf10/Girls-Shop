import { useState } from "react";

export const usePagination = (cards = [], cardsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(0);

  const start = currentPage * cardsPerPage;
  const end = Math.min(start + cardsPerPage, cards.length);

  const currentCards = cards.slice(start, end);

  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const isBtnDisabled =
    currentPage + 1 >= Math.ceil(cards.length / cardsPerPage);

  const goToPage = (page) => setCurrentPage(page);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return {
    currentPage,
    totalPages,
    currentCards,
    goToPage,
    nextPage,
    prevPage,
    isBtnDisabled,
  };
};
export default usePagination;
