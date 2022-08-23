import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '../Icon';
import './Pagination.scss';
function Pagination({ pageCount, onPageClick }) {
    console.log(pageCount);
    // let styles = (nextLabel) => {
    //     nextLabel : ()
    //     return styles;
    // };
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<ChevronRightIcon />}
                onPageChange={onPageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<ChevronLeftIcon />}
                renderOnZeroPageCount={null}
                className="pagination"
            />
        </div>
    );
}
export default Pagination;
