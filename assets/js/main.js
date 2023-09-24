import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".rockeseat",
  `Tive uma jornada de aprendizado incrível com a Rockeseat, estudando seus vídeos e participando do programa Discover. Aprendi várias tecnologias, como HTML, CSS, JavaScript, React, Next.js e Styled-Components, entre outras. Estou constantemenente aprendendo novas tecnologias.`,
  "Estudante",
  "RocketSeat Education",
  "Atualmente"
);

hoverChangeExperience(
  ".dio",
  `Na DIO, tive a chance de desenvolver diversos projetos desafiadores que me permitiram aplicar meu aprendizado de forma prática e criar soluções funcionais. Essa plataforma se tornou meu parceiro confiável na busca por aprimorar minhas habilidades de programação.`,
  "Estudante",
  "Digital Innovation One (DIO)",
  "Jan 2021 - Abril 2022"
);

hoverChangeExperience(
  ".hiringcoders",
  `Participar da Turma #3 do Hiring Coders foi uma experiência enriquecedora. Conheci novas pessoas, colaborei em um projeto de e-commerce e aprendi sobre desenvolvimento Full-Stack. Além de expandir minhas habilidades técnicas, essa jornada me proporcionou uma valiosa experiência de trabalho em equipe e resolução de problemas. Estou ansioso para aplicar todo esse aprendizado em futuros desafios.`,
  "Estudanter",
  "Hiring Coders - Trilha Full-stack",
  "Jan 2022 - Set 2022"
);


hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);

hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);

