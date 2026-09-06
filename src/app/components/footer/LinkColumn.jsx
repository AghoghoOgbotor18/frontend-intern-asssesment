export default function LinkColumn({ title, items }) {
    return (
        <div className="flex flex-col gap-4 lg:gap-3">
            <h3 className="text-lg font-bold leading-none text-white lg:text-xl">
                {title}
            </h3>
            <ul className="flex flex-col gap-3">
                {items.map((item) => (
                    <li key={item}>
                        <a
                        href="#"
                        className="text-sm leading-[1.5] text-white hover:text-accent lg:text-base lg:tracking-[0.03em]"
                        >
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}