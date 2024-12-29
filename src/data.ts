export const site = {
  title: "Клининг, уборка и промышленный альпинизм",
  brand: "Клининг груп",
  description: "Astro is a modern static site framework",
  url: "https://astro.build",
  landingShort: "в Москве и области",
  landingLong: "в Москве и Московской области",
};

export interface Page {
  uri: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  descriptionHtml: string;
}
export const Pages: Page[] = [
  {
    uri: "/",
    metaTitle: `${site.brand} | ${site.title} ${site.landingShort}`,
    metaDescription: `Клининг, уборка, промышленный альпинизм и другие услуги | ${site.brand} | ${site.title} ${site.landingLong}`,
    heroTitle: "Клининг",
    heroDescription: "Клининг",
    heroImage: "/assets/images/hero.jpg",
    descriptionHtml: `Astro is a modern static site framework`,
  },
  {
    uri: "/about",
    metaTitle: `О нас - ${site.brand} | ${site.title} ${site.landingShort}`,
    metaDescription: `Клининг, уборка, промышленный альпинизм и другие услуги ${site.landingLong}`,
    heroTitle: "Клининг",
    heroDescription: "Клининг",
    heroImage: "/assets/images/hero.jpg",
    descriptionHtml: `Astro is a modern static site framework`,
  },
  {
    uri: "/contact",
    metaTitle: `Связаться с ${site.brand} | ${site.title} ${site.landingShort}`,
    metaDescription: `Связь для заказа клининга и уборки | ${site.brand} | ${site.title} ${site.landingLong}`,
    heroTitle: "Клининг",
    heroDescription: "Клининг",
    heroImage: "/assets/images/hero.jpg",
    descriptionHtml: `Astro is a modern static site framework`,
  },
];

// export const Sections = {
//     '': {
//         title:
//     }
// }

/*
Уборка квартир и домов
Промышленный альпинизм
Мытье окон и витрин
Чистка ковров и напольных покрытий
Химчистка мягкой мебели
Удаление запахов и дезинфекция помещений
Уборка помещений после ремонта
Чистка офисов и бизнес-центров
Мойка фасадов домов и вывесок
Уборка территорий и прилегающих участков
* */
