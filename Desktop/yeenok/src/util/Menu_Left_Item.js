import React from 'react';
import {Link} from 'react-router-dom';
export default function MenuLeftItem(props){
    return(
        <li>
            <Link to={`/category/${props.item.category_id}`} >
                {props.item.category_name}
            </Link>
        </li>
    )
}