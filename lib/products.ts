export interface Product {
  id: string;
  name: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'sh-01-white',
    name: 'T-SHIRT 01',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-02-white',
    name: 'T-SHIRT 02',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-03-white',
    name: 'T-SHIRT 03',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-04-white',
    name: 'T-SHIRT 04',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-05-white',
    name: 'T-SHIRT 05',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-06-white',
    name: 'T-SHIRT 06',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-01-black',
    name: 'CREWNECK 01',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-02-black',
    name: 'CREWNECK 02',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-07-white',
    name: 'T-SHIRT 07',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-08-white',
    name: 'T-SHIRT 08',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-09-white',
    name: 'T-SHIRT 09',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-10-white',
    name: 'T-SHIRT 10',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-11-white',
    name: 'T-SHIRT 11',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-12-white',
    name: 'T-SHIRT 12',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-03-black',
    name: 'CREWNECK 03',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-04-black',
    name: 'CREWNECK 04',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-05-black',
    name: 'CREWNECK 05',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-06-black',
    name: 'CREWNECK 06',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-07-black',
    name: 'CREWNECK 07',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-08-black',
    name: 'CREWNECK 08',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-09-black',
    name: 'CREWNECK 09',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-10-black',
    name: 'CREWNECK 10',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-13-white',
    name: 'T-SHIRT 13',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'sh-14-white',
    name: 'T-SHIRT 14',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-11-black',
    name: 'CREWNECK 11',
    image:
      '/images/merchTest.png',
  },
  {
    id: 'hd-12-black',
    name: 'CREWNECK 12',
    image:
      '/images/merchTest.png',
  },
];

// Function to find product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
