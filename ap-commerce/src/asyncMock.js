const products = [
  {
    id: "1",
    name: "Guffercty kred GK68 60%",
    price: 1100,
    category: "KB",
    img: "https://m.media-amazon.com/images/I/71xRCjiLGPL._AC_SL1500_.jpg",
    stock: 20,
    description:
      "Guffercty kred GK68 60% Mechanical Keyboard SK68 Custom",
  },

  {
    id: "2",
    name: "MageGee Upgrade 60% Keyboard",
    price: 1100,
    category: "KB",
    img: "https://m.media-amazon.com/images/I/61+KvFb1BFL._AC_SL1500_.jpg",
    stock: 20,
    description:
      "MageGee Upgrade 60% Mechanical Keyboard, Gaming Keyboard Sea Blue Backlit Small Compact 60 Percent Keyboard Mechanical, Portable 60 Percent Gaming Keyboard Gamer (Grey White Red Switches)",
  },
  {
    id: "4",
    name: "ROYALAXE X ProtoArc Wireless",
    price: 1100,
    category: "KB",
    img: "https://m.media-amazon.com/images/I/61IX5QHfTML._AC_SL1500_.jpg",
    stock: 20,
    description:
      "ROYALAXE X ProtoArc R100 Wireless Mechanical Keyboard, Hot-swappable Wired/Bluetooth 5.0/2.4G Wireless Keyboard with RGB Backlit for Windows & Mac, PBT Keycaps, Gateron G Yellow Pro Switch, Lava Brown",
  },
  {
    id: "5",
    name: "Logitech G PRO X",
    price: 1100,
    category: "MOUSE",
    img: "https://m.media-amazon.com/images/I/31uyNiJjjyL.jpg",
    stock: 20,
    description:
      "Ratón inalámbrico para juegos Logitech G PRO X SUPERLIGHT, ultraligero, sensor HERO 25K, 25.600 DPI, 5 botones programables, batería de larga duración, compatible con PC/Mac, negro",
  },

  {
    id: "6",
    name: "Razer Viper",
    price: 1100,
    category: "MOUSE",
    img: "https://m.media-amazon.com/images/I/6157EeRHinL.jpg",
    stock: 20,
    description:
      "Ratón inalámbrico para juegos Razer Viper V2 Pro HyperSpeed: ultraligero de 58 g, conmutadores ópticos de tercera generación, sensor óptico de 30 K, controles de DPI integrados en el ratón, batería de 80 horas, cable USB tipo C incluido, negro",
  },
  {
    id: "7",
    name: "Razer Deathadder V2",
    price: 1100,
    category: "MOUSE",
    img: "https://m.media-amazon.com/images/I/61doJ9AKCPL.jpg",
    stock: 20,
    description:
      "Ratón para juegos Razer DeathAdder V2: sensor óptico de 20 000 DPI, interruptor de ratón para juegos más rápido, iluminación cromática RGB, 8 botones programables, empuñaduras laterales de goma, negro clásico",
  },
  {
    id: "8",
    name: "Logitech G435 LIGHTSPEED ",
    price: 1100,
    category: "AU",
    img: "https://m.media-amazon.com/images/I/81WfRjLX93L._AC_UY218_.jpg",
    stock: 20,
    description:
      "Auriculares inalámbricos Logitech G435 LIGHTSPEED y Bluetooth para juegos, auriculares supraaurales livianos, micrófonos integrados, batería de 18 horas, compatibles con Dolby Atmos, PC, PS4, PS5, Nintendo Switch, Mobile, blanco",
  },
  {
    id: "9",
    name: "Razer BlackShark V2 X",
    price: 1100,
    category: "AU",
    img: "https://m.media-amazon.com/images/I/71waplSVO7L._AC_UY218_.jpg",
    stock: 20,
    description:
      "Auriculares para juegos Razer BlackShark V2 X: sonido envolvente 7.1, controladores de 50 mm, cojín de espuma viscoelástica, para PC, PS4, PS5, Switch, Xbox One, Xbox Series X|S, móvil, conector de audio de 3,5 mm, negro clásico",
  },
  {
    id: "10",
    name: "Corsair VOID RGB Elite",
    price: 1100,
    category: "AU",
    img: "https://m.media-amazon.com/images/I/61nnZlMLDpL._AC_UY218_.jpg",
    stock: 20,
    description:
      "Auriculares inalámbricos premium para juegos Corsair VOID RGB Elite con sonido envolvente 7.1, certificados Discord, funcionan con PC, PS5 y PS4, blancos (CA-9011202-NA)",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === category));
    }, 500);
  });
};
