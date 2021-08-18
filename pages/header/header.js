import Image from 'next/image'
import logo from '../../public/assets/images/logo.png'
import Link from 'next/link'
import 'jquery'
import { useRouter } from 'next/router'

export const Header = () => {
    const router = useRouter()
    return (
        <nav className="navbar header navbar-expand-lg sticky-top navbar-light">
            <div className="container">
                <Link className="navbar-brand" href="/">
                    <a><Image src={logo} alt="logo" className="img-fluid logo" width={200} /></a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className={router.pathname == "/" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="/">
                                <a className="nav-link nav_link">Home</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/about" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="/about">
                                <a className="nav-link nav_link">About</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/services" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="/services">
                                <a className="nav-link nav_link">Services</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/contact" ? "nav-item nav_item active" : "nav-item nav_item"}>
                            <Link href="/contact">
                                <a className="nav-link nav_link">Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className={router.pathname == "/login" ? "nav-item nav_item button_active" : "nav-item nav_item button_link"}>
                            <Link href="/login">
                                <a className="nav-link nav_link">Login</a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/signup" ? "nav-item nav_item button_active" : "nav-item nav_item button_link"}>
                            <Link href="/signup">
                                <a className="nav-link nav_link">Signup</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
const handleClick = (e) => {
    var element = document.getElementById("navbarSupportedContent");
    element.classList.toggle("show");
}
export default Header