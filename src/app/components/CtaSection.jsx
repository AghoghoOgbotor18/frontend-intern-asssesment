export default function CTASection() {
  
    return (
        <section className="flex w-full justify-center px-6">
            <div className="flex w-full max-w-[1134px] flex-col items-center gap-8 rounded-lg bg-primary px-6 py-8 text-center md:px-16">
                <p className="font-nunito text-base font-semibold leading-[150%] tracking-[0.48px] text-white md:text-xl md:tracking-[0.6px]">
                    <span className="md:hidden">
                        Don't just dream it—let's build it! Click now and start your
                        project with Tobams Group. Your journey to digital excellence
                        begins here.
                    </span>

                    <span className="hidden md:inline">
                        Want to accelerate professional growth and development at your
                        organisation? See how we can help.
                    </span>
                </p>

                <a
                href="#"
                className="flex h-12 w-fit items-center gap-2.5 rounded border border-primary bg-white px-6 py-3 font-nunito text-sm font-semibold leading-[150%] tracking-[0.42px] text-primary transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary md:text-lg md:tracking-[0.54px]"
                >
                    Book a Consultation
                </a>
            </div>
        </section>
    );
}