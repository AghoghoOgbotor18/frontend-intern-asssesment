export default function FooterCTA() {
    return (
        <div className="flex flex-col gap-6 border-b border-[#c4c4c4] bg-[#1D0617] p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-2.5 lg:border-b-2 lg:px-16 lg:py-10">
            <div className="flex flex-col gap-4 lg:w-[1114px] lg:gap-2.5">
                <p className="text-sm leading-[1.5] text-white lg:text-lg">
                Ready to be a part of something extraordinary?
                </p>
                <p className="text-xl font-semibold leading-[1.3] text-white lg:text-[32px]">
                Let's work together to create a difference
                </p>
            </div>

            <button className="inline-flex h-10 shrink-0 items-center justify-center gap-2.5 rounded bg-primary px-[22px] py-[11.5px] text-sm font-semibold leading-[1.2] text-white lg:h-12 lg:px-6 lg:py-3 lg:text-lg w-fit">
                Get In Touch
            </button>
        </div>
    );
}