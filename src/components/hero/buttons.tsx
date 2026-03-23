import { ArrowDown, Download } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { entranceAnimation } from "@/constants/animations";

const Buttons = () => {
  return (
    <motion.div
      variants={entranceAnimation}
      initial="hidden"
      animate="show"
      transition={{ ease: "easeIn", delay: 0.9 }}
      className="flex items-center justify-center gap-4 mt-3"
    >
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
    </motion.div>
  );
};

export default Buttons;
