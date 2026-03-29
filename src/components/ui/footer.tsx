import { socialLinks } from "@/constants/social-links";

const Footer = () => {
  return (
    <footer className="main-container">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 py-6 px-4">
        <div>
          <p className="text-muted-foreground text-center text-sm lg:text-base">
            &copy; 2026 - Paulo Victor, todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center justify-end gap-4">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              href={href}
              key={label}
              target="_blank"
              className="p-2 rounded-full flex items-center justify-center gap-2 transition-all hover:bg-primary/10 hover:text-primary hover:border-primary/80 hover:-translate-y-1"
            >
              {<Icon />}
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
