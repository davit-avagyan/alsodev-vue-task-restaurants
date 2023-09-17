export default {
  state: () => ({
    partners: [
      {
        id: 1,
        name: "Пицца Плюс",
        time_of_delivery: 50,
        stars: 4.5,
        price: 900,
        kitchen: "Пицца",
        image: "pizza-plus/preview.jpg",
        products: "pizza-plus.json"
      },
      {
        id: 2,
        name: "Тануки",
        time_of_delivery: 60,
        stars: 4.3,
        price: 1200,
        kitchen: "Суши, роллы",
        image: "tanuki/preview.jpg",
        products: "tanuki.json"
      },
      {
        id: 3,
        name: "FoodBand",
        time_of_delivery: 40,
        stars: 4.4,
        price: 450,
        kitchen: "Пицца",
        image: "food-band/preview.jpg",
        products: "food-band.json"
      },
      {
        id: 4,
        name: "Палки скалки",
        time_of_delivery: 55,
        stars: 4.1,
        price: 500,
        kitchen: "Пицца",
        image: "palki-skalki/preview.jpg",
        products: "palki-skalki.json"
      },
      {
        id: 5,
        name: "Гуси Лебеди",
        time_of_delivery: 75,
        stars: 4.7,
        price: 1000,
        kitchen: "Русская кухня",
        image: "gusi-lebedi/preview.jpg",
        products: "gusi-lebedi.json"
      },
      {
        id: 6,
        name: "PizzaBurger",
        time_of_delivery: 45,
        stars: 4.6,
        price: 700,
        kitchen: "Пицца",
        image: "pizza-burger/preview.jpg",
        products: "pizza-burger.json"
      }
    ]
  }),
  getters: {
    getPartners: state => state.partners,
    getPartnersById: state => id => state.partners.find(p => p.id === id)
  }
}