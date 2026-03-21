import Image from "next/image";
import LOGO_IMG from "../../../public/img/hero-img.webp";

const Logo = () => {
  return (
    <a
      href="#"
      className="flex items-center justify-center gap-2 hover:opacity-80"
    >
      <div className="size-8 overflow-hidden rounded-full">
        <Image
          src={LOGO_IMG}
          width={100}
          height={100}
          alt="Foto do programador Paulo Victor"
          className="object-center object-cover size-full"
        />
      </div>
      <span className="text-base font-semibold hover:text-primary transition-colors">
        Paulo Victor
      </span>
    </a>
  );
};

export default Logo;
