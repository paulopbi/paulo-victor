import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Buttons = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-3">
      <Button size="lg" className="cursor-pointer">
        Curriculo <Download className="icon-size" />
      </Button>
      <Button size="lg" variant="secondary" className="cursor-pointer">
        <a
          href="#projetos"
          className="flex items-center justify-center gap-2 size-full"
        >
          Projetos
          <ArrowDown className="icon-size" />
        </a>
      </Button>
    </div>
  );
};

export default Buttons;
