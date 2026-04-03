import { SOCIAL_MEDIA_LINKS } from "@/constants/external-links";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-container flex flex-col flex-wrap gap-4 items-center justify-center py-2 mt-8 md:flex-row md:justify-between">
      <p className="text-muted-foreground text-center text-base md:text-left">
        &copy; {currentYear} todos os direitos reservados.
      </p>

      <div className="flex items-center justify-end gap-4">
        {SOCIAL_MEDIA_LINKS.map(({ icon: Icon, label, href }) => (
          <a
            href={href}
            key={label}
            target="_blank"
            className="p-2 rounded-full flex items-center justify-center gap-2 text-hover transition-all hover:-translate-y-1"
          >
            {<Icon className="size-6" />}
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
