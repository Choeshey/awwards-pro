import Navbar from "./conponents/Navbar.jsx";
import HeroSection from "./sections/HeroSection.jsx";
import MessageSection from "./sections/MessageSection.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger,ScrollSmoother} from "gsap/all";
import NutritionSection from "./sections/NutritionSection.jsx";
import FlavourSection from "./sections/FlavourSection.jsx";
import BenefitSection from "./sections/BenefitSection.jsx";
import TestimonialSection from "./sections/TestimonialSection.jsx";
import FooterSection from "./FooterSection.jsx";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const App = () => {
    useGSAP(() => {
        ScrollSmoother.create({
            smooth: 3,
            effects: true,
        });
    });

    return (
        <main>
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <HeroSection />
                    <MessageSection />
                    <FlavourSection/>
                    <NutritionSection/>
                    <div>
                    <BenefitSection/>
                    <TestimonialSection/>
                    </div>
                    <FooterSection/>
                </div>
            </div>
        </main>
    )
}
export default App
