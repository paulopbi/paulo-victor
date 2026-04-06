// It's important to keep at maximum 217 characters to not truncate the text
// use https://www.invertexto.com/contador-caracteres to count

import CODELANDIA from "../../public/demo/codelandia.jpg";
import DOGS from "../../public/demo/dogs.png";
import FLASHDASH from "../../public/demo/flashdash.png";
import LEMON_PEPER from "../../public/demo/lemon-peper.jpg";
import RICK_AND_MORTY from "../../public/demo/rick-and-morty.png";
import SAAS from "../../public/demo/saas.png";
import VELOCITY from "../../public/demo/velocity.png";
import ZEROU from "../../public/demo/zerou.png";

export const projectsInfos = [
  {
    imageUrl: ZEROU,
    title: "Zerou",
    description:
      "Zerou é um tracker de jogos que permite aos usuários organizarem informações de seus jogos, podendo fazer anotações de maneira rápida, o mesmo possui um editor de texto avançado, sendo a ferramenta perfeita para os gamers.",
    tags: [
      "React.JS",
      "CSS",
      "TypeScript",
      "Firebase",
      "React Router",
      "TipTap",
      "Framer Motion",
    ],
    github: "https://github.com/paulopbi/zerou",
    deploy: "https://zerou.vercel.app/",
  },
  {
    imageUrl: DOGS,
    title: "Dogs",
    description:
      "Dogs é uma rede social dedicada aos amantes de cachorros, os usuários podem compartilhar fotos de seus pets e interagir com outras pessoas, a rede possui um sistema de armazenamento temporário de fotos, e integração com uma API externa.",
    tags: ["Next.JS", "CSS", "TypeScript", "JWT", "Server Actions"],
    github: "https://github.com/paulopbi/dogs-next",
    deploy: "https://dogs-next-bice.vercel.app/",
  },
  {
    imageUrl: SAAS,
    slug: "saas-landing-page",
    title: "Saas Landing Page",
    tags: ["Next.JS", "Tailwind CSS", "Framer Motion", "TypeScript"],
    description:
      "SAAS é uma landing page moderna para promover um serviço baseado no modelo SaaS, a interface foi cuidadosamente projetada para oferecer uma experiência visualmente impactante, funcional e animações avançadas.",
    github: "https://github.com/paulopbi/SaaS",
    deploy: "https://saas-sable-psi.vercel.app/",
  },
  {
    imageUrl: RICK_AND_MORTY,
    title: "Rick And Morty",
    tags: ["React.JS", "Framer Motion", "CSS", "JavaScript", "API"],
    description:
      "Rick and Morty permite o usuário explorar os personagens e informações da série de TV, todos os dados são consumidos de uma API Externa, a aplicação possui filtros avançados, paginação e um sistema de busca.",
    github: "https://github.com/paulopbi/rick-and-morty",
    deploy: "https://paulopbi.github.io/rick-and-morty/",
  },
  {
    imageUrl: FLASHDASH,
    title: "FlashDash",
    description:
      "Flashdash é uma aplicação intuitiva que permite aos usuários explorar e baixar fotos de alta qualidade podendo buscar por diversas categorias, isso tudo é feito com a API do Unsplash no backend.",
    tags: ["React.JS", "TypeScript", "Tailwind CSS", "Shadcn", "API"],
    github: "https://github.com/paulopbi/flashdash",
    deploy: "https://flashdash-nine.vercel.app/",
  },

  {
    imageUrl: VELOCITY,
    title: "Velocity",
    tags: ["Figma", "React.JS", "Tailwind CSS", "Biome", "Bun", "Vite"],
    description:
      "Velocity é uma landing page que apresenta um produto inteligência artificial, o projeto combina design minimalista com animações fluidas, oferecendo uma experiência de usuário incrível em qualquer dispositivo.",
    github: "https://github.com/paulopbi/velocity",
    deploy: "https://velocity-three-tawny.vercel.app/",
  },

  {
    imageUrl: CODELANDIA,
    title: "Codelandia",
    tags: ["Figma", "HTML", "CSS"],
    description:
      "O Codelândia é uma coleção de desafios frontend que me permitiram praticar e aprimorar meus conhecimentos em HTMLe CSS, O objetivo desses desafios é transformar designs fornecidos no Figma em páginas pixel perfect.",
    github: "https://github.com/paulopbi/codelandia",
    deploy: null,
  },
  {
    imageUrl: LEMON_PEPER,
    title: "Lemon Peper",
    tags: ["UI Design", "Figma", "Photoshop", "Behance"],
    description:
      "O Lemon Peper é um projeto para praticar o UI Design como tipografia, cores, espaçamentos e etc, o projeto foi desenvolvido em colaboração com um amigo.",
    github: null,
    deploy: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
  },
];
