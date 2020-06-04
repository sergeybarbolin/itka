import React from 'react';
import styles from './Pagination.module.css'

const PaginationItem = ({currentPage, index, eventHandler, countElementsPerPage }) => (
    <span 
        className={currentPage === index ? styles.pagination_item + ' ' +  styles.pagination_item_current : styles.pagination_item} 
        onClick={() => {eventHandler(countElementsPerPage, index)}}
    >
        { index }
    </span>
)

const Pagination = ({ countElements, countElementsPerPage, onClickHandler, currentPage }) => {
    const countPages = Math.ceil(countElements / countElementsPerPage);
    let paginationItems = [];
    let paginationTamplate = null;

    if (countPages > 11) {
        if (currentPage < 6) {
            for (let i = 1; i <= 10; i++) {
                paginationItems.push(
                    <PaginationItem 
                        index={i} 
                        currentPage={currentPage} 
                        key={'pagindation-item-' + i}
                        eventHandler={onClickHandler}
                        countElementsPerPage={countElementsPerPage}
                    />
                );
            }
            paginationTamplate = (
                <div className={ styles.pagination_list }>
                    { paginationItems }
                    <> ... </>
                    <PaginationItem 
                        index={countPages} 
                        currentPage={currentPage} 
                        key={'pagindation-item-' + countPages}
                        eventHandler={onClickHandler}
                        countElementsPerPage={countElementsPerPage} 
                    />
                </div> 
            )
        } else if (currentPage > countPages - 6) {
            for (let i = (countPages - 10); i <= countPages; i++) {
                paginationItems.push(
                    <PaginationItem 
                        index={i} 
                        currentPage={currentPage} 
                        eventHandler={onClickHandler}
                        countElementsPerPage={countElementsPerPage}
                        key={'pagindation-item-' + i}
                    />
                );
            }
            paginationTamplate = (
                <div className={ styles.pagination_list }>
                    <PaginationItem 
                        index={1} 
                        currentPage={currentPage} 
                        eventHandler={onClickHandler}
                        countElementsPerPage={countElementsPerPage}
                    />
                    <> ... </>
                    { paginationItems } 
                </div> 
            )
        } else {
            for (let i = (currentPage - 5); i <= (currentPage + 5); i++) {
                paginationItems.push(
                    <PaginationItem 
                        index={i} 
                        currentPage={currentPage} 
                        key={'pagindation-item-' + i}
                        eventHandler={onClickHandler}
                        countElementsPerPage={countElementsPerPage} 
                    />
                );
            }
            paginationTamplate = (
                <div className={ styles.pagination_list }>
                    <PaginationItem 
                        index={1} 
                        currentPage={currentPage} 
                        key={'pagindation-item-' + 1}
                        eventHandler={onClickHandler}
                        countElementsPerPage={countElementsPerPage} 
                    />
                    <> ... </>
                    { paginationItems }
                    <> ... </>
                    <PaginationItem 
                        index={countPages} 
                        currentPage={currentPage} 
                        key={'pagindation-item-' + countPages}
                        eventHandler={onClickHandler}
                        countElementsPerPage={countElementsPerPage} 
                    />
                </div> 
            )
        }
    } else {
        for (let i = 1; i <= countPages; i++) {
            paginationItems.push(
                <PaginationItem 
                    index={i} 
                    currentPage={currentPage} 
                    key={'pagindation-item-' + i}
                    eventHandler={onClickHandler} 
                />
            );
        }
        paginationTamplate = (
            <div className={ styles.pagination_list }>
                { paginationItems }
            </div> 
        )
    }

    return <div className="pagination">{ paginationTamplate } </div>
};

export default Pagination;