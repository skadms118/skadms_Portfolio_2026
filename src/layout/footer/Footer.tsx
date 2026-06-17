import { CONTACT_LINKS } from "../../data/contact";

const SOCIAL_ICONS: Record<string, string> = {
  Email: "/gmail.svg",
  Instagram: "/instagram.svg",
  Github: "/github_logo.svg",
};

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-6 text-center leading-normal font-light">
      <p className="text-[15px] text-[#444]">
        © 2026 Portfolio. All rights reserved.
      </p>
      <p className="text-[12px] text-[#777]">Designed by 박남은</p>
      <div className="mt-4 flex items-center gap-8">
        {CONTACT_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="hover:scale-105"
          >
            <img src={SOCIAL_ICONS[label]} alt={label} className="size-12" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
