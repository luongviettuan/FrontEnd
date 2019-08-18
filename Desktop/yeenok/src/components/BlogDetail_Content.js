import React, {Component} from 'react';
export default class BlogDetailContent extends Component {
    render(){
        return(
            <div class="col-sm-8 col-lg-9 mtb_20">
                <div class="row">
                    <div class="blog-item listing-effect col-md-12 mb_50">
                        <div class="post-format">
                            <div class="thumb post-img"><a href="images/blog/blog_img_01.jpg" title="Beautiful Lady"> <img src={require('../public/images/blog/blog_img_01.jpg')} alt="OYEENok" /></a></div>
                            <div class="post-type"> <i class="fa fa-picture-o" aria-hidden="true"></i> </div>
                        </div>
                        <div class="post-info mtb_20 ">
                            <h2 class="mb_10"> <a href="single_blog.html">Fashions fade, style is eternal</a> </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab </p>
                        </div>
                        <blockquote>consectetur adipiscing elit. In rutrum odio urna, vitae ultrices mi malesuada ut. Praesent lacus erat, ultricies ut risus nec, pellentesque interdum purus. In mi justo, consectetur tincidunt sapien eget, venenatis volutpat risus. Maecenas eget pretium eros. Integer tincidunt aliquet ligula in vulputate. Ut ut justo facilisis, vulputate augue vel, vestibulum tortor. Nullam varius lacus non porttitor sodales. Vivamus ultricies est vitae pharetra convallis. Sed suscipit, nisi sit amet tempus mollis, mauris ante tempor risu</blockquote>
                        etur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae provident minus similique porro assumenda illo dolore ducimus vero ipsum illum ipsa velit, deleniti accusantium repellat facilis tempora ab Lorem ipsum dolor sit amet, consectet
                        <div class="details mtb_20">
                            <div class="date"> <i class="fa fa-calendar" aria-hidden="true"></i>11 May 2017 </div>
                        </div>
                        <div class="author-about mt_50">
                            <h3 class="author-about-title">About the Author</h3>
                            <div class="author mtb_30">
                                <div class="author-avatar"> <img alt="" src={require('../public/images/user1.jpg')} /></div>
                                <div class="author-body">
                                    <h5 class="author-name"><a href="#">Radley Lobortis</a></h5>
                                    <div class="author-content mt_10">Vivamus imperdiet ex sed lobortis luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in tur pis porttitor laoreet. Quisque finibus aliquet purus. Ut et mi eu ante interdum .</div>
                                </div>
                            </div>
                        </div>
                        <div id="comments" class="comments-area mt_50">
                            <h3 class="comment-title">3 comments</h3>
                            <ul class="comment-list mt_30">
                                <li class="comment">
                                    <hr></hr>
                                    <article class="comment-body mtb_20">
                                        <div class="comment-avatar"> <img alt="" src={require('../public/images/user2.jpg')} /> </div>
                                        <div class="comment-main">
                                            <h5 class="author-name"> <a href="#" class="comment-name">Radley Lobortis</a> <small class="comment-date">8 months ago</small> </h5>
                                            <div class="comment-reply pull-right"> <a href="#"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a> </div>
                                            <div class="comment-content mt_10">Sed lobortis rpi luctus. Aenean posuere nulla in turluctus. Aenean posuere nulla in turs porttitor larpis porttitor larpis porttitor lauctus. Aenean posuere nulla in turpis porttitor laoreet.</div>
                                        </div>
                                    </article>
                                    <hr></hr>
                                    <ol class="children">
                                        <li class="comment">
                                            <article class="comment-body mtb_20">
                                                <div class="comment-avatar"> <img alt="" src={require('../public/images/user3.jpg')} /> </div>
                                                <div class="comment-main">
                                                    <h5 class="author-name"> <a href="#" class="comment-name">Lobortis Radley</a> <small class="comment-date">1 months ago</small> </h5>
                                                    <div class="comment-reply pull-right"> <a href="#"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a> </div>
                                                    <div class="comment-content mt_10">Dcenas euismod faucibus dolor a finibus.Maecenas euismod faucibus dolor a finibus.Maecenas euismod faucibus dolor a finibus.Maecenas euismod faucibus.</div>
                                                </div>
                                            </article>
                                        </li>
                                    </ol>
                                </li>
                                <li class="comment">
                                    <hr></hr>
                                    <article class="comment-body mtb_20">
                                        <div class="comment-avatar"> <img alt="" src={require('../public/images/user1.jpg')} /> </div>
                                        <div class="comment-main">
                                            <h5 class="author-name"> <a href="#" class="comment-name">Sradle Vivamus </a> <small class="comment-date">8 days ago</small> </h5>
                                            <div class="comment-reply pull-right"> <a href="#"><i class="fa fa-reply" aria-hidden="true"></i> Reply</a> </div>
                                            <div class="comment-content mt_10">Vivamus imperdiet ex sed lobortis luctus. Aenean posuere nulla in turpis porttitor laoreet. Quisque finibus aliquet purus. Ut et mi eu ante interdum dignissim pellentesque a mi.</div>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                            <div class="leave-form">
                                <h3 class="comment-title mt_50 mb_30" id="reply-title">Leave A Comment</h3>

                                <div class="form-style" id="contact_form">
                                    <div id="contact_results"></div>
                                    <div class="row">
                                        <form id="contact_body" method="post">
                                            <div class="col-sm-6">
                                                <input class="full-with-form" type="text" name="name" placeholder="Name" data-required="true" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input class="full-with-form" type="email" name="email" placeholder="Email Address" data-required="true" />
                                            </div>
                                            <div class="col-sm-12 mt_30">
                                                <textarea class="full-with-form" name="message" placeholder="Message" data-required="true"></textarea>
                                            </div>
                                            <div class="col-sm-6">
                                                <button class="btn mt_30" type="submit">Leave Comment</button>
                                            </div>
                                        </form>
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