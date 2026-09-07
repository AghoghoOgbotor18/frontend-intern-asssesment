import Image from "next/image";
import { FaBolt } from "react-icons/fa";

const benefits = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organisational Culture",
  "Sustainable Growth",
];

export default function Management() {
    return (
        <section className="w-full px-6 py-8 md:px-16 md:py-16">
            <div className="mx-auto flex w-full max-w-[1312px] flex-col rounded-[20px] bg-[#2c0922] p-4 md:p-10">
                <div className="flex w-full flex-col gap-5 md:flex-row md:gap-12">

                    {/* The Management header for mobile */}
                    <div className="flex w-full flex-col gap-3 md:hidden">
                        <h2 className="font-nunito text-base font-semibold leading-6 tracking-[0.48px] text-white">
                            Management Development Program
                        </h2>
                    </div>

                    <div className="relative h-[232px] w-full overflow-hidden rounded-t-lg md:h-[639px] md:w-[592px] md:rounded-lg">
                        <Image
                        src="/images/management.jpg"
                        alt="Professionals participating in a management development program"
                        fill
                        className="object-cover"
                        sizes="(max-width: 767px) 100vw, 592px"
                        />
                    </div>

                    <div className="flex w-full flex-col gap-8 md:w-[592px]">
                        <div className="flex w-full flex-col gap-5 md:gap-5">

                            {/* desktop heading text */}
                            <div className="hidden md:flex">
                                <h2 className="font-nunito text-[40px] font-semibold leading-[150%] tracking-[1.2px] text-white">
                                    Management Development Program
                                </h2>
                            </div>

                            <p className="font-sans text-sm font-normal leading-[150%] tracking-normal text-white lg:text-lg">
                                Tobams Group offers a comprehensive Management Development
                                Program designed to equip corporate organisations with the
                                high-performing leaders they need to thrive. Our program
                                includes workshops, seminars, coaching sessions, online
                                courses, and experiential learning opportunities designed to
                                improve leadership, strategic thinking, communication, and
                                other essential managerial competencies for corporate
                                organisations.
                            </p>
                        </div>

                        <div className="flex w-full flex-col gap-[25px] px-0 py-2 md:px-4">
                            {benefits.map((benefit) => (
                                <div
                                key={benefit}
                                className="flex min-h-10 w-full items-center gap-2 rounded-lg bg-[#8f6182] px-2 py-1"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center text-white">
                                        <FaBolt />
                                    </span>

                                    <span className="font-sans text-sm font-normal leading-[150%] text-white md:text-lg md:font-semibold">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}