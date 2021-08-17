import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, Card } from "react-bootstrap";

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
                <div className="container">
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