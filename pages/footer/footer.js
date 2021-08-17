import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Link href="/">
                            <a><Image src={logo} alt="logo" className="img-fluid flogo" width={200} /></a>
                        </Link>
                        <ul className="list-unstyled">
                            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h3>OUR SERVICES</h3>
                        <div className="d-md-flex">
                            <div className="col-md-6">
                                <ul className="list-unstyled services mb-0">
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; Local Moves</a></Link>
                                    </li>
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; Long Distance</a></Link></li>
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; Packing</a></Link></li>
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; Storage Moving</a></Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="list-unstyled services">
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; International Moves</a></Link>
                                    </li>
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; Auto Transport</a></Link></li>
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; Unpacking</a></Link></li>
                                    <li><Link href="/"><a className="text-decoration-none"><i className="fas fa-chevron-right"></i> &nbsp; Household Moving</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <form>
                            <div className="form-group">
                                <h3 className="mb-3" htmlFor="news">Newsletter</h3>
                                <div className="input-group newsletter mb-3">
                                    <input type="text" id="news" className="form-control rounded-0 shadow-none" placeholder="Newsletter" />
                                    <div className="input-group-append">
                                        <button className="btn news_btn shadow-none" type="button" id="button-addon2">Button</button>
                                    </div>
                                </div>
                                <ul className="list-inline social">
                                    <li className="list-inline-item icon">
                                        <Link href="">
                                            <a><i className=" fab fa-facebook-f"></i></a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item icon">
                                        <Link href="">
                                            <a><i className="fab fa-twitter"></i></a>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item icon">
                                        <Link href="">
                                            <a><i className="fab fa-instagram"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer