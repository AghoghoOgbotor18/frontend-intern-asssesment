import { FaArrowUpRight, FaChevronRight } from "react-icons/fa6";

const consultantBenefits = [
  {
    title: "Expert-led Learning",
    description:
      "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
  },
  {
    title: "Interactive Workshop",
    description:
      "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
  },
  {
    title: "Global Recognition",
    description:
      "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
  },
];

export default function ConsultantBenefit({ title, description }) {
    return (
        <div className="flex w-full flex-col gap-3">
            <h3 className="font-nunito-sans text-base font-bold leading-[150%] text-white md:text-lg">
                {title}
            </h3>

            <p className="font-nunito-sans text-sm font-normal leading-[150%] text-white md:text-lg">
                {description}
            </p>
        </div>
    );
}