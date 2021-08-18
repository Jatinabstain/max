import Head from 'next/head'
import Image from 'next/image'
import Banner from '../public/assets/images/slider-1.jpg'
import About from '../public/assets/images/about.png'
import service1 from '../public/assets/images/srv-1.jpg'
import profile_user from '../public/assets/images/testi-2.jpg'
import profile_user2 from '../public/assets/images/testi-1.jpg'
import star from '../public/assets/images/star.png'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export  const Main = () =>  {
    const settings = {
        infinite: true,
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
    };
    return (
        <div className="layout">
            <Head>
                <title>Max Movers</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrap">
                <Carousel>
                    <Carousel.Item >
                        <Image src={Banner} className="img-fluid" alt="banner" />
                        <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Image src={Banner} className="img-fluid" alt="banner" />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div className="container">
                    <section className="about">
                        <div className="d-md-flex">
                            <div className="col-md-6">
                                <Image src={About} className="img-fluid" alt="about" />
                            </div>
                            <div className="col-md-6">
                                <div className="about_content">
                                    <h4>Welcome to <span>Max Movers</span></h4>
                                    <p> Now were up in the big leagues getting our turn at bat. And when the odds are against him and their dangers work to do.</p>
                                    <p className="text-dark">Some Our <span className="sincerity"> Sincerity</span></p>
                                    <ul className="list-unstyled about_list">
                                        <li><i className="fas fa-check"></i> Our Works Are Doing Very Fast.</li>
                                        <li><i className="fas fa-check"></i> Why do we always come here I guess well never know.</li>
                                        <li><i className="fas fa-check"></i> There aint nothin wrong with that The ship.</li>
                                        <li><i className="fas fa-check"></i> These Happy Days are yours and mine Happy Days.</li>
                                    </ul>
                                    <Link href="/about">
                                        <a className="btn readmore_btn shadow-none">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="offer">
                    <div className="container">
                        <div className="heading">
                            <h3>The Great <span>Offers</span> Available Only For <span>Two Days.</span> Hurry Up!</h3>
                        </div>
                        <div className="offer_content">
                            <p>No one you see is smarter than he. I have always wanted to have a  just like you. I&apos;ve always wanted to boys Wouldn&apos;t change if they could. Fightin the system like a true modern day Robin Hood</p>
                            <Link href="/services">
                                <a className="offer_btn text-decoration-none">See Offer</a>
                            </Link>
                        </div>
                    </div>    
                </section>
                <section className="our_services">
                    <div className="container">
                        <div className="d-md-flex">
                            <div className="col-md-4">
                                <div className="services_heading">
                                    <h3>What <span>Max Movers</span> Do</h3>
                                    <p>Movin on up to the east side. We finally got a piece of the pie. Fleeing from s the Cylon tyrany the last Battlestar Galactica  leads a rainothin wrong with that.</p>
                                    <p>air of gold theone in curls. As long as we live its you and me baby. T There ain&apos;t nothin wrong with that. It&apos;s a beautiful day in this neighborhood.</p>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="d-md-flex">
                                    <div className="col-md-4 service_box">
                                        <Image src={service1} className="img-fluid" />
                                        <div className="service">
                                            <span>AUTO TRANSPORT</span>
                                            <p>Rong with that. All of them had hair of gold like their mother the way of san taht can be easily.</p>
                                            <Link href="#">
                                                <a className="text-decoration-none">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 service_box">
                                        <Image src={service1} className="img-fluid" />
                                        <div className="service">
                                            <span>MOVING & STORAGE</span>
                                            <p>Rong with that. All of them had hair of gold like their mother the way of san taht can be easily.</p>
                                            <Link href="#">
                                                <a className="text-decoration-none">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-4 service_box">
                                        <Image src={service1} className="img-fluid" />
                                        <div className="service">
                                            <span>PACKING & UNPACKING</span>
                                            <p>Rong with that. All of them had hair of gold like their mother the way of san taht can be easily.</p>
                                            <Link href="#">
                                                <a className="text-decoration-none">Read More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <Slider {...settings}>
                            <div>
                                <div className="col-md-12">
                                    <div className="card testi_card">
                                        <Image src={profile_user} className="img-fluid profile_user" alt="user" />
                                        <h5>Will Smith</h5>
                                        <span>Customer</span>
                                        <i className="fas fa-quote-right"></i>
                                        <p>It&apos;s a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine  Could you be mine.</p>
                                        <Image src={star} className="img-fluid rating" alt="star" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-md-12">
                                    <div className="card testi_card">
                                        <Image src={profile_user2} className="img-fluid profile_user" alt="user" />
                                        <h5>John wyatt</h5>
                                        <span>Customer</span>
                                        <i className="fas fa-quote-right"></i>
                                        <p>It&apos;s a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine  Could you be mine.</p>
                                        <Image src={star} className="img-fluid rating" alt="star" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-md-12">
                                    <div className="card testi_card">
                                        <Image src={profile_user} className="img-fluid profile_user" alt="user" />
                                        <h5>Will Smith</h5>
                                        <span>Customer</span>
                                        <i className="fas fa-quote-right"></i>
                                        <p>It&apos;s a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine  Could you be mine.</p>
                                        <Image src={star} className="img-fluid rating" alt="star" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-md-12">
                                    <div className="card testi_card">
                                        <Image src={profile_user2} className="img-fluid profile_user" alt="user" />
                                        <h5>John wyatt</h5>
                                        <span>Customer</span>
                                        <i className="fas fa-quote-right"></i>
                                        <p>It&apos;s a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine  Could you be mine.</p>
                                        <Image src={star} className="img-fluid rating" alt="star" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-md-12">
                                    <div className="card testi_card">
                                        <Image src={profile_user} className="img-fluid profile_user" alt="user" />
                                        <h5>Will Smith</h5>
                                        <span>Customer</span>
                                        <i className="fas fa-quote-right"></i>
                                        <p>It&apos;s a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine  Could you be mine.</p>
                                        <Image src={star} className="img-fluid rating" alt="star" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="col-md-12">
                                    <div className="card testi_card">
                                        <Image src={profile_user2} className="img-fluid profile_user" alt="user" />
                                        <h5>John wyatt</h5>
                                        <span>Customer</span>
                                        <i className="fas fa-quote-right"></i>
                                        <p>It&apos;s a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine  Could you be mine.</p>
                                        <Image src={star} className="img-fluid rating" alt="star" />
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main