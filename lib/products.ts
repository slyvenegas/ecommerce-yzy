export interface Product {
  id: string;
  name: string;
  image: string;
}

// Product images were generated with Midjourney
// and are stored in a public Vercel Blob storage bucket
export const products: Product[] = [
  {
    id: 'ts-01-white',
    name: 'T-Shirt 01',
    image:
      '/images/T_SHIRT_1.jpg',
  },
  {
    id: 'ts-02-white',
    name: 'T-Shirt 02',
    image:
      '/images/T_SHIRT_2.jpg',
  },
  {
    id: 'hd-01-white',
    name: 'Hoodie 01',
    image:
      '/images/T_SHIRT_3.jpg',
  },
  {
    id: 'wb-01-white',
    name: 'Windbreaker 01',
    image:
      '/images/T_SHIRT_4.jpg',
  },
  {
    id: 'rc-01-white',
    name: 'Racing Coat 01',
    image:
      '/images/T_SHIRT_5.jpg',
  },
  {
    id: 'sh-01-white',
    name: 'Shorts 01',
    image:
      '/images/T_SHIRT_6.jpg',
  },
  {
    id: 'sp-01-white',
    name: 'Sport Pants 01',
    image:
      '/images/T_SHIRT_7.jpg',
  },
  {
    id: 'sp-06-white',
    name: 'Sport Pants 06',
    image:
      '/images/T_SHIRT_8.jpg',
  },
  {
    id: 'sk-01-white',
    name: 'Socks 01',
    image:
      '/images/T_SHIRT_9.jpg',
  },
  {
    id: 'ts-01-gray',
    name: 'T-Shirt 01',
    image:
      '/images/T_SHIRT_10.jpg',
  },
  {
    id: 'ts-02-gray',
    name: 'T-Shirt 02',
    image:
      '/images/T_SHIRT_11.jpg',
  },
  {
    id: 'hd-01-gray',
    name: 'Hoodie 01',
    image:
      '/images/T_SHIRT_12.jpg',
  },
  {
    id: 'wb-01-gray',
    name: 'Windbreaker 01',
    image:
      '/images/T_SHIRT_13.jpg',
  },
  {
    id: 'rc-01-gray',
    name: 'Racing Coat 01',
    image:
      '/images/T_SHIRT_14.jpg',
  },
  {
    id: 'sh-01-gray',
    name: 'Shorts 01',
    image:
      '/images/T_SHIRT_15.jpg',
  },
  {
    id: 'sp-01-gray',
    name: 'Sport Pants 01',
    image:
      '/images/T_SHIRT_16.jpg',
  },
  {
    id: 'sp-06-gray',
    name: 'Sport Pants 06',
    image:
      '/images/T_SHIRT_17.jpg',
  },
  {
    id: 'sk-01-gray',
    name: 'Socks 01',
    image:
      '/images/T_SHIRT_18.jpg',
  },
  {
    id: 'ts-01-black',
    name: 'T-Shirt 01',
    image:
      '/images/T_SHIRT_19.jpg',
  },
  {
    id: 'ts-02-black',
    name: 'T-Shirt 02',
    image:
      '/images/T_SHIRT_20.jpg',
  },
  {
    id: 'hd-01-black',
    name: 'Hoodie 01',
    image:
      '/images/T_SHIRT_21.jpg',
  },
  {
    id: 'wb-01-black',
    name: 'Windbreaker 01',
    image:
      '/images/T_SHIRT_22.jpg',
  },
  {
    id: 'rc-01-black',
    name: 'Racing Coat 01',
    image:
      '/images/T_SHIRT_23.jpg',
  },
  {
    id: 'sh-01-black',
    name: 'Shorts 01',
    image:
      '/images/T_SHIRT_24.jpg',
  },
  {
    id: 'sp-01-black',
    name: 'Sport Pants 01',
    image:
      '/images/T_SHIRT_25.jpg',
  },
  {
    id: 'sp-06-black',
    name: 'Sport Pants 06',
    image:
      '/images/T_SHIRT_26.jpg',
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
