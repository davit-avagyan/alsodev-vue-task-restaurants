import { PizzaPlusMenuImages } from "@/utils/PizzaPlusMenuImages.js"
import { TanukiMenuImages } from '@/utils/TanukiMenuImages'
import { FoodBandMenuImages } from '@/utils/FoodBandMenuImages'
import { PalkiSkalkiMenuImages } from '@/utils/PalkiSkalkiMenuImages'
import { GusiLebediMenuImages } from '@/utils/GusiLebediMenuImages'
import { PizzaBurgerMenuImages } from '@/utils/PizzaBurgerMenuImages'
export default {
  state: () => ({
    sorted: 'DESC',
    menus: [
      {
        partner_id: 1,
        menu: [
          {
            id: "pp01",
            name: "Пицца Везувий",
            description: "Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец «Халапенье», соус «Тобаско», томаты.",
            price: 545,
            image: PizzaPlusMenuImages.PizzaVesuvius
          },
          {
            id: "pp02",
            name: "Пицца Девичник",
            description: "Соус томатный, постное тесто, нежирный сыр, кукуруза, лук, маслины, грибы, помидоры, болгарский перец.",
            price: 450,
            image: PizzaPlusMenuImages.PizzaGirls
          },
          {
            id: "pp03",
            name: "Пицца Оле-Оле",
            description: "Соус томатный, сыр «Моцарелла», черри, маслины, зелень, майонез",
            price: 440,
            image: PizzaPlusMenuImages.PizzaOleole
          },
          {
            id: "pp04",
            name: "Пицца Плюс",
            description: "Соус томатный, сыр «Моцарелла», сыр «Чеддер», томаты, пепперони, телятина, грибы, бекон, болгарский перец.",
            price: 805,
            image: PizzaPlusMenuImages.PizzaPlus
          },
          {
            id: "pp05",
            name: "Пицца Гавайская",
            description: "Соус томатный, сыр «Моцарелла», ветчина, ананасы",
            price: 440,
            image: PizzaPlusMenuImages.PizzaHawaiian
          },
          {
            id: "pp06",
            name: "Пицца Классика",
            description: "Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями, грибы.",
            price: 510,
            image: PizzaPlusMenuImages.PizzaClassic
          }
        ]
      },
      {
        partner_id: 2,
        menu: [
          {
            id: "tn01",
            name: "ФИЛАДЕЛЬФИЯ НИСУАЗ",
            description: "Угорь, авокадо, сыр, тобико, соус «Нисуаз», кунжут, 6 шт.",
            price: 455,
            image: TanukiMenuImages.Nisuaz
          },
          {
            id: "tn02",
            name: "ФИЛАДЕЛЬФИЯ СМОУК",
            description: "Лосось копченый, курица копченая, омлет, огурец, авокадо, сыр, микс соусов, 6 шт.",
            price: 455,
            image: TanukiMenuImages.Smoke
          },
          {
            id: "tn03",
            name: "ФИЛАДЕЛЬФИЯ ФРЕШ",
            description: "Лосось, авокадо, огурец, сыр, омлет, тобико, микс соусов",
            price: 455,
            image: TanukiMenuImages.Fresh
          },
          {
            id: "tn04",
            name: "КАЛИФОРНИЯ АЖИ",
            description: "Лосось, авокадо, краб-микс, сыр, соус «Ажи-маракуйя», тобико, кунжут, 6 шт.",
            price: 455,
            image: TanukiMenuImages.Azhi
          },
          {
            id: "tn05",
            name: "КАЛИФОРНИЯ БЛЭК",
            description: "Креветка, краб-микс, сыр, тобико, микс соусов, кунжут, 6 шт.",
            price: 455,
            image: TanukiMenuImages.Black
          },
          {
            id: "tn06",
            name: "ТАНУКИ",
            description: "Креветка, снежный краб, гуакамоле, сыр, огурец, микс соусов, тобико, кунжут, 6 шт.",
            price: 649,
            image: TanukiMenuImages.Tanuki
          }
        ]
      },
      {
        partner_id: 3,
        menu: [
          {
            id: "fb01",
            name: "Мясная",
            description: "Пицца соус, сыр Моцарелла, томат, куриное филе, пепперони, свинина, бекон",
            price: 685,
            image: FoodBandMenuImages.Meet
          },
          {
            id: "fb02",
            name: "Маргарита",
            description: "Пицца соус, сыр Моцарелла, томат",
            price: 693,
            image: FoodBandMenuImages.Margarita
          },
          {
            id: "fb03",
            name: "Пепперони",
            description: "Пицца соус, пепперони, сыр Моцарелла",
            price: 595,
            image: FoodBandMenuImages.Pepperoni
          },
          {
            id: "fb04",
            name: "Семь сыров",
            description: "Сыр моцарелла, сыр эмменталь, соус сырный, сыр горгондзола, сыр чеддер, сыр креметте, сыр фетакса, сыр пармезан",
            price: 785,
            image: FoodBandMenuImages.SevenCheeses
          },
          {
            id: "fb05",
            name: "Том Ям",
            description: "Креветки, куриное филе, соус Том Ям, сыр Моцарелла, шампиньоны, капуста брокколи, томат.",
            price: 695,
            image: FoodBandMenuImages.TomYam
          },
          {
            id: "fb06",
            name: "Норвежская",
            description: "Сливочный соус, соус манго-чили, сыр моцарелла, лук красный, перец болгарский, ломтики лосося, салат Айсберг",
            price: 875,
            image: FoodBandMenuImages.Norwegian
          }
        ]
      },
      {
        partner_id: 4,
        menu: [
          {
            id: "ps01",
            name: "Комбо 3 пиццы",
            description: "Пепперони, Чикен Барбекю, Капричеза",
            price: 899,
            image: PalkiSkalkiMenuImages.Combo
          },
          {
            id: "ps02",
            name: "Пицца Римская",
            description: "30 см. Корнишоны, томатный соус, колбаса, красный лучок, сыр моцарелла, помидоры Черри, зелень.",
            price: 408,
            image: PalkiSkalkiMenuImages.Rome
          },
          {
            id: "ps03",
            name: "Пицца Фьюжн",
            description: "Сыр моцарелла, соус томатный, курица, пепперони, перец болгарский, томаты, лук красный, соус бургер, лук зеленый",
            price: 499,
            image: PalkiSkalkiMenuImages.Fusion
          },
          {
            id: "ps04",
            name: "Эби удон",
            description: "Японский супчик на мисо бульоне с добавлением яйца, тигровой креветки, лапши, шампиньонов и зеленого лучка.",
            price: 319,
            image: PalkiSkalkiMenuImages.Udon
          },
          {
            id: "ps05",
            name: "Чизбургер",
            description: "Мясная котлета, салат Айсберг, Шеф-соус, помидоры, корнишоны, сыр Чеддер, соус Барбекю",
            price: 358,
            image: PalkiSkalkiMenuImages.Cheeseburger
          },
          {
            id: "ps06",
            name: "Буррито с курицей",
            description: "Сыр, помидор, цыпленок, перец сладкий, лук, салат, яичный блинчик, соус сырный, тортилья, кетчуп",
            price: 356,
            image: PalkiSkalkiMenuImages.Burrito
          }
        ]
      },
      {
        partner_id: 5,
        menu: [
          {
            id: "gl01",
            name: "Пельмени теленок с поросем",
            description: "Настоящие самолепные пельмени из пушистого теста на деревенских желтках и сметане",
            price: 390,
            image: GusiLebediMenuImages.Dumplings
          },
          {
            id: "gl02",
            name: "Плов",
            description: "Плов на углях из правильного риса с бараниной, пряностями и овощами на курдючном жире",
            price: 520,
            image: GusiLebediMenuImages.Plov
          },
          {
            id: "gl03",
            name: "Цыпленок на вертеле",
            description: "Подается на лаваше со свежим томатом и огурцом, с маринованным луком и с шашлычным соусом",
            price: 490,
            image: GusiLebediMenuImages.Chick
          },
          {
            id: "gl04",
            name: "Суп Курочка ряба",
            description: "Кура тушка, морковь, макароны, зелень, яйцо, соль, специи.",
            price: 140,
            image: GusiLebediMenuImages.ChickenSoup
          },
          {
            id: "gl05",
            name: "Отбивная из поросенка",
            description: "Толстый кусок парной свинины с томатами и грибами под сырной корочкой",
            price: 490,
            image: GusiLebediMenuImages.PigChop
          },
          {
            id: "gl06",
            name: "Теленок в сливочном соусе",
            description: "Теленок с шампиньонами и луком обжаривается в сливочно-сметанном соусе с картофельным пюре и солеными огурчиками.",
            price: 530,
            image: GusiLebediMenuImages.CalfSauce
          },
          {
            id: "gl07",
            name: "Судак запеченный",
            description: "Филе судака с картошкой, деревенской сметаной, травами и луком",
            price: 490,
            image: GusiLebediMenuImages.Zander
          },
          {
            id: "gl08",
            name: "Мурманские кальмары",
            description: "Мурманские кальмары с чесночным маслом",
            price: 420,
            image: GusiLebediMenuImages.Squid
          },
          {
            id: "gl09",
            name: "Щучья уха на карасях",
            description: "Наваристая походная уха на четырех рыбах, лаврухе, перце и луке с водкой.",
            price: 380,
            image: GusiLebediMenuImages.Ear
          }
        ]
      },
      {
        partner_id: 6,
        menu: [
          {
            id: "pb01",
            name: "Пицца от Шеф-повара",
            description: "Сыр моцарелла, помидоры, салями, бекон, сыр пармезан, зелень, ветчина",
            price: 638,
            image: PizzaBurgerMenuImages.PizzaDacha
          },
          {
            id: "pb02",
            name: "Пицца Мясное ассорти",
            description: "Сыр моцарелла, фирменный соус, помидоры, куриная грудка, бекон, свинина, говядина, зелень",
            price: 693,
            image: PizzaBurgerMenuImages.PizzaMeat
          },
          {
            id: "pb03",
            name: "Пицца Деревенская",
            description: "Сыр моцарелла, пицца соус, чеснок, сыр пармезан, шампиньоны, помидоры, зелень, лук, курица, бекон, ветчина, пепперони",
            price: 705,
            image: PizzaBurgerMenuImages.PizzaVillage
          },
          {
            id: "pb04",
            name: "Пицца Цезарь",
            description: "Соус Цезарь, куриная грудка, сыр пармезан, моцарелла, гренки, помидоры, салат айсберг",
            price: 759,
            image: PizzaBurgerMenuImages.PizzaCaesar
          },
          {
            id: "pb05",
            name: "Пицца Пепперони",
            description: "Сыр моцарелла, пицца соус, шампиньоны, пепперони",
            price: 475,
            image: PizzaBurgerMenuImages.PizzaPepperoni
          },
          {
            id: "pb06",
            name: "Пицца Дачная",
            description: "Сыр моцарелла, пицца соус, бекон, картофель фри, куриная грудка, помидоры, пепперони, ветчина, зелень",
            price: 649,
            image: PizzaBurgerMenuImages.PizzaDacha2
          }
        ]
      }
    ]
  }),
  getters: {
    getMenuById: (state) => (id) => {
      const result = state.menus.find(m => m.partner_id === id)
      result.menu = result.menu.sort((a, b) => {
        return  state.sorted === 'DESC' ? b.price - a.price : a.price - b.price
      })
      return result
    },
    getSorted: (state) => state.sorted
  },
  mutations: {
    SET_SORTED(state, order){
      state.sorted = order
    }
  },
  actions: {
    changeSorted({commit}, order) {
      commit('SET_SORTED', order)
    }
  }
}