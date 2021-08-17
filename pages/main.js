import Head from 'next/head'
import Image from 'next/image'
import Banner from '../public/assets/images/slider-1.jpg'
import About from '../public/assets/images/about.png'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel';

// import 'bootstrap/dist/js/bootstrap'
// import 'jquery/dist/jquery'
export const Main = () => {
    return (
        <div className="layout">
            <Head>
                <title>Main</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrap">

                {/* banner */}
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
                                    <p className="text-dark">Some Our <span className="sincerity"> Sincerity,</span></p>
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
            </div>
        </div>
    )
}

export default Main