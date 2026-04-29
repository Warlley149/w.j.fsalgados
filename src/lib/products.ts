export interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  image?: string;
  custom?: boolean;
}

export const products: Product[] = [
  {
    name: "Coxinhas para festa",
    category: "Salgados para festa",
    description: "Crocantes, saborosas e perfeitas para qualquer comemoração.",
    price: "R$ 0,55 unidade",
    image: "/images/coxinhas.png"
  },
  {
    name: "Enroladinhos",
    category: "Salgados para festa",
    description: "Opções deliciosas para compor mesas e eventos especiais.",
    price: "R$ 0,55 unidade",
    image: "/images/enroladinhos.png"
  },
  {
    name: "Rissoles",
    category: "Salgados para festa",
    description: "Preparados com muito cuidado e sabores variados.",
    price: "R$ 0,55 unidade",
    image: "/images/rissoles.png"
  },
  {
    name: "Empadinhas",
    category: "Salgados para festa",
    description: "Clássicas, saborosas e ideais para diferentes ocasiões.",
    price: "R$ 0,55 unidade",
    image: "/images/empadinhas.png"
  },
  {
    name: "Churros pequenos",
    category: "Doces",
    description: "Perfeitos para festas, lembranças e momentos especiais.",
    price: "R$ 0,55 unidade",
    image: "/images/churros-pequenos.png"
  },
  {
    name: "Bolinhos variados",
    category: "Salgados para festa",
    description: "Sabores diversos para compor pedidos personalizados.",
    price: "R$ 0,55 - R$0,60 unidade ",
    image: "/images/bolinhos.png"
  },
  {
    name: "Coxinhas grandes",
    category: "Lanches individuais",
    description: "Opções maiores para quem quer matar a fome com muito sabor.",
    price: "R$ 5,00 unidade",
    image: "/images/coxinhas-grandes.png"
  },
  {
    name: "Churros grandes",
    category: "Doces",
    description: "Uma opção maior e deliciosa para lanches e encomendas.",
    price: "R$ 3,00 unidade",
    image: "/images/churros-grandes.png"
  },
  {
    name: "Mini coxinhas de copo",
    category: "Eventos e porções",
    description: "Ideais para reuniões, eventos e festas com apresentação prática.",
    price: "R$ 0,25 unidade",
    image: "/images/mini-coxinhas-copo.png"
  },
  {
    name: "Encomenda personalizada",
    category: "Personalizados",
    description: "Montamos conforme a sua necessidade e quantidade de pessoas.",
    price: "Sob consulta",
    image: "/images/encomenda-personalizada.png",
    custom: true
  }
];