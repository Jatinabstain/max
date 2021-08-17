import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Header from '../pages/header/header'
import Footer from '../pages/footer/footer'
//import 'jquery'
//import 'bootstrap'

function MyApp({ Component, pageProps }) {
  return (
    <div >
    
      <Header />
      
        <Component {...pageProps} /> 
      <Footer />
    </div>
  )
}

export default MyApp
