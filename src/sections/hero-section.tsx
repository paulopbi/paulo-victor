"use client";

import LiquidEther from "@/components/react-bits/liquid-ether";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import Image from "next/image";
import MY_PIC from "../../public/img/hero-img.webp";

export default function Hero() {
  return (
    <section className="relative h-dvh overflow-hidden" id="sobre">
      {/* liquid effect */}
      <div className="size-full z-0 inset-0 absolute">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.6}
        />
      </div>

      {/* content */}
      <div className="container size-full mx-auto flex items-center justify-center gap-2 py-20">
        <div className="z-10 flex flex-col items-center justify-center gap-8">
          {/* badge */}
          <div className="backdrop-blur-3xl py-2 px-4 rounded-full border">
            <span className="flex items-center justify-center gap-2 text-muted-foreground">
              Olá Mundo 👋🏾
            </span>
          </div>

          {/* left */}
          <div className="size-80 rounded-full overflow-hidden border-2 border-foreground">
            <Image
              quality={65}
              src={MY_PIC}
              className="object-cover object-center aspect-square size-full"
              alt="Imagem do programador Paulo Victor"
            />
          </div>

          {/* right */}
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-3xl text-pretty max-w-[35ch] mx-auto tracking-tighter font-bold">
              Desenvolvedor Fullstack
            </h1>
            <p className="text-center text-sm md:text-base text-black/60 dark:text-muted-foreground max-w-[50ch] mx-auto tracking-wide">
              Olá mundo! Me chamo Paulo Victor Silva Rosa, sou um desenvolvedor
              frontend. Minha jornada começou 'quebrando a cabeça com CSS' e
              hoje me especializo em Next.js, React e TypeScript para criar
              aplicações que não só impressionam, mas também entregam
              resultados. Vamos construir algo incrível juntos? 👷🏾‍♂️
            </p>

            {/* buttons */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <Button size="lg" className="cursor-pointer">
                Curriculo <Download className="size-4" />
              </Button>
              <Button size="lg" variant="outline">
                <a
                  href="#projetos"
                  className="flex items-center justify-center gap-2 size-full"
                >
                  Projetos
                  <ArrowDown className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
