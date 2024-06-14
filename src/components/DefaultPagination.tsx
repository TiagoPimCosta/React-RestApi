import { MouseEvent } from "react";

type DefaultPaginationProps = {
  page: number;
  totalItems: number;
  itemsPerPage: number;
  changePage: (id: number) => void;
};

export function DefaultPagination({
  page,
  totalItems,
  itemsPerPage,
  changePage,
}: DefaultPaginationProps) {
  const handlePagination = (e: MouseEvent<HTMLAnchorElement>, page: number) => {
    e.preventDefault();
    changePage(page);
  };

  const nextPage = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (page !== Math.ceil(totalItems / itemsPerPage)) {
      changePage(++page);
    }
  };

  const prevPage = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    page === 0 ? null : changePage(--page);
  };

  const pages = Array.from(
    { length: Math.ceil(totalItems / itemsPerPage) },
    (_, i) =>
      i === page ? (
        <li>
          <a
            aria-current="page"
            className="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          >
            {i + 1}
          </a>
        </li>
      ) : (
        <li>
          <a
            onClick={(e) => handlePagination(e, i)}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {i + 1}
          </a>
        </li>
      )
  );

  return (
    <>
      <nav>
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li onClick={(e) => prevPage(e)}>
            <a className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>
          {pages}
          <li onClick={(e) => nextPage(e)}>
            <a className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
