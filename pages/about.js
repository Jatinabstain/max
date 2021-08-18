import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, Card } from "react-bootstrap";
import team_user from '../public/assets/images/team-1.jpg'
import team_user1 from '../public/assets/images/team-2.jpg'
import team_user2 from '../public/assets/images/team-4.jpg'
import team_user3 from '../public/assets/images/team-3.jpg'

export const About = () => {
    return (
        <div className="layout">
            <Head>
                <title>About Us</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrap">
                <section className="main head_bg">
                    <div className="top_heading">
                        <h1>About Us</h1>
                        <p>
                            <Link href="/"><a className="text-decoration-none">Home</a></Link> <i className="fas fa-chevron-right"></i> <span> About</span>
                        </p>
                    </div>
                </section>
                <section className="about_team">
                    <div className="container">
                        <div className="team_heading">
                            <h3>Young <span>Max Movers</span> Team</h3>
                        </div>
                        <div className="team_lists">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="team_box">
                                        <Image src={team_user} className="img-fluid" alt="team" />
                                        <div className="team_body">
                                            <ul>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-twitter"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5>Simon Smith</h5>
                                            <p>Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="team_box">
                                        <Image src={team_user1} className="img-fluid" alt="team" />
                                        <div className="team_body">
                                            <ul>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-twitter"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5>JOHN DEO</h5>
                                            <p>Product Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="team_box">
                                        <Image src={team_user2} className="img-fluid" alt="team" />
                                        <div className="team_body">
                                            <ul>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-twitter"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5>LARA LEE</h5>
                                            <p>Finance Manager</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="team_box">
                                        <Image src={team_user3} className="img-fluid" alt="team" />
                                        <div className="team_body">
                                            <ul>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-facebook-f"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-twitter"></i></a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <a><i className="fab fa-instagram"></i></a>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <h5>WHITE CLARK</h5>
                                            <p>HR Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container d-none">
                    <Accordion className="mt-5 mb-5" defaultActiveKey="0">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="accordion_card">
                                TAB 1
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>This is first tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion_card">
                                TAB 2
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>This is second tab body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default About