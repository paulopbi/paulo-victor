export const ProjectContent = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1607706189992-eae578626c86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Zerou",
    tags: [
      "React.js",
      "Next.js",
      "Typescript",
      "SCSS",
      "CSS",
      "Docker",
      "ESLINT",
    ],
    description:
      "Um tracker de jogos criado de um gamer para gamers, você precisa testar isso agora mesmo!",
    github: "https://linkedin.com",
    deploy: "https://www.github.com",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Dogs",
    tags: [
      "Typescript",
      "CSS",
      "React.js",
      "Next.js",
      "Typescript",
      "SCSS",
      "CSS",
      "Docker",
      "ESLINT",
      "Slipknot",
    ],
    description:
      "Um tracker de jogos criado de um gamer para gamers, você precisa testar isso agora mesmo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae impedit eum asperiores quis quas voluptates minima ullam, qui doloribus totam. Explicabo laboriosam reiciendis animi qui fugiat soluta eaque quibusdam sint!",
    github: null,
    deploy: null,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Movie Mate",
    tags: ["react js", "tailwind css", "appwrite", "debounce", "TMDB API"],
    description:
      "O Movie Mate é uma aplicação web desenvolvida para facilitar a pesquisa e análise de filmes, oferecendo uma experiência interativa aos usuários, ao utilizar a API do TMDB (The Movie Database).",
    github: "https://github.com/paulopbi/movie-mate",
    deploy: "https://movie-mate-rho.vercel.app/",
  },
  {
    imageUrl: null,
    title: "Rock N Roll",
    tags: ["react js", "tailwind css", "appwrite", "debounce", "TMDB API"],
    description: "Empresa de jogos",
    github: "https://github.com/paulopbi/movie-mate",
    deploy: "https://movie-mate-rho.vercel.app/",
  },
] as const;

export type ProjectContentProps = (typeof ProjectContent)[number];
