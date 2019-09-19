import React from 'react';
import {Link, Route} from 'react-router-dom';
export default function MenuLeftItem(props,{match}){
    const id = '/category/' + props.item.id;
    return(
        <li>
            <Link to={id}>
                {props.item.name}
            </Link>
            <Route path={id}/>
        </li>
    )
}