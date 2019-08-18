import React, {Component} from 'react';
export default class ContactForm extends Component{
    render(){
        return (
            <div class="col-sm-8 col-lg-9 mtb_20">    
                <div class="row">
                    <div class="col-md-4 col-xs-12 contact">
                        <div class="location mb_50">
                            <h5 class="capitalize mb_20"><strong>Our Location</strong></h5>
                            <div class="address">Office address
                                <br/>124,Lorem Ipsum has been
                                <br/> text ever since the 1500
                            </div>
                            <div class="call mt_10"><i class="fa fa-phone" aria-hidden="true"></i>+91-9987-654-321</div>
                        </div>
                        <div class="Career mb_50">
                            <h5 class="capitalize mb_20"><strong>Careers</strong></h5>
                            <div class="address">dummy text ever since the 1500s, simply dummy text of the typesetting industry. </div>
                            <div class="email mt_10"><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:careers@yourdomain.com" target="_top">careers@yourdomain.com</a></div>
                        </div>
                        <div class="Hello mb_50">
                            <h5 class="capitalize mb_20"><strong>Say Hello</strong></h5>
                            <div class="address">simply dummy text of the printing and typesetting industry.</div>
                            <div class="email mt_10"><i class="fa fa-envelope" aria-hidden="true"></i><a href="mailto:info@yourdomailname.com" target="_top">info@yourdomailname.com</a></div>
                        </div>
                    </div>
                    <div class="col-md-8 col-xs-12 contact-form mb_50">                       
                        <div id="contact_form">
                            <form id="contact_body" method="post" action="contact_me.php">   
                                <input class="full-with-form " type="text" name="name" placeholder="Name" data-required="true" />  
                                <input class="full-with-form  mt_30" type="email" name="email" placeholder="Email Address" data-required="true" />      
                                <input class="full-with-form  mt_30" type="text" name="phone1" placeholder="Phone Number" maxlength="15" data-required="true" />
                                <input class="full-with-form  mt_30" type="text" name="subject" placeholder="Subject" data-required="true" />
                                <textarea class="full-with-form  mt_30" name="message" placeholder="Message" data-required="true"></textarea>
                                <button class="btn mt_30" type="submit">Send Message</button>
                            </form>
                            <div id="contact_results"></div>
                        </div>
                    </div>
                </div>           
            </div>
        
        )
    }
}