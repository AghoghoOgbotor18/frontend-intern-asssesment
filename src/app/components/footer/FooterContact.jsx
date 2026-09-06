import { Mail} from "lucide-react";
import { FaPhone } from "react-icons/fa";

export default function FooterContact() {
    return (
        <div className="flex flex-col gap-6 rounded-lg bg-white/[0.06] p-4 lg:flex-row lg:p-6">
            <div className="flex flex-1 flex-col gap-4 lg:gap-2.5">
                <h3 className="text-lg font-bold leading-none text-white lg:text-xl">
                Registered Offices
                </h3>

                <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
                    <p className="text-sm leading-[1.5] text-white lg:text-base">
                        <span className=" text-accent">United Kingdom</span>
                        <br />
                        07451196 (Registered by Company House)
                        <br />
                        Vine Cottages, 215 North Street, Romford, Essex, United Kingdom,
                        RM1 4QA
                    </p>

                    <div className="hidden w-px shrink-0 self-stretch bg-[rgba(221,208,218,0.12)] lg:block" />

                    <p className="text-sm leading-[1.5] text-white lg:text-base">
                        <span className="font-semibold text-accent">Nigeria</span>
                        <br />
                        RC 1048722 (Registered by the Corporate Affairs Commission)
                        <br />
                        4, Muaz Close, Angwar-Rimi
                    </p>
                </div>
            </div>

            <div className="hidden w-px shrink-0 self-stretch bg-[rgba(221,208,218,0.12)] lg:block" />

            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold leading-none text-white lg:text-xl">
                    Contact Information
                </h3>
                <div className="flex flex-col gap-3">
                    <a
                        href="mailto:theteam@tobamsgroup.com"
                        className="flex items-center gap-4 text-sm tracking-[0.03em] text-white lg:text-base"
                    >
                        <Mail className="h-6 w-6 shrink-0 text-accent" />
                        theteam@tobamsgroup.com
                    </a>
                    <a
                        href="tel:+447886600748"
                        className="flex items-center gap-4 text-sm tracking-[0.03em] text-white lg:text-base"
                    >
                        <FaPhone className="h-6 w-6 shrink-0 text-accent" />
                        +447886600748
                    </a>
                </div>
            </div>
        </div>
    );
}