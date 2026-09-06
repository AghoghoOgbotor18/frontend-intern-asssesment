import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const courses = [
    "Business Analysis",
    "Design Thinking",
    "Effective Communication",
    "Entrepreneurship",
    "Career Development",
    "Business Model",
];

export default function LearningManagementSystem() {
    return (
        <section className="py-10">
            <div className="bg-primary/10 p-6 lg:mx-0 lg:p-12">
                <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-20">
                    <h2 className="text-xl font-semibold leading-[1.5] tracking-[0.03em] text-primary lg:col-start-2 lg:row-start-1 lg:text-[40px]">
                        Learning Management System
                    </h2>

                    <div className="relative mx-auto aspect-square w-full max-w-[327px] shrink-0 overflow-hidden rounded-full lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:aspect-auto lg:h-[568px] lg:w-[556.88px] lg:max-w-none lg:rounded-[357px]">
                        <Image
                        src="/images/learning.jpg"
                        alt="An instructor and learner reviewing course material"
                        fill
                        className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col gap-6 rounded-lg bg-primary/10 p-6 lg:col-start-2 lg:row-start-2">
                        <p className="text-sm leading-[1.5] text-foreground lg:text-lg">
                            TG Academy is a hub of knowledge and skill-building resources
                            designed to empower tech talents on their learning journey.
                            From technical courses covering the latest programming
                            languages and development frameworks to soft skills training
                            in leadership, effective communication and project
                            management, TG Academy offers a wide range of courses to
                            cater to diverse learning needs. With accessible and
                            interactive learning materials, individuals can enhance their
                            skills and stay ahead in today's competitive tech
                            landscape.
                        </p>

                        <div className="flex flex-col gap-3">
                            <h3 className="text-base font-bold leading-[1.5] text-primary lg:text-lg">
                                Some of our courses include
                            </h3>
                            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-3">
                                {courses.map((course) => (
                                <li
                                    key={course}
                                    className="flex items-start gap-2 text-sm leading-[1.5] text-foreground lg:text-base"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    {course}
                                </li>
                                ))}
                            </ul>
                        </div>

                        <button className="inline-flex h-12 w-fit items-center gap-2 rounded bg-primary px-6 py-[10.5px] text-sm font-semibold leading-[1.5] text-white lg:text-lg">
                            Learn More
                            <ArrowUpRight className="h-6 w-6 shrink-0" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}