import React, { useState } from 'react'
import './homelanding.css'
import leftqoutemark from '../../IMAGES1/left_quote.png'
import rightqoutemark from '../../IMAGES1/right_quote.png'
import workinactionimg from '../../IMAGES1/work_in_action_title.png'
import servicetitleImg from '../../IMAGES1/service_title.png'
import ourclient from '../../IMAGES1/our_clients_title.png';
import brand from '../../IMAGES1/prime1.png'
import keyboard from '../../IMAGES1/joinus_bg_1.png'
import pen from '../../IMAGES1/joinus_bg_2.png'
import book from '../../IMAGES1/joinus_bg_3.png'
import joinUs from '../../IMAGES1/join_us_title.png'
import plateformTechImg from '../../IMAGES1/platform & Tech..jpg'
import marketingService from '../../IMAGES1/digital_marketing.jpg'
import talentImg from '../../IMAGES1/talent_services.jpg'
import brand1 from '../../IMAGES1/brand_1.jpg';
import brand2 from '../../IMAGES1/brand_2.jpg';
import brand3 from '../../IMAGES1/brand_3.jpg';
import brand4 from '../../IMAGES1/brand_4.jpg';
import brand5 from '../../IMAGES1/brand_5.jpg';
import Navbar from './Navbar'
import brandlogo1 from '../../IMAGES1/boat.png'
import brandlogo2 from '../../IMAGES1/bombay.png'
import brandlogo3 from '../../IMAGES1/netflix.png'
import brandlogo4 from '../../IMAGES1/oppo.png'
import brandlogo5 from '../../IMAGES1/rapido.png'
import brandlogo6 from '../../IMAGES1/snapchat.png'
import brandlogo7 from '../../IMAGES1/zara.png'
 import brandlogo8 from '../../IMAGES1/prime1.png'
import Slider from "react-slick";

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Globals from 'react-reveal/globals'

const GlobalCont =()=>{
    const [restImg, setrestImg] = useState([talentImg, marketingService]);
    const [activeImg, setActiveImg] = useState(marketingService);
    const [influencerrestImg, setinfluencerrestImg] = useState([brand1, brand2, brand3, brand4]);
    const [influenceractiveImg, setinfluenceractiveImg] = useState(brand5);
    const [globalTextClass, setglobalTextClass] = useState('');
    const changeUI = (e) => {
        setglobalTextClass('global-head')

        if (e.target.id === 'first') {
            setrestImg(
                [talentImg, plateformTechImg]
            )
            setActiveImg(marketingService)

        }
        else if (e.target.id === 'second') {
            setrestImg(
                [marketingService, plateformTechImg]
            )
            setActiveImg(talentImg)

        }
        else {
            setrestImg(
                [talentImg, marketingService]
            )

            setActiveImg(plateformTechImg)
        }
    }
    if(window.innerWidth <= 625){
return (
    <>
     <div id='first' onClick={changeUI} defaultValue='marketing' className="text-cont">
                            <img src={marketingService} alt="" />
                                <div>
                                    <h1>MARKETING SERVICE</h1>
                                    <p> Data-driven Creator campaigns drive measurable growth and integrated
                                        strategies that maximizes your media spend and gives you
                                        full-service content creation and monetization across the internet.</p></div>
                          
                        </div>
                        <div style={{ width: '100%' }} id='second' onClick={changeUI} defaultValue='talent' className="text-cont">
                           <img src={talentImg} alt="" />
                                <div>
                                    <h1>TALENT SERVICE</h1>
                                    <p> We provide full service creator management and brand partnership
                                        unbeatable influencer marketing and media for influencers and brands.</p></div>
                             
                        </div>
                        <div id='third' onClick={changeUI} defaultValue='tech' className="text-cont">
                           <img src={plateformTechImg} alt="" />
                                <div><h1>PLATEFORM & TECH</h1> <p>We Create end to end campaign and talent management platform
                                    with the help of our data and ai based next gen marketing
                                    tools.</p></div>
                            
                        </div>
    </>
);
    }
    else{
        return (
            <>
            <div id='first' onClick={changeUI} defaultValue='marketing' className="text-cont">
                            <h1 style={{ display: activeImg === marketingService ? 'none' : 'block' }} className={globalTextClass} id='first' data-text='MARKETING SERVICE' >MARKETING SERVICE</h1>
                            {
                                activeImg === marketingService &&
                                <div>
                                    <h1>MARKETING SERVICE</h1>
                                    <p> Data-driven Creator campaigns drive measurable growth and integrated
                                        strategies that maximizes your media spend and gives you
                                        full-service content creation and monetization across the internet.</p></div>
                            }
                        </div>
                        <div style={{ width: '100%' }} id='second' onClick={changeUI} defaultValue='talent' className="text-cont">
                            <h1 style={{ display: activeImg === talentImg ? 'none' : 'block' }} className={globalTextClass} id='second' data-text='TALENT SERVICE'>TALENT SERVICE</h1>
                            {
                                activeImg === talentImg &&
                                <div>
                                    <h1>TALENT SERVICE</h1>
                                    <p> We provide full service creator management and brand partnership
                                        unbeatable influencer marketing and media for influencers and brands.</p></div>
                            }
                        </div>
                        <div id='third' onClick={changeUI} defaultValue='tech' className="text-cont">
                            <h1 style={{ display: activeImg === plateformTechImg ? 'none' : 'block' }} className={globalTextClass} id='third' data-text='PLATEFORM & TECH' >PLATEFORM & TECH</h1>
                            {
                                activeImg === plateformTechImg &&
                                <div><h1>PLATEFORM & TECH</h1> <p>We Create end to end campaign and talent management platform
                                    with the help of our data and ai based next gen marketing
                                    tools.</p></div>
                            }
                        </div>
            </>
        );
    }
}
const HomeLanding = () => {

    const navigate = useNavigate();
    const [restImg, setrestImg] = useState([talentImg, marketingService]);
    const [activeImg, setActiveImg] = useState(marketingService);
    const [influencerrestImg, setinfluencerrestImg] = useState([brand1, brand2, brand3, brand4]);
    const [influenceractiveImg, setinfluenceractiveImg] = useState(brand5);
    const [globalTextClass, setglobalTextClass] = useState('');


    const changeUI = (e) => {
        setglobalTextClass('global-head')

        if (e.target.id === 'first') {
            setrestImg(
                [talentImg, plateformTechImg]
            )
            setActiveImg(marketingService)

        }
        else if (e.target.id === 'second') {
            setrestImg(
                [marketingService, plateformTechImg]
            )
            setActiveImg(talentImg)

        }
        else {
            setrestImg(
                [talentImg, marketingService]
            )

            setActiveImg(plateformTechImg)
        }
    }
    const settings1 = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        swipeToSlide: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };
    return (
        <>
            <div className="home-landing-container">
                <Navbar />
                <div className="landing-page row m-0">
                    <div className="col col-mg-6 col-sm-6 col-xm-12  brand-page-cont">
                        <h1> I AM <br /> BRAND</h1>
                        <button onClick={() => navigate("/brandform")} >Click Here</button>
                    </div>
                    <div className="col col-mg-6 col-sm-6 col-xm-12  influencer-page-cont">
                        <h1> I AM  INFLUENCER</h1>
                        <button onClick={() => navigate("/influencerform")}>Click Here</button>
                    </div>
                </div>
            </div>
            <div id="carouselExampleIndicators" class=" carousel slide" data-bs-ride="carousel">

                <div class="carousel-inner">


                    <div class="carousel-item active">
                        <div className="quote-wrapper m-0 d-flex justify-content-center align-items-center  ">
                            {
                                window.innerWidth <= 625 ?
                                    <p >
                                        <img className='left' src={leftqoutemark} alt="" />
                                        Socialpubli is india's fastest growing influencer marketing company. We use latest technologies and AI driven decisions to generate higher engagements. We use lots of data to run and track the campaign. Our decisions are precisely derived from the market trends & demands                                        <img className='right' src={rightqoutemark} alt="" />
                                    </p>
                                    :
                                    <>
                                        <img className='left' src={leftqoutemark} alt="" />
                                        <p >
                                        Socialpubli is india's fastest growing influencer marketing company. We use latest technologies and AI driven decisions to generate higher engagements. We use lots of data to run and track the campaign. Our decisions are precisely derived from the market trends & demands                                        </p>
                                        <img className='right' src={rightqoutemark} alt="" />
                                    </>
                            }
                        </div>
                    </div>
                </div>

            </div>
            <div className="global-tech-wrapper">
                <div className="global-tech-cont">
                    <div className="big-text-cont"><img src={servicetitleImg} alt="" /></div>
                    <div className="small-text-cont">
                        <h1>Global</h1>
                        <h3>AI-POWERED SERVICES</h3>
                        <h2> & TECHNOLOGIES.</h2>
                    </div>
                </div>
            </div>
            <div className="plateform-wrapper">
                <div className="global  ">
                {   window.innerWidth > 625&&
                    <div>

                        <img src={activeImg} alt="" />

                    </div>
                 
                }

                    <div className="global-text-cont ">
                        <GlobalCont/>
                    </div>
                </div>
            </div>
            <div className="big-heading-links-wrapper">

                <div className="big-heading-link-cont">
                    <div> <div className='background-heading'> <h1 >INFLUENCER MARKETING</h1></div>  <h1 data-text="INFLUENCER MARKETING" className="big-heading">INFLUENCER MARKETING</h1></div>
                    <div> <div className='background-heading'>  <h1  >SOCIAL EXPERIMENTAL</h1></div>   <h1 data-text="SOCIAL EXPERIMENTAL" className="big-heading">SOCIAL EXPERIMENTAL</h1></div>
                    <div><div className='background-heading'> <h1  >PERFORMANCE MARKETING & MEDIA</h1></div>  <h1 data-text="PERFORMANCE MARKETING & MEDIA" className="big-heading">PERFORMANCE MARKETING & MEDIA</h1></div>
                    <div> <div className='background-heading'> <h1  >CREATIVE CONTENT</h1> </div>  <h1 data-text="CREATIVE CONTENT" className="big-heading">CREATIVE CONTENT</h1></div>
                    <div><div className='background-heading'> <h1  >RACKING & MEASURMENTS WITH INFLUSOFT</h1> </div>   <h1 data-text="TRACKING & MEASURMENTS WITH INFLUSOFT" className="big-heading">TRACKING & MEASURMENTS WITH INFLUSOFT</h1></div>
                    <div><div className='background-heading'> <h1  >STRATEGY</h1> </div>  <h1 data-text="STRATEGY" className="big-heading"> STRATEGY</h1></div>
                    <div> <div className='background-heading'><h1  >VIEW ALL..</h1> </div> <h1 data-text="VIEW ALL.." className="big-heading"> VIEW ALL..</h1></div>
                </div>
            </div>
            <div className="global-tech-wrapper">
                <div className="global-tech-cont">
                    <div className="big-text-cont "><img src={workinactionimg} alt="" /></div>
                    <div className="small-text-cont ">
                        <h1   > 80+ LEADING BRANDS</h1>
                        <p > & THEIR AGENCIES LEVERAGE OUR INFLUENCER NETWORK ACROSS THE MARKETING CYCLE - FOR RESEARCH, SAMPLING, CONTENT CREATION & DISTRIBUTION, DRIVING ENGAGEMENT & CONVERSIONS, AT SCALE.</p>

                    </div>
                </div>
            </div>
            <div className="our-influencer-wrapper ">
                <div className="influencers ">
                    <img className='brand brand1' src={influencerrestImg[0]} alt="" />
                    <img className='brand brand2' src={influencerrestImg[1]} alt="" />
                    
                    <img className='brand brand5' src={influenceractiveImg} alt="" />

                </div>
                <div className="influencer-data">
                    <div className="influencer">
                        <h1>25</h1>
                        <h3>INFLUENCER</h3>
                    </div>
                    <div className="posts">
                        <h1>25</h1>
                        <h3>POSTS</h3>
                    </div>
                    <div className="engagements">
                        <h1>800+</h1>
                        <h3>ENGAGEMENTS</h3>
                    </div>
                </div>
            </div>
            <div className="clients-wrapper">

                <div className="client-heading-wrapper">
                    <div className="client-heading">
                        <div className="back-img">
                            <img src={ourclient} alt="" />
                        </div>
                        <div className="text">
                            <h1>OUR CLIENTS</h1>
                            <p>MEET OUR HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>
                <div className="brands-cont">
                    <Slider {...settings1}>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brandlogo1} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img style={{background:'white'}} src={brandlogo2} alt="" />
                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brandlogo3} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brandlogo4} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brandlogo5} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brandlogo6} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img style={{background:'white'}} src={brandlogo7} alt="" />

                            </div>
                        </div>
                        <div>
                            <div className="brands-img-wrap">
                                <img src={brandlogo8} alt="" />

                            </div>
                        </div>



                    </Slider>
                </div>
            </div>

            <div className="ready-to-join-us">
                <img className='keyboard' src={keyboard} alt="" />
                <img className='pen' src={pen} alt="" />
                <img className='joinus' src={joinUs} alt="" />
                <img className='book' src={book} alt="" />
                <div className="upper-cont">
                    <h1>READY TO JOIN US ? </h1>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <button type='submit' className='subsribe'>SUBSCRIBE</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default HomeLanding