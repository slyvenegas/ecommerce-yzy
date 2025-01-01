export interface Product {
  id: string;
  name: string;
  image: string;
}

// Product images were generated with Midjourney
// and are stored in a public Vercel Blob storage bucket
export const products: Product[] = [
  // {
  //   id: 'sh-01-white',
  //   name: 'T-Shirt 01',
  //   image:
  //     '/images/T_SHIRT_1.jpg',
  // },
  // {
  //   id: 'sh-02-white',
  //   name: 'T-Shirt 02',
  //   image:
  //     '/images/T_SHIRT_2.jpg',
  // },
  // {
  //   id: 'sh-03-white',
  //   name: 'Hoodie 01',
  //   image:
  //     '/images/T_SHIRT_3.jpg',
  // },
  // {
  //   id: 'sh-04-white',
  //   name: 'Windbreaker 01',
  //   image:
  //     '/images/T_SHIRT_4.jpg',
  // },
  // {
  //   id: 'sh-05-white',
  //   name: 'Racing Coat 01',
  //   image:
  //     '/images/T_SHIRT_5.jpg',
  // },
  // {
  //   id: 'sh-06-white',
  //   name: 'Shorts 01',
  //   image:
  //     '/images/T_SHIRT_6.jpg',
  // },
  // {
  //   id: 'hd-01-black',
  //   name: 'Sport Pants 01',
  //   image:
  //     '/images/T_SHIRT_7.jpg',
  // },
  // {
  //   id: 'hd-02-black',
  //   name: 'Sport Pants 06',
  //   image:
  //     '/images/T_SHIRT_8.jpg',
  // },
  // {
  //   id: 'sh-07-white',
  //   name: 'Socks 01',
  //   image:
  //     '/images/T_SHIRT_9.jpg',
  // },
  // {
  //   id: 'sh-08-white',
  //   name: 'T-Shirt 01',
  //   image:
  //     '/images/T_SHIRT_10.jpg',
  // },
  // {
  //   id: 'sh-09-white',
  //   name: 'T-Shirt 02',
  //   image:
  //     '/images/T_SHIRT_11.jpg',
  // },
  // {
  //   id: 'sh-10-white',
  //   name: 'Hoodie 01',
  //   image:
  //     '/images/T_SHIRT_12.jpg',
  // },
  // {
  //   id: 'sh-11-white',
  //   name: 'Windbreaker 01',
  //   image:
  //     '/images/T_SHIRT_13.jpg',
  // },
  // {
  //   id: 'sh-12-white',
  //   name: 'Racing Coat 01',
  //   image:
  //     '/images/T_SHIRT_14.jpg',
  // },
  // {
  //   id: 'hd-03-black',
  //   name: 'Shorts 01',
  //   image:
  //     '/images/T_SHIRT_15.jpg',
  // },
  // {
  //   id: 'hd-04-black',
  //   name: 'Sport Pants 01',
  //   image:
  //     '/images/T_SHIRT_16.jpg',
  // },
  // {
  //   id: 'hd-05-black',
  //   name: 'Sport Pants 06',
  //   image:
  //     '/images/T_SHIRT_17.jpg',
  // },
  // {
  //   id: 'hd-06-black',
  //   name: 'Socks 01',
  //   image:
  //     '/images/T_SHIRT_18.jpg',
  // },
  // {
  //   id: 'hd-07-black',
  //   name: 'T-Shirt 01',
  //   image:
  //     '/images/T_SHIRT_19.jpg',
  // },
  // {
  //   id: 'hd-08-black',
  //   name: 'T-Shirt 02',
  //   image:
  //     '/images/T_SHIRT_20.jpg',
  // },
  // {
  //   id: 'hd-09-black',
  //   name: 'Hoodie 01',
  //   image:
  //     '/images/T_SHIRT_21.jpg',
  // },
  // {
  //   id: 'hd-10-black',
  //   name: 'Windbreaker 01',
  //   image:
  //     '/images/T_SHIRT_22.jpg',
  // },
  // {
  //   id: 'sh-13-white',
  //   name: 'Racing Coat 01',
  //   image:
  //     '/images/T_SHIRT_23.jpg',
  // },
  // {
  //   id: 'sh-14-white',
  //   name: 'Shorts 01',
  //   image:
  //     '/images/T_SHIRT_24.jpg',
  // },
  {
    id: 'hd-11-black',
    name: 'Sport Pants 01',
    image:
      'https://res.cloudinary.com/ddqgjf5wr/image/upload/f_auto,q_auto/v1/merch_bluk/ndrj0c4ivso01b2f80ds',
  },
  {
    id: 'hd-12-black',
    name: 'Crewneck Black 01',
    image:
      'https://res.cloudinary.com/ddqgjf5wr/image/upload/f_auto,q_auto/v1/merch_bluk/cfj9ryqb7vsgh3lf1ngg',
  },
  // {
  //   id: 'sk-01-black',
  //   name: 'Socks 01',
  //   image:
  //     'https://6gy9systudbmcbju.public.blob.vercel-storage.com/sk-black-8GRZrj1nL3fHXEjFe80gDz7T8QtQ5N.png',
  // },
];

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
