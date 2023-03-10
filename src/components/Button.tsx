import Link from "next/link";

// TODO move to separate file
interface IButton {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
    href?: string;
    internal?: boolean;
    btnStyle?: "primary" | "outline" | "success" | "danger" | "disabled";
    btnSize?: "medium" | "large";
}

export const Button = ({ children, onClick, href, internal, btnStyle, btnSize }: IButton) => {
    // * Default button style
    var btnStyleUtils = "border-transparent bg-primary text-onPrim/90 hover:bg-primary/80 hover:text-onPrim active:bg-primary";

    // * Change button style conditional on prop
    if (btnStyle === "outline") {
        btnStyleUtils = "border-primary bg-inherit text-onBg/90 hover:border-transparent hover:bg-primary hover:text-onPrim active:bg-primary/80";
    }
    if (btnStyle === "disabled") {
        btnStyleUtils = "cursor-not-allowed border-transparent bg-bg2/40 text-onBg/70";
    }
    if (btnStyle === "success") {
        btnStyleUtils =
            "border-transparent bg-success text-onSuccess/90 hover:border-transparent hover:bg-success/80 hover:text-onSuccess active:bg-success";
    }
    if (btnStyle === "danger") {
        btnStyleUtils =
            "border-transparent bg-danger text-onDanger/90 hover:border-transparent hover:bg-danger/80 hover:text-onDanger active:bg-danger";
    }

    // * Default button size
    var btnSizeUtils = "rounded px-4 py-2";
    // * Change button size conditional on prop
    if (btnSize === "large") {
        btnSizeUtils = "px-8 py-4 rounded-lg";
    }

    if (!href)
        return (
            <button
                className={`${btnSizeUtils} ${btnStyleUtils} inline-flex items-center justify-center border text-center`}
                type='button'
                onClick={onClick}
            >
                {children}
            </button>
        );

    if (internal)
        return (
            <Link
                className={`${btnSizeUtils} ${btnStyleUtils} inline-flex items-center justify-center border text-center`}
                href={href}
                onClick={onClick}
            >
                {children}
            </Link>
        );

    return (
        <a className={`${btnSizeUtils} ${btnStyleUtils} inline-flex items-center justify-center border text-center`} href={href} onClick={onClick}>
            {children}
        </a>
    );
};
