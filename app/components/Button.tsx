import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface BaseProps {
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
  /** Opens in a new tab; use for external URLs (e.g. Google Maps). */
  external?: boolean;
  /**
   * Use a plain anchor element for tel: and mailto: links (not Next.js Link).
   */
  native?: boolean;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type Props = LinkProps | ButtonProps;

const variantStyles: Record<Variant, string> = {
  primary:
    "text-white bg-[linear-gradient(135deg,#7a1f3d,#9c2c52)] shadow-[0_10px_24px_rgba(122,31,61,0.18)] hover:brightness-110 active:scale-[0.99]",
  secondary:
    "bg-transparent text-[#7a1f3d] border border-[#c9a263] hover:bg-[#c9a263]/10 active:scale-[0.99]",
};

export default function Button(props: Props) {
  const { variant = "primary", icon, className = "", children } = props;

  const base =
    "flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-base font-bold transition-all";

  const inner = (
    <>
      <span>{children}</span>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
    </>
  );

  const finalClass = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { external, href, native } = props;

    if (native) {
      return (
        <a href={href} className={finalClass}>
          {inner}
        </a>
      );
    }

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={finalClass}
        >
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={finalClass}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={finalClass}
    >
      {inner}
    </button>
  );
}
