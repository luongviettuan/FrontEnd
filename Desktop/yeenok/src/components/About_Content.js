import React, {Component} from 'react';
export default class AboutContent extends Component{
    render(){
        return(
                <div class="col-sm-8 col-lg-9 mtb_20">
                            <div class="row">
                            <div class="col-md-12">
                                <figure> <img src={require('../public/images/about-page-gaando.jpg')} alt="#" /> </figure>
                            </div>
                            <div class="col-md-12">
                                <div class="about-text">
                                    <div class="about-heading-wrap">
                                        <h2 class="about-heading mb_20 mt_40 ptb_10">OYEENok Design is Best Part of <span>my Life </span></h2>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                    <button type="button" class="btn mt_30">HIRE ME</button>
                                </div>
                            </div>
                            </div>
                            <div class="row">
                            <div class="col-md-6">
                                <div class="heading-part mb_20 mt_40">
                                    <h2 class="main_title">What We Do?</h2>
                                </div>
                                <div class="panel-group" id="accordion">
                                    <div class="panel panel-default pull-left">
                                        <div class="panel-heading">
                                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">1. What is HTML?</a> </h4>
                                        </div>
                                        <div id="collapseOne" class="panel-collapse collapse in">
                                        <div class="panel-body">
                                            <p>HTML is a computer language devised to can then b the Internet. It is relatively easy to learn, with the basics being accessible.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default pull-left">
                                        <div class="panel-heading">
                                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">2. What is Bootstrap?</a> </h4>
                                        </div>
                                        <div id="collapseTwo" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <p>Bootstrap is the most popular HTML, CSS, and JS frameen I discovered Bootstrap a few was still gaining in popularity, addition to HTML, CSS and JS.</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="panel panel-default pull-left">
                                        <div class="panel-heading">
                                        <h4 class="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">3. What is CSS?</a> </h4>
                                        </div>
                                        <div id="collapseThree" class="panel-collapse collapse">
                                        <div class="panel-body">
                                            <p>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the procrt of a web page. Using CSS.</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="heading-part mb_20 mt_40 ">
                                    <h2 class="main_title">Skills</h2>
                                </div>
                                <div id="p_line">
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}> <span class="sr-only">60% Complete</span> </div>
                                        <span class="progress-type">HTML / HTML5</span> <span class="progress-completed">60%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}> <span class="sr-only">40% Complete (success)</span> </div>
                                        <span class="progress-type">ASP.Net</span> <span class="progress-completed">40%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}> <span class="sr-only">20% Complete (info)</span> </div>
                                        <span class="progress-type">Java</span> <span class="progress-completed">20%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}> <span class="sr-only">60% Complete (warning)</span> </div>
                                        <span class="progress-type">JavaScript / jQuery</span> <span class="progress-completed">60%</span> 
                                    </div>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}> <span class="sr-only">80% Complete (danger)</span> </div>
                                        <span class="progress-type">CSS / CSS3</span> <span class="progress-completed">80%</span> 
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div class="heading-part mb_10">
                            <h2 class="main_title mt_50">Our Creative Team</h2>
                            </div>
                            <div class="team_grid box">
                            
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm1.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm2.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm3.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-3 item team-detail">
                                    <div class="team-item-img"> <img src={require('../public/images/tm4.jpg')} alt="" /> </div>
                                    <div class="team-designation mt_20">php Developer</div>
                                    <h4 class="team-title  mtb_10">joseph Lui </h4>
                                    <p>Lorem ipsum dolor sit amet, sea in odio erat, volumu Clita prodesset Rem ipsum dolor s..</p>
                                    <ul class="social mt_20 mb_80">
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.twitter.com/" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.dribbble.com/" target="_blank"><i class="fa fa-dribbble"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fa fa-pinterest"></i></a></li>
                                        <li><a href="https://www.behance.net/" target="_blank"><i class="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    
        )
    }
}