import { FaChevronRight } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import ConsultantBenefit from "./Consultantbenefit"

export default function ConsultantSection() {

  return (
    <section className="w-full bg-white px-6 py-10 md:px-16">
      <div className="w-full bg-[#571244]/10 px-6 py-6 md:px-16 md:py-12">

        <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-14">

          {/* All text */}
          <div className="flex w-full flex-col gap-5">

            {/* Header */}
            <div className="flex w-full flex-col gap-3">
              <h2 className="font-nunito text-2xl font-semibold leading-[130%] text-[#571244] md:text-[40px]">
                Training the Consultant
              </h2>

              <p className="font-nunito-sans text-base font-semibold leading-[150%] text-[#571244] md:text-lg">
                Maximise Your Potential as a Certified Trainer:
              </p>
            </div>

            {/* Description */}
            <div className="flex w-full flex-col gap-3">
              <p className="font-nunito-sans text-sm font-normal leading-[150%] text-[#151515] md:text-lg">
                With the help of our Training Consultants program, take a
                revolutionary step toward becoming a distinguished certified
                training consultant. Learn from professionals in the field,
                immerse yourself in a thorough curriculum, and hone your
                training methods through interactive workshops. Participating
                in our program will enable you to gain expertise in diverse
                courses while also developing the abilities to mentor and
                encourage others in their career advancement.
              </p>
            </div>

            {/* Purple benefits box */}
            <div className="flex w-full flex-col gap-5 rounded-lg bg-[#571244] p-6 md:flex-row">
              <div className="flex w-full flex-col gap-5 md:w-1/2">
                <ConsultantBenefit
                  title="Expert-led Learning"
                  description="Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis."
                />

                <ConsultantBenefit
                  title="Comprehensive Curriculum"
                  description="Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding."
                />
              </div>

              <div className="flex w-full flex-col gap-5 md:w-1/2">
                <ConsultantBenefit
                  title="Interactive Workshop"
                  description="Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights."
                />

                <ConsultantBenefit
                  title="Global Recognition"
                  description="You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition."
                />
              </div>
            </div>
          </div>

          {/* Learn More */}
          <a
            href="#"
            className="
              flex h-14 w-fit items-center gap-2
              rounded-lg
              bg-[#571244]
              px-6 py-3
              font-nunito-sans
              text-sm font-semibold
              leading-[150%]
              text-white
              focus:outline-none
              focus:ring-2
              focus:ring-[#571244]
              focus:ring-offset-2
              md:h-12
              md:rounded
              md:text-lg
            "
          >
            <span>Learn More</span>

            <FiArrowUpRight className="hidden h-6 w-6 md:block" />
            <FaChevronRight className="h-8 w-8 md:hidden" />
          </a>
        </div>
      </div>
    </section>
  );
}

