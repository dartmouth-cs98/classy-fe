// import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';
// import ReactPaginate from 'react-paginate';
// import {
//   MdOutlineChevronLeft,
//   MdOutlineChevronRight,
// } from 'react-icons/md';
// import {
//   H3, H5,
// } from './ui/typography';
// // eslint-disable-next-line import/no-unresolved
// import styles from '../styles/components/Pagination.module.css';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <div>
//       {currentItems
//                 && currentItems.map((item) => (
//                   <div>
//                     <h3>
//                       Item #
//                       {item}
//                     </h3>
//                   </div>
//                 ))}
//     </div>
//   );
// }

// function PaginatedItems({ itemsPerPage }) {
//   const [itemOffset, setItemOffset] = useState(0);

//   const endOffset = itemOffset + itemsPerPage;
//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <Items currentItems={currentItems} />
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// }
