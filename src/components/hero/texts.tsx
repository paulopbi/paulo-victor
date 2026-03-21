import { AuroraText } from "@/components/magic-ui/aurora-text";

const Texts = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* name */}
      <h2 className="text-center text-2xl font-medium tracking-tighter text-muted-foreground">
        Me chamo Paulo Victor
      </h2>

      {/* title */}
      <h1 className="text-center text-3xl text-pretty max-w-[35ch] mx-auto tracking-wide font-bold">
        Sou um{" "}
        <AuroraText
          colors={["var(--chart-1)", "var(--chart-3)", "var(--chart-5)"]}
          speed={1.5}
        >
          Desenvolvedor Fullstack
        </AuroraText>
      </h1>

      {/* description */}
      <p className="text-center text-sm max-w-[50ch] mx-auto tracking-tighter text-pretty text-black/90 dark:text-white/90 md:text-base">
        É um prazer ter você aqui, me conheça um pouco mais atráves do meu
        portfólio, nele você irá encontrar as técnologias, projetos, contatos e
        mais sobre mim. Role para baixo para continuar!
      </p>
    </div>
  );
};

export default Texts;
