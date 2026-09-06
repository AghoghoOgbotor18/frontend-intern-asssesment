import Image from "next/image";

const heroInfo = [
    {
        image: "/images/hero.jpg",
        imageAlt: "Woman working with a computer",
        title: "What We Do",
        heading: "Training and Development",
        description:
        "Our comprehensive range of programs and resources is designed to enhance skills, broaden knowledge, and propel careers forward in today's ever-evolving landscape.",
        buttonText: "Book a Consultation",
    },
];

export default function Hero() {
    return (
        <section className="flex flex-col gap-12">
        {heroInfo.map(
            ({ image, imageAlt, title, heading, description, buttonText }) => (
                <div
                    key={heading}
                    className="relative flex flex-col items-center justify-center gap-12 overflow-hidden py-10 lg:py-28"
                >
                    <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
        
                    <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center lg:gap-10 lg:px-16">
                        <div className="flex flex-col items-center gap-2 lg:gap-3">
                            <span className="rounded-full bg-white/10 px-8 py-2.5 text-xs font-semibold leading-[1.5] tracking-[0.03em] text-white lg:px-12 lg:py-3 lg:text-sm lg:tracking-normal">
                            {title}
                            </span>
            
                            <div className="flex flex-col gap-3">
                                <h1 className="text-2xl font-bold leading-[1.3] text-white lg:text-[56px]">
                                    {heading}
                                </h1>
                                <p className="text-sm font-semibold leading-[1.5] text-white lg:text-lg">
                                    {description}
                                </p>
                            </div>
                        </div>
        
                        <button className="h-10 rounded bg-primary px-[22px] py-[11.5px] text-sm font-semibold leading-[1.5] text-white lg:h-12 lg:px-6 lg:py-3 lg:text-lg">
                            {buttonText}
                        </button>
                    </div>
                </div>
            )
        )}
    </section>
    );
}
