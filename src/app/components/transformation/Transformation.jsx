import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Benefit from "./Benefits";

const benefits = [
    "Strategic Career Guidance",
    "Leadership Development",
    "CV Development",
    "Sustainability Leadership",
    "Communication Skills",
    "Business Model"
];

export default function Transformation() {
    return (
        <section className="w-full bg-white px-6 py-6 md:px-16 md:py-16">
            <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-16 rounded-xl bg-accent/20 px-4 py-6 md:gap-16 md:p-10">

                <div className="flex w-full flex-col gap-6">
                    <div className="flex w-full flex-col gap-2">
                        <p className="font-sans text-sm font-semibold leading-[150%] text-[#1671d9]">
                            Learning With Our CEO
                        </p>
                        <h2 className="font-nunito text-xl font-semibold italic leading-[130%] text-primary md:text-[32px]">
                            Transformation Hub With Jite Newton
                        </h2>
                    </div>

                <div className="flex w-full flex-col gap-3">
                    <p className="font-sans text-sm font-normal leading-[150%] text-foreground md:text-lg">
                        Transformation Hub with Jite Newton is a flagship webinar
                        series curated by the CEO, Dr. Jite Newton. Designed to elevate
                        career trajectories and leadership capabilities, this exclusive
                        event offers invaluable insights and strategies for personal and
                        professional growth. Whether you're seeking to advance your
                        career or enhance your leadership skills, the Transformation Hub
                        provides a transformative learning experience to unlock your full
                        potential and drive success in your endeavours.
                    </p>
                </div>

                <div className="flex w-full flex-col gap-6 md:flex-row md:gap-8">
                    <div className="relative h-[232px] w-full overflow-hidden rounded-lg md:h-[340px] md:w-[560px]">
                        <Image
                            src="/images/tech.jpg"
                            alt="A girl looking at running codes"
                            fill
                            className="object-cover"
                            sizes="(max-width: 767px) 100vw, 560px"
                        />
                    </div>

                    <div className="flex w-full flex-col gap-6 rounded-lg bg-white/30 px-5 py-8 md:h-[340px] md:w-[640px]">
                        <div className="flex w-full flex-col gap-3">
                            <div className="flex w-full flex-col gap-3 md:flex-row">
                                <Benefit text={benefits[0]} />
                                <Benefit text={benefits[1]} />
                            </div>

                            <div className="flex w-full flex-col gap-3 md:flex-row">
                                <Benefit text={benefits[2]} />
                                <Benefit text={benefits[3]} />
                            </div>

                            <div className="flex w-full flex-col gap-3 md:flex-row">
                                <Benefit text={benefits[4]} />
                                <Benefit text={benefits[5]} />
                            </div>
                        </div>
                        <a
                            href="#"
                            className="flex h-[45px] w-fit items-center gap-2 rounded bg-primary px-6 py-[10.5px] font-sans text-sm font-semibold leading-[150%] text-white transition-opacity hover:opacity-90 md:h-12 md:text-lg"
                        >
                            <span>Learn More</span>
                            <FiArrowUpRight className="h-6 w-6" />
                        </a>
                    </div>
                </div>

                </div>
            </div>
        </section>
    );
}
