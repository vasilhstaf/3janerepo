import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { label: "Borrow", href: "/borrow" },
  { label: "Lend", href: "/lend" },
  { label: "Docs", href: "https://docs.3jane.xyz/", external: true },
  { label: "Discord", href: "https://discord.gg/3jane", external: true },
];

function ConnectWalletButton() {
  // Replace with your wallet logic
  return (
    <Button className="ml-auto bg-[#0029FF] text-white rounded px-4 py-2 font-normal hover:bg-[#0029FF]/90 transition font-fraktionmono">
      Connect Wallet
    </Button>
  );
}

export function TopNav() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b flex items-center h-16 px-4 md:px-10 font-fraktionmono">
      <Link to="/" className="flex items-center">
        <img
          src="/src/assets/Logo.svg"
          alt="3Jane Logo"
          className="h-8 w-8 rounded bg-white border"
        />
      </Link>
      <ul className="flex gap-6 text-base font-normal ml-8 font-fraktionmono">
        {navLinks.map((link) =>
          link.external ? (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition font-fraktionmono font-normal"
              >
                {link.label}
              </a>
            </li>
          ) : (
            <li key={link.href}>
              <Link
                to={link.href}
                className={
                  (location.pathname === link.href
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary transition") +
                  " font-fraktionmono font-normal"
                }
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
      <div className="flex-1" />
      <div className="flex items-center gap-3">
        <ModeToggle />
        <ConnectWalletButton />
      </div>
    </nav>
  );
} 