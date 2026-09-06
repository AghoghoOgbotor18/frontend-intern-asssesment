import Image from "next/image";
import { FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import SocialIcon from "./SocialIcon";
import LinkColumn from "./LinkColumn";

const whatWeDo = [
    "Sustainability Services",
    "Strategy Planning and Implementation",
    "Tech Talent Solutions",
    "Training and Development",
    "IT Consulting services",
    "Social Impact",
    "Talent Recruitment",
];

const company = [
    "About",
    "Jobs",
    "Projects",
    "Our Founder",
    "Business Model",
    "The Team",
    "Contact Us",
    "Blog",
    "FAQs",
    "Testimonials",
    "Help a Tech Talent",
];

const solution = [
    "Tobams Group Academy",
    "Help a Tech Talent",
    "Campus Ambassadors Program",
    "Join our Platform",
    "Pricing",
    "Book a Consultation",
    "Join our Slack Community",
    "Strategic Partnership",
    "Digital Marketing",
];

export default function FooterLinks() {
    return (
        <div className="flex flex-col gap-8 py-5 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-6">
                <Image
                src="/images/tobams-logo.png"
                alt="Tobams Group logo"
                width={188}
                height={73}
                />
                <p className="max-w-[356px] text-sm leading-[1.5] tracking-[0.03em] text-[#f8f8f8]">
                    Tobams Group is an innovative consultancy firm reshaping the future
                    of tech talent development in Africa, specializing in talent
                    acquisition, internships, and skill development with a global
                    perspective.
                </p>
                <div className="flex gap-5">
                <SocialIcon Icon={FaLinkedin} />
                <SocialIcon Icon={FaInstagram} />
                <SocialIcon Icon={FaXTwitter} />
                </div>
            </div>

            <LinkColumn title="What We Do" items={whatWeDo} />
            <LinkColumn title="Company" items={company} />
            <LinkColumn title="Solution" items={solution} />
        </div>
    );
}