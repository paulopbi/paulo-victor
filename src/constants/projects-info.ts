import CODELANDIA_GIF from "../../public/demo/codelandia.jpg";
import DOGS_GIF from "../../public/demo/dogs.png";
import FLASHDASH_GIF from "../../public/demo/flashdash.gif";
import FORMHANDLER_GIF from "../../public/demo/form-handler.gif";
import LEMONPEPER_GIF from "../../public/demo/lemon_peper.jpg";
import MOVIEMATE_GIF from "../../public/demo/movie_mate.jpeg";
import RICKANDMORTY_GIF from "../../public/demo/rick_morty.gif";
import SASS_GIF from "../../public/demo/sass.gif";
import ZEROU_GIF from "../../public/demo/zerou.gif";

export const projectsInfo = [
  {
    title: "Zerou",
    description:
      "Zerou é uma aplicação web desenvolvida que permite aos usuários organizarem e acompanharem seus jogos de maneira prática e personalizada, podendo fazer anotações dos jogos que está jogando de maneira rápida, o mesmo possui um editor de texto avançado é a ferramenta perfeita para quem quer manter anotar toda a sua jogatina.",
    imageUrl: ZEROU_GIF,
    github: "https://github.com/paulopbi/zerou",
    deploy: "https://zerou.vercel.app/",
    tags: [
      "react js",
      "css",
      "typescript",
      "firebase",
      "react router",
      "TipTap",
      "framer motion",
    ],
  },
  {
    imageUrl: SASS_GIF,
    slug: "saas-landing-page",
    title: "Saas Landing Page",
    tags: ["next js", "tailwind css", "motion", "typescript"],
    description:
      "Este projeto consiste em uma landing page moderna desenvolvida para promover um produto ou serviço baseado no modelo SaaS (Software as a Service). A interface foi cuidadosamente projetada para oferecer uma experiência visualmente impactante e funcional, utilizando recursos avançados de design e interatividade.",
    github: "https://github.com/paulopbi/SaaS",
    deploy: "https://saas-sable-psi.vercel.app/",
  },
  {
    imageUrl: RICKANDMORTY_GIF,
    title: "Rick And Morty",
    tags: ["react js", "motion", "css", "javascript"],
    description:
      "Rick and Morty é uma aplicação web desenvolvida para explorar os personagens e informações da famosa série de animação, utilizando a API pública do mesmo. A aplicação permite que os usuários naveguem por uma lista dinâmica de personagens, acessando detalhes como nome, espécie, status.",
    github: "https://github.com/paulopbi/rick-and-morty",
    deploy: "https://paulopbi.github.io/rick-and-morty/",
  },
  {
    title: "Dogs",
    imageUrl: DOGS_GIF,
    description:
      "Dogs é uma rede social dedicada aos amantes de cachorros, onde os usuários podem compartilhar fotos de seus pets e interagir com outras pessoas que compartilham da mesma paixão, uma das características únicas do Dogs é o sistema de armazenamento temporário de fotos. As imagens compartilhadas permanecem disponíveis por apenas 5 minutosantes de serem automaticamente deletadas do banco de dados.",
    tags: ["next js", "css", "typescript", "JWT"],
    github: "https://github.com/paulopbi/dogs-next",
    deploy: "https://dogs-next-bice.vercel.app/",
  },
  {
    title: "Movie Mate",
    imageUrl: MOVIEMATE_GIF,
    tags: ["react js", "tailwind css", "appwrite", "debounce", "TMDB API"],
    description:
      "Movie Mate é uma aplicação web desenvolvida para facilitar a pesquisa e análise de filmes, oferecendo uma experiência interativa aos usuários, ao utilizar a API do TMDB (The Movie Database), o sistema permite que os usuários pesquisem informações detalhadas sobre filmes em tempo real, enquanto digitam seus títulos preferidos, essa funcionalidade de busca dinâmica é alimentada pelos usos de React Hooks na hora de consumir a API.",
    github: "https://github.com/paulopbi/movie-mate",
    deploy: "https://movie-mate-rho.vercel.app/",
  },
  {
    imageUrl: FLASHDASH_GIF,
    title: "FlashDash",
    description:
      "Flashdash é uma aplicação moderna e intuitiva que permite aos usuários explorar e baixar fotos de alta qualidade para usar como wallpapers em celulares ou computadores. A aplicação utiliza a API do Unsplash, uma das maiores plataformas de imagens gratuitas, garantindo acesso a uma vasta biblioteca de fotos incríveis e diversificadas. Os usuários podem realizar pesquisas por temas específicos, encontrando imagens que se alinham aos seus interesses.",
    tags: ["react js", "typescript", "tailwind css", "shadcn", "unsplash api"],
    github: "https://github.com/paulopbi/flashdash",
    deploy: "https://flashdash-nine.vercel.app/",
  },

  {
    imageUrl: CODELANDIA_GIF,
    title: "Codelandia",
    tags: ["html", "css"],
    description:
      "O Codelândia é uma coleção de desafios frontend que me permitiram praticar e aprimorar meus conhecimentos em HTMLe CSS. O objetivo desses desafios é transformar designs fornecidos no Figma em landing pages funcionais, replicando fielmente o layout proposto.",
    github: "https://github.com/paulopbi/codelandia",
    deploy: null,
  },

  {
    imageUrl: FORMHANDLER_GIF,
    title: "Form Handler",
    tags: [
      "react js",
      "typescript",
      "css",
      "zod",
      "react hook form",
      "sqlite",
      "prisma orm",
      "express",
    ],
    description:
      "Form Handler é um projeto fullstack completo criado com o objetivo de aprofundar os conhecimentos no desenvolvimento de formulários web inteligentes e eficientes. A proposta principal do projeto é simular um fluxo real de um sistema de entrada de dados, aplicando boas práticas de desenvolvimento tanto no frontend quanto no backend",
    github: "https://github.com/paulopbi/form-handler",
    deploy: null,
  },
  {
    imageUrl: LEMONPEPER_GIF,
    title: "Lemon Peper",
    tags: ["ui design", "figma", "photoshop"],
    description:
      "O Lemon Peper é um projeto de UI Design desenvolvido em colaboração com um amigo, criado para uma pizzaria fictícia. O objetivo foi desenvolver um website que oferecesse uma experiência visualmente atraente e funcional, permitindo que os usuários explorassem diferentes tipos de pizzas utilizando filtros intuitivos.",
    github: null,
    deploy: "https://www.behance.net/gallery/142436253/UI_Design_Pizzaria",
  },
];
