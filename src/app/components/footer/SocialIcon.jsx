export default function SocialIcon({ Icon }) {
    return (
        <a
        href="#"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white p-2.5 text-[#1D0617] hover:opacity-80"
        >
            <Icon className="h-5 w-5" />
        </a>
    );
}