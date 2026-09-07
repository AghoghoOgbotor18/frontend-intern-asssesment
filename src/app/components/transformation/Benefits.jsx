import { FaBolt } from "react-icons/fa6";

export default function Benefit({ text }) {
    return (
        <div className="flex h-14 w-full items-center gap-[10px] rounded-xl bg-white px-4 py-4 md:h-[60px] md:w-[288px]">
            <FaBolt className="h-5 w-5 shrink-0 text-primary" />
            <span className="font-nunito-sans text-sm font-normal leading-[150%] text-foreground md:text-lg">
                {text}
            </span>
        </div>
    );
}