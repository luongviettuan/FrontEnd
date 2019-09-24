import React from 'react';
import {Link, Route} from 'react-router-dom';
export default function MenuLeftItem(props,{match}){
    const id = '/category/' + props.item.category_id;
    return(
        <li>
            <Link to={props.item.category_id}>
                {props.item.category_name}
            </Link>
            <Route path={props.item.category_id}/>
        </li>
    )
}