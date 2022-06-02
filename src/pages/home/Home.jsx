import { Featured, FeaturedProperties, Footer, Header, MailList, Navbar, PropertyList } from '../../components';
import './home.css';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className='homeContainer'>
                <Featured />
                <h1>Browse by property type</h1>
                <PropertyList />
                <h1>Home guest love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </div>
    );
};
export default Home;
