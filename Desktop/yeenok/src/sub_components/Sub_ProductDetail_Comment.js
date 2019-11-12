import React, { Component } from 'react';
import StarsRating from 'stars-rating'
import Axios from 'axios';
import {withCookies} from 'react-cookie';
import {Button} from 'reactstrap'

class SubProductDetailComment extends Component {
    constructor(props){
        super(props);
        const { cookies } = props;
        this.state = {
            listReview : [],
            comment : '',
            rate_star : '',
            user_id : cookies.get('user_id') || '',
            active: false

        }
        this.ratingChanged = this.ratingChanged.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSummit = this.handleSummit.bind(this)
    }
    ratingChanged(newRating){
        this.setState({
            rate_star: newRating
        })
    }
    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }
    handleSummit(){
        const {user_id, comment, rate_star} = this.state;
        const {product_id} = this.props;
        if(user_id !== ""){
            Axios.post('http://localhost:8080/review/new_review',
            {
                user_id,
                product_id,
                comment,
                rate_star
            }).then(res=>{
                if(res.data.code === 200){
                    this.setState({
                        comment : '',
                        rate_star: '',
                        active: true
                    })
                }
            })
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.active === true){
            const {product_id} = this.props
            Axios.get(`http://localhost:8080/review/${product_id}`)
                .then(res =>{
                    const listReview = res.data.result;
                    this.setState({
                        listReview : listReview
                    })
                })
        }
    }
    componentDidMount(){
        const {product_id} = this.props
        Axios.get(`http://localhost:8080/review/${product_id}`)
            .then(res =>{
                const listReview = res.data.result;
                this.setState({
                    listReview : listReview
                })
            })
    }
    render() {
        
        const {listReview, user_id} = this.state;
        if(user_id){
            return (
                <form className="form-horizontal">
                    <div id="review"></div>
                    <h4 className="mt_20 mb_30">Cảm Nhận Của Bạn</h4>
                    <div className="form-group required">
                        <div className="col-sm-12">
                            <label className="control-label">Bình Luận Của Bạn</label>
                            <textarea
                                className="form-control"
                                name="comment"
                                onChange={this.handleChange}
                                value={this.state.comment}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="form-group required">
                        <div className="col-md-6">
                            <label className="control-label">Đánh Giá</label>
                            <StarsRating
                                count={5}
                                className="star"
                                value={this.state.rate_star}
                                onChange={this.ratingChanged}
                                size={24}
                                color2={'#ffd700'}
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="buttons pull-right">
                                <Button
                                    color="success"
                                    onClick={this.handleSummit}
                                >
                                    Bình Luận
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div  style={{paddingTop : '5rem'}}>
                        {
                            listReview.length>0 && listReview.map((review, index )=>
                                (<div key={index} className="container" style={{paddingBottom : '5rem'}}>
                                    <div className="row">
                                        <div className="col-sm-2 offset-1"><strong>{review.full_name}</strong></div>
                                        <div className="col-sm-4">
                                            <StarsRating
                                                count={5}
                                                value={review.rate_star}
                                                size={20}
                                                color2={'#ffd700'}
                                                edit={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-sm-4 offset-1">
                                        <span style={{paddingRight:'1rem'}}>{`[${review.date}]`}</span>
                                        {
                                            review.comment
                                        }
                                    </div>
                                    </div>
                                </div>)
                            )
                        }
                        
                    </div>
                </form>
            )
        }
        else{
            return (<p>Vui Lòng Đăng Nhập Trước Khi Bình Luận</p>)
        }
    }
}
export default withCookies(SubProductDetailComment);