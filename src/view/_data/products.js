const { getWhatsAppLink } = require("../../js/utils/whatsapp-link");

const link_message = "Olá, gostaria de fazer o pedido do prato";

module.exports = {
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
