import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import ScrollToTopOnMount from '../../components/Scroll/scrollToTop';

// sections for this page
import Representantes from "./sections/Representantes.jsx";

const CustomComponents = () => {
    return (
        <div id="main-wrapper">
            <ScrollToTopOnMount />
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    {/* <HeaderComponent /> */}
                    {/* <BannerComponent />
                    <FormBannerComponent />
                    <FeatureComponent />
                    <PortfolioComponent />
                    <PricingComponent />
                    <TeamComponent />
                    <TestimonialComponent />
                    <BlogComponent /> */}
                    <Representantes />
                    {/* <ContactComponent /> */}
                    {/* <CallToAction /> */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

CustomComponents.propTypes = {
    classes: PropTypes.object
};

export default CustomComponents;
