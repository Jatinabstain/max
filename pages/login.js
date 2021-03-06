import Head from 'next/head'
import Link from 'next/link'

export const Login = () => {
    return (
        <div className="layout">
            <Head>
                <title>Login</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrap">
            <section className="login">
                <div className="container">
                    <div className="col-6 mx-auto">
                    <div className="position-relative">
                        <div className="login_card">
                            <h3>Login</h3>
                            <form>
                                <div className="form-group login_group">
                                    <input type="email" className="form-control shadow-none rounded-0" placeholder="Email Address" />
                                </div>
                                <div className="form-group login_group mb-1">
                                    <input type="password" className="form-control shadow-none rounded-0" placeholder="Password" />
                                </div>
                                <Link href="#!">
                                    <a className="mb-1 float-right text-decoration-none">Forgot password?</a>
                                </Link>
                                <Link href="#!">
                                    <a className="mt-5 shadow-none rounded-0 btn login_btn w-100">Login</a>
                                </Link>
                            </form>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </section>
                
            </div>
        </div>
    )
}

export default Login