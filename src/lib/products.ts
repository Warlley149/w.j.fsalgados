export interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  custom?: boolean;
}

export const products: Product[] = [
  {
    name: "Coxinhas para festa",
    category: "Salgados para festa",
    description: "Crocantes, saborosas e perfeitas para qualquer comemoração.",
    price: "Preço sob definição"
  },
  {
    name: "Travesseirinhos",
    category: "Salgados para festa",
    description: "Opções deliciosas para compor mesas e eventos especiais.",
    price: "Preço sob definição"
  },
  {
    name: "Rissoles",
    category: "Salgados para festa",
    description: "Preparados com muito cuidado e sabores variados.",
    price: "Preço sob definição"
  },
  {
    name: "Empadinhas",
    category: "Salgados para festa",
    description: "Clássicas, saborosas e ideais para diferentes ocasiões.",
    price: "Preço sob definição"
  },
  {
    name: "Churros pequenos",
    category: "Doces",
    description: "Perfeitos para festas, lembranças e momentos especiais.",
    price: "Preço sob definição"
  },
  {
    name: "Bolinhos variados",
    category: "Salgados para festa",
    description: "Sabores diversos que vocês irão especificar no site.",
    price: "Preço sob definição"
  },
  {
    name: "Salgados grandes",
    category: "Lanches individuais",
    description: "Opções maiores para quem quer matar a fome com muito sabor.",
    price: "Preço sob definição"
  },
  {
    name: "Churros grandes",
    category: "Doces",
    description: "Uma opção maior e deliciosa para lanches e encomendas.",
    price: "Preço sob definição"
  },
  {
    name: "Mini coxinhas de copo",
    category: "Eventos e porções",
    description: "Ideais para reuniões, eventos e festas com apresentação prática.",
    price: "Preço sob definição"
  },
  {
    name: "Encomenda personalizada",
    category: "Personalizados",
    description: "Montamos conforme a sua necessidade e quantidade de pessoas.",
    price: "Sob consulta",
    custom: true
  }
];