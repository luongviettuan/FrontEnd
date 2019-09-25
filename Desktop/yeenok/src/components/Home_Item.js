import React, {Component} from 'react';
import SubHomeBanner from '../sub_components/Sub_Home_Banner';
import SubHomeItem2 from '../sub_components/Sub_Home_Item2';
import SubHomeBlog from '../sub_components/Sub_Home_Blog';
export default class HomeItem extends Component{
    render(){
        return (
            <div className="row ">
                <SubHomeBanner />
                <SubHomeItem2 />
                
            </div>
    
        )
    }
}