export default function FooterBottom() {
    return (
        <div className="flex flex-col-reverse items-center gap-3 lg:flex-row lg:justify-between">
            <p className="text-sm font-light leading-6 text-white lg:text-base">
                Copyright &copy; Tobams Group, 2024. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                <a
                href="#"
                className="text-sm font-light leading-9 text-white underline lg:text-base"
                >
                    Terms and Condition
                </a>
                <a
                href="#"
                className="text-sm font-light leading-9 text-white underline lg:text-base"
                >
                    Privacy Policy
                </a>
                <a
                href="#"
                className="text-sm font-light leading-9 text-white underline lg:text-base"
                >
                    Cookies Policy
                </a>
            </div>
        </div>
    );
}