const { getWhatsAppLink } = require("../../js/utils/whatsapp-link");

const link_message = "Olá, gostaria de fazer o pedido do prato";

module.exports = {
  coffees: [
    {
      image: "americano.jpg",
      title: "Americano",
      description:
        "O café Americano é um café feito diluindo o expresso em água quente. O resultado é semelhante em força ao café em gotas, mas com um perfil de sabor ligeiramente diferente.",
      price: "6,00",
      link() {
        return getWhatsAppLink(`${link_message} ${this.title}`);
      },
    },
    {
      image: "black-coffee.jpg",
      title: "Café preto",
      description:
        "O café preto é simplesmente café sem adição de nada – sem creme, sem leite, sem adoçante. Isso permite que você aproveite os benefícios do café para a saúde sem aditivos.",
      price: "4,00",
    },
    {
      image: "cappuccino.jpg",
      title: "Cappuccino",
      description:
        "Um cappuccino é a mistura específica entre uma dose de café expresso e leite com espuma. A proporção é de 1:5 de café expresso para leite, com muito sabor de expresso no leite.",
      price: "12,00",
    },
    {
      image: "expresso.jpg",
      title: "Espresso",
      description:
        "Uma forma de café concentrada e cheia de sabor. É feito forçando água quente pressurizada através de grãos de café moídos muito finos em uma máquina de café expresso.",
      price: "9,00",
    },
    {
      image: "frappuccino.jpg",
      title: "Frappuccino",
      description:
        "O Frappuccino é uma mistura de café gelado. Inspirada no frappe e no cappuccino, a bebida é feita com café gelado e delicioso.",
      price: "14,00",
    },
    {
      image: "macchiato.jpg",
      title: "Macchiato",
      description:
        "Em termos mais básicos, é um expresso com um pouco de leite. A quantidade de leite é suficiente para clarear a cor do café e perfurar a superfície lisa e preta.",
      price: "15,00",
    },
  ],
  dishes: [
    {
      image: "tiramisu-cake.jpg",
      title: "Tiramisu Cake",
      description:
        "Sobremesa italiana que mistura camadas de café expresso e pão de ló embebido em licor com recheio de queijo mascarpone e coberto com cacau em pó.",
      price: "20,00",
      link() {
        return getWhatsAppLink(`${link_message} ${this.title}`);
      },
    },
    {
      image: "chia-pudding.jpg",
      title: "Chia Pudding",
      description:
        "Esta receita feita com Iogurte Grego é deliciosamente cremosa e totalmente saudável. O café da manhã perfeito para levar para qualquer lugar. Adaptável a veganos e sem glúten.",
      price: "18,00",
      link() {
        return getWhatsAppLink(`${link_message} ${this.title}`);
      },
    },
    {
      image: "cheesecake.jpg",
      title: "Cheesecake",
      description:
        "Esta é uma sobremesa doce feita com queijo fresco, ovos e açúcar. Tem uma base feita de biscoitos triturados e massa folhada.",
      price: "17,00",
      link() {
        return getWhatsAppLink(`${link_message} ${this.title}`);
      },
    },
    {
      image: "chocolate-cake.jpg",
      title: "Chocolate Cake",
      description:
        "Você vai adorar este bolo coberto com uma cobertura sedosa de cream cheese de chocolate. Este bolo caseiro é fofo, decadente e muito saboroso.",
      price: "21,00",
      link() {
        return getWhatsAppLink(`${link_message} ${this.title}`);
      },
    },
    {
      image: "cheesecake-2.jpg",
      title: "Cheesecake",
      description:
        "Este é um cheesecake saboroso, lindo, exuberante e cremoso, do tipo que causa suspiros de alegria quando você o traz para a mesa.",
      price: "22,00",
      link() {
        return getWhatsAppLink(`${link_message} ${this.title}`);
      },
    },
    {
      image: "orange-cake.jpg",
      title: "Orange cake",
      description:
        "Um bolo de laranja macio e suave, repleto de sabor fresco de laranja. Ótimo para um lanche da tarde acompanhado com chá.",
      price: "20,00",
      link() {
        return getWhatsAppLink(`${link_message} ${this.title}`);
      },
    },
  ],
};
