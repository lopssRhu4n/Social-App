import type { IContact } from "@/interfaces/IContact";

export const DefaultContacts: IContact[] = [
  {
    id: 1,
    username: "Rhuan Lopes",
    messages: [
      {
        id: 1,
        text: "Como eu posso usar esse chat?",
        from: "user",
        visualized: "20:54",
        send: "20:40",
      },
      {
        id: 2,
        text: "Basta escrever mensagens no input abaixo e clicar no botão com a seta para enviá-las!",
        from: "contact",
        visualized: "20:55",
        send: "20:40",
      },
      {
        id: 3,
        text: "O design desse projeto foi inspirado em https://pt.dreamstime.com/telas-do-wreframe-design-kit-de-ferramentas-ui-e-ux-dashboard-com-o-mensagens-online-m%C3%ADdia-social-chat-interface-aplicativo-image222249007",
        from: "contact",
        visualized: "20:55",

        send: "20:40",
      },
      {
        id: 4,
        text: "Uau! Show de Bolaaa.",
        from: "user",
        send: "20:40",
        visualized: "21:34",
      },
      {
        id: 5,
        text: "Estou louco para testar!",
        from: "user",
        send: "21:36",
      },
    ],
  },
  {
    id: 2,
    username: "Mãe",
    messages: [
      {
        id: 1,
        from: "contact",
        text: "Lindo Demais!!!",
        send: "10:38",
      },
    ],
  },
  {
    id: 3,
    img: "https://i.pinimg.com/originals/3d/11/b6/3d11b62132cdf1aa555a12207315ec67.jpg",
    username: "Júlio César",
    messages: [
      {
        id: 1,
        from: "contact",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolorem earum nobis officia non culpa? Delectus, quis maiores quo aperiam perferendis similique velit porro sequi eveniet placeat iste magnam labore!",
        send: "16/01/2023",
      },
    ],
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg/640px-Steve_Jobs_Headshot_2010-CROP2.jpg",
    username: "Steve Jobs",
    messages: [
      {
        id: 1,
        from: "contact",
        text: "Tive até que te dar os parabéns de outro plano!",
        send: "15/01/2023",
      },
    ],
  },
  {
    id: 5,
    img: "https://t.ctcdn.com.br/IFvswOVy57rDAEBc5_ox062Me0c=/400x400/smart/filters:format(webp)/i490763.jpeg",
    username: "Billzin",
    messages: [
      {
        id: 1,
        from: "contact",
        text: "Cara... Você tem alguma ideia pra Microsoft?",
        send: "13/01/2023",
      },
    ],
  },
  {
    id: 6,
    img: "https://www.remessaonline.com.br/blog/wp-content/uploads/2022/09/mark-zuckerberg-perdeu.jpg",
    username: "Zuckas",
    messages: [
      {
        id: 1,
        from: "contact",
        text: "Vem salvar o MetaVerso quando?",
        send: "05/01/2023",
      },
    ],
  },
];
