import { Marquee } from "@/components/ui/marquee";
import { marqueeSkills } from "@/constants/marquee-skills";

const MarqueeCard = ({ repeat = 4, pauseOnHover = true, reverse = false }) => {
  return (
    <>
      {/* edge gradient */}
      <div className="absolute left-0 top-0 bg-linear-to-r from-background to-background/5 w-28 h-full z-5 rounded-sm" />
      <div className="absolute right-0 top-0 bg-linear-to-r to-background from-background/5 w-28 h-full z-5 rounded-sm" />

      {/* marquee */}
      <Marquee repeat={repeat} pauseOnHover={pauseOnHover} reverse={reverse}>
        {marqueeSkills.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex flex-col gap-1 items-center justify-center ml-4"
          >
            <div className="flex items-center justify-center p-3 bg-muted rounded-full border border-border">
              {
                <Icon className="size-8 hover:scale-[1.15] transition-transform" />
              }
              <span className="sr-only">{label}</span>
            </div>
            <span className="text-wrap break-all text-center max-w-fit text-sm tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default MarqueeCard;
