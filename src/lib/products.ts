export interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
  image?: string;
  custom?: boolean;
  featured?: boolean;
  combo?: boolean;
  serves?: string;
  details?: string;
}

export const products: Product[] = [
  {
    name: "Coxinhas para festa",
    category: "Salgados para festa",
    description: "Crocantes, saborosas e perfeitas para qualquer comemoração.",
    price: "R$ 0,55 unidade",
    image: "/images/coxinhas.png",
    featured: true,
    details: "Disponíveis em encomendas para aniversários, reuniões, confraternizações e eventos diversos."
  },
  {
    name: "Enroladinhos",
    category: "Salgados para festa",
    description: "Opções deliciosas para compor mesas e eventos especiais.",
    price: "R$ 0,55 unidade",
    image: "/images/enroladinhos.png",
    details: "Uma opção prática para compor bandejas e pedidos personalizados."
  },
  {
    name: "Rissoles",
    category: "Salgados para festa",
    description: "Preparados com muito cuidado e sabores variados.",
    price: "R$ 0,55 unidade",
    image: "/images/rissoles.png",
    featured: true,
    details: "Ótimos para festas, encontros e eventos com variedade de sabores."
  },
  {
    name: "Empadinhas",
    category: "Salgados para festa",
    description: "Clássicas, saborosas e ideais para diferentes ocasiões.",
    price: "R$ 0,55 unidade",
    image: "/images/empadinhas.png",
     details: "Perfeitas para complementar encomendas e mesas de festa."
  },
  {
    name: "Churros pequenos",
    category: "Doces",
    description: "Perfeitos para festas, lembranças e momentos especiais.",
    price: "R$ 0,55 unidade",
    image: "/images/churros-pequenos.png",
    details: "Ótimos para aniversários, lembrancinhas e eventos."
  },
  {
    name: "Bolinhos variados",
    category: "Salgados para festa",
    description: "Sabores diversos para compor pedidos personalizados.",
    price: "R$ 0,55 - R$0,60 unidade ",
    image: "/images/bolinhos.png",
    details: "Uma opção versátil para bandejas e combos."
  },
  {
    name: "Coxinhas grandes",
    category: "Lanches individuais",
    description: "Opções maiores para quem quer matar a fome com muito sabor.",
    price: "R$ 5,00 unidade",
    image: "/images/coxinhas-grandes.png",
    details: "Indicados para lanches individuais e pedidos rápidos."
  },
  {
    name: "Churros grandes",
    category: "Doces",
    description: "Uma opção maior e deliciosa para lanches e encomendas.",
    price: "R$ 3,00 unidade",
    image: "/images/churros-grandes.png",
    details: "Uma opção doce para encomendas e venda unitária."
  },
  {
    name: "Mini coxinhas de copo",
    category: "Eventos e porções",
    description: "Ideais para reuniões, eventos e festas com apresentação prática.",
    price: "R$ 0,25 unidade",
    image: "/images/mini-coxinhas-copo.png",
    featured: true,
    details: "Muito procuradas para servir em eventos, reuniões e confraternizações."
  },
  {
    name: "Combo festa 50 pessoas",
    category: "Combos para festa",
    description: "Sugestão de combo para pequenas comemorações. Sugerimos 200 salgados variados, com opções de doces e salgados para agradar a todos os gostos.",
    price: "R$110",
    image: "/images/combo-50-pessoas.png",
    combo: true,
    serves: "Serve em média 50 pessoas",
    details: "Ideal para comemorações menores, com seleção de salgados pensada para praticidade."
  },
  {
    name: "Combo festa 100 pessoas",
    category: "Combos para festa",
    description: "Opção prática para aniversários e encontros maiores. Sugerimos 400 salgados variados, com opções de doces e salgados para agradar a todos os gostos.",
    price: "R$220",
    image: "/images/combo-100-pessoas.jpeg",
    combo: true,
    serves: "Serve em média 100 pessoas",
    featured: true,
    details: "Combo pensado para eventos de porte médio, com mais praticidade na escolha."
  },
  {
    name: "Encomenda personalizada",
    category: "Personalizados",
    description: "Montamos conforme a sua necessidade e quantidade de pessoas.",
    price: "Sob consulta",
    image: "/images/encomenda-personalizada.png",
    custom: true,
    details: "Informe quantidade de pessoas, preferências e tipo de evento para montarmos sua encomenda."
  }
];