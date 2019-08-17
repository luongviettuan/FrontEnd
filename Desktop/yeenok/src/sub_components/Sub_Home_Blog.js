import React, {Component} from 'react';
export default class SubHomeBlog extends Component{
    render(){
        return (
            <div id="Blog" className="mt_50">
                    <div className="heading-part mb_10 ">
                        <h2 className="main_title">Latest News</h2>
                    </div>
                    <div className="blog-contain box">
                        <div className="col-sm-4 item">
                                <div className="box-holder">
                                    <div className="thumb post-img">
                                        <a href="#"> <img src={require( "../public/images/blog/blog_img_01.jpg")} alt="OYEENok" /> </a>
                                        <div className="date-time text-center">
                                            <div className="day"> 11</div>
                                            <div className="month">Aug</div>
                                        </div>
                                        <div className="post-image-hover"> </div>
                                        <div className="post-info">
                                            <h6 className="mb_10 text-uppercase"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h6>
                                            <div className="view-blog">
                                                <div className="write-comment pull-left"> <a href="single_blog.html"> 0 Comments</a> </div>
                                                <div className="read-more pull-right">
                                                    <a href="single_blog.html"> <i className="fa fa-link"></i> read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-sm-4 item">
                                <div className="box-holder">
                                    <div className="thumb post-img">
                                        <a href="#"> <img src={require( "../public/images/blog/blog_img_02.jpg")} alt="OYEENok" /> </a>
                                        <div className="date-time text-center">
                                            <div className="day"> 11</div>
                                            <div className="month">Aug</div>
                                        </div>
                                        <div className="post-image-hover"> </div>
                                        <div className="post-info">
                                            <h6 className="mb_10 text-uppercase"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h6>
                                            <div className="view-blog">
                                                <div className="write-comment pull-left"> <a href="single_blog.html"> 0 Comments</a> </div>
                                                <div className="read-more pull-right">
                                                    <a href="single_blog.html"> <i className="fa fa-link"></i> read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="col-sm-4 item">
                                <div className="box-holder">
                                    <div className="thumb post-img">
                                        <a href="#"> <img src={require( "../public/images/blog/blog_img_01.jpg")} alt="OYEENok" /> </a>
                                        <div className="date-time text-center">
                                            <div className="day"> 11</div>
                                            <div className="month">Aug</div>
                                        </div>
                                        <div className="post-image-hover"> </div>
                                        <div className="post-info">
                                            <h6 className="mb_10 text-uppercase"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h6>
                                            <div className="view-blog">
                                                <div className="write-comment pull-left"> <a href="single_blog.html"> 0 Comments</a> </div>
                                                <div className="read-more pull-right">
                                                    <a href="single_blog.html"> <i className="fa fa-link"></i> read more</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            
        )
    }
}