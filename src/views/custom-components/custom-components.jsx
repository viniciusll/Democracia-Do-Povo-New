import React from "react";
import PropTypes from "prop-types";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import HeaderComponent from "./sections/headercomponent.jsx";
import BannerComponent from "./sections/bannercomponent.jsx";
import FormBannerComponent from "./sections/formbannercomponent.jsx";
import FeatureComponent from "./sections/featurecomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import PricingComponent from "./sections/pricingcomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";
import TestimonialComponent from "./sections/testimonialcomponent.jsx";
import BlogComponent from "./sections/blogcomponent.jsx";
import Representantes from "./sections/Representantes.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";
import CallToAction from "../../components/call-to-action/CallToAction"

const CustomComponents = () => {
    return (
        <div id="main-wrapper">
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
