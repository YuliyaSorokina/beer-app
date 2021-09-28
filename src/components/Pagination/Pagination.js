import React from 'react';
import {Pagination as PaginationMui} from "@material-ui/core";

import './Pagination.scss';

const Pagination = ({page, count, onChange}) =>{
    return (
        <div className='pagination'>
            <PaginationMui count={count} variant="outlined" color="primary" page={page} onChange={onChange}/>
        </div>
    )
}

export default Pagination;