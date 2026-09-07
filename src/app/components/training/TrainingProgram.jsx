import Image from "next/image";
import { FaBolt } from "react-icons/fa6";
import { trainingData } from "./TrainingData";

export default function TrainingPrograms() {
  return (
    <section className="flex flex-col gap-8 bg-white px-6 py-8 lg:gap-[120px] lg:rounded-2xl lg:p-16">
        {trainingData.map(
            ({
            heading,
            description,
            items,
            image,
            imageAlt,
            imageOnRight,
            imageRadius,
            imageSize,
            }) => (
                <div
                    key={heading}
                    className={`flex flex-col gap-6 lg:items-start lg:gap-16 ${
                    imageOnRight ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                >
                    <div className={`relative w-full shrink-0 overflow-hidden ${imageSize} ${imageRadius}`}>
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-5">
                        <h3 className="text-xl font-semibold leading-[1.5] text-[#151515] lg:text-[40px] lg:tracking-[0.03em]">
                            {heading}
                        </h3>

                        <div className="flex flex-col gap-5">
                            <p className="text-sm leading-[1.5] text-[#696969] lg:text-lg">
                                {description}
                            </p>

                            <ul className="flex flex-col gap-1.5">
                                {items.map((item) => (
                                    <li
                                    key={item}
                                    className="flex items-center gap-3.5 text-sm leading-[1.5] text-[#696969] lg:text-lg px-7.5"
                                    >
                                    <FaBolt className="h-4 w-3 shrink-0 text-[#1D0617]" />
                                    {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        )}
    </section>
  );
}