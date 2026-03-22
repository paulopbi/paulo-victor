import Buttons from "@/components/hero/buttons";
import HeroImage from "@/components/hero/hero-image";
import LiquidBackground from "@/components/hero/liquid-background";
import Texts from "@/components/hero/texts";

export default function Hero() {
  return (
    <section className="relative h-dvh overflow-hidden" id="sobre">
      {/* liquid effect */}
      <LiquidBackground
        className="size-full -z-10 inset-0 absolute"
        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
      />

      {/* content */}
      <div className="flex flex-col items-center justify-center gap-2 size-full">
        <HeroImage />
        <Texts />
        <Buttons />
      </div>
    </section>
  );
}
