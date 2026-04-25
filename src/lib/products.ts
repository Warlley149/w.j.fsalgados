export interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  custom?: boolean;
}

export const products: Product[] = [
  {
    name: "Coxinhas para festa",
    category: "Salgados para festa",
    description: "Crocantes, saborosas e perfeitas para qualquer comemoração.",
    price: "Preço sob consulta",
    image: "/images/coxinhas.jpg"
  },
  {
    name: "Travesseirinhos",
    category: "Salgados para festa",
    description: "Opções deliciosas para compor mesas e eventos especiais.",
    price: "Preço sob consulta",
    image: "/images/travesseirinhos.jpg"
  },
  {
    name: "Rissoles",
    category: "Salgados para festa",
    description: "Preparados com muito cuidado e sabores variados.",
    price: "Preço sob consulta",
    image: "/images/rissoles.jpg"
  },
  {
    name: "Empadinhas",
    category: "Salgados para festa",
    description: "Clássicas, saborosas e ideais para diferentes ocasiões.",
    price: "Preço sob consulta",
    image: "/images/empadinhas.jpg"
  },
  {
    name: "Churros pequenos",
    category: "Doces",
    description: "Perfeitos para festas, lembranças e momentos especiais.",
    price: "Preço sob consulta",
    image: "/images/churros-pequenos.jpg"
  },
  {
    name: "Bolinhos variados",
    category: "Salgados para festa",
    description: "Sabores diversos para compor pedidos personalizados.",
    price: "Preço sob consulta",
    image: "/images/bolinhos.jpg"
  },
  {
    name: "Salgados grandes",
    category: "Lanches individuais",
    description: "Opções maiores para quem quer matar a fome com muito sabor.",
    price: "Preço sob consulta",
    image: "/images/salgados-grandes.jpg"
  },
  {
    name: "Churros grandes",
    category: "Doces",
    description: "Uma opção maior e deliciosa para lanches e encomendas.",
    price: "Preço sob consulta",
    image: "/images/churros-grandes.jpg"
  },
  {
    name: "Mini coxinhas de copo",
    category: "Eventos e porções",
    description: "Ideais para reuniões, eventos e festas com apresentação prática.",
    price: "Preço sob consulta",
    image: "/images/mini-coxinhas-copo.jpg"
  },
  {
    name: "Encomenda personalizada",
    category: "Personalizados",
    description: "Montamos conforme a sua necessidade e quantidade de pessoas.",
    price: "Sob consulta",
    image: "/images/encomenda-personalizada.jpg",
    custom: true
  }
];