import Header from '../header/header';
import Footer from '../footer/footer';

export default function Layout() {
    return (
      <div className='layout'>
      <div className="wrap">
        <Header />

      </div>       
        <Footer />
      </div>
    );
}
