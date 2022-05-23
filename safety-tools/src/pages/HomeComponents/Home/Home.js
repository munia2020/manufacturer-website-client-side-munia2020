import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Reviews from '../Reviews/Reviews';
import Talks from '../Talks/Talks';
import Tools from '../Tools/Tools';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Talks></Talks>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;