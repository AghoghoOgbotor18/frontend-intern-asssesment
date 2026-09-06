import FooterBottom from "../footer/FooterBottom";
import FooterContact from "../footer/FooterContact";
import FooterCTA from "../footer/FooterCta";
import FooterLinks from "../footer/FooterLinks";


export default function Footer() {
    return (
        <footer className="w-full bg-[#11040E]">
            <FooterCTA />

            <div className="flex flex-col gap-5 px-6 py-8 lg:px-16 lg:py-8">
                <FooterLinks />
                <hr className="border-[rgba(221,208,218,0.12)] lg:hidden" />
                <FooterContact />
                <hr className="border-[rgba(221,208,218,0.12)]" />
                <FooterBottom />
            </div>
        </footer>
    );
}