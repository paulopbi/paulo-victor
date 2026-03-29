import { socialLinks } from "@/constants/social-links";

const LinksContainer = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-1/2 flex gap-6 items-center">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={href}
          key={label}
          title={label}
          className="bg-white/70 text-primary border border-primary/20 p-4 rounded-full shadow-2xl hover:-translate-y-4 hover:bg-white transition-all"
        >
          {<Icon className="size-7" />}
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default LinksContainer;
