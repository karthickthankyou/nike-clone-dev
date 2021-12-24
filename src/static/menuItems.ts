export type submenuType = { title: string; subTitles: string[] }
// type FixedSizeArray<N extends number, T> = N extends 0
//   ? never[]
//   : {
//       0: T
//       length: N
//     } & ReadonlyArray<T>

export const menMenu: [
  submenuType,
  submenuType,
  submenuType,
  submenuType,
  submenuType,
  submenuType
] = [
  {
    title: 'Featured',
    subTitles: [
      'New Releases',
      'SNKRS Launch Calendar',
      'Member Access',
      'Air Force 1',
      'Football Club Kits',
      'Sustainable Materials',
      'Top Picks Under ₹7,500',
      'Sale',
    ],
  },

  {
    title: 'Shoes',
    subTitles: [
      'Newest Sneakers',
      'All Shoes',
      'Lifestyle',
      'Running',
      'Basketball',
      'Jordan',
      'Football',
      'Gym and Training',
      'Skateboarding',
      'Tennis',
      'Sandals and Slides',
      'Customise with Nike By You',
      'All Sale Shoes',
    ],
  },

  {
    title: 'Clothing',
    subTitles: [
      'All Clothing',
      'Tops and T-Shirts',
      'Jerseys and Kits',
      'Hoodies and Sweatshirts',
      'Jackets and Gilets',
      'Pants and Leggings',
      'Tracksuits',
      'Compression and Base Layer',
      'Shorts',
      'Caps',
      'Socks',
      'Bags and Backpacks',
      'Accessories and Equipment',
      'All Sale Clothing',
    ],
  },
  {
    title: 'Shop By Sport',
    subTitles: [
      'Running',
      'Football',
      'Basketball',
      'Gym and Training',
      'Yoga',
      'Skateboarding',
      'Tennis',
      'Golf',
    ],
  },
  {
    title: 'Shop By Brand',
    subTitles: [
      'Nike Sportswear',
      'NikeLab',
      'Nike By You',
      'Jordan',
      'ACG',
      'NBA',
      'Nike SB',
    ],
  },
  {
    title: 'Icons',
    subTitles: ['Air Force 1', 'Pegasus', 'Blazer', 'Air Jordan 1', 'Air Max'],
  },
]

export const womenMenu: [
  submenuType,
  submenuType,
  submenuType,
  submenuType,
  submenuType,
  submenuType
] = [
  {
    title: 'Featured',
    subTitles: [
      'New Releases',
      'SNKRS Launch Calendar',
      'Member Access',
      'Air Force 1',
      'Bra and Legging Duos',
      'Sustainable Materials',
      'Top Picks Under ₹7,500',
      'Sale',
    ],
  },
  {
    title: 'Shoes',
    subTitles: [
      'All Shoes',
      'Lifestyle',
      'Running',
      'Gym and Training',
      'Jordan',
      'Football',
      'Basketball',
      'Skateboarding',
      'Tennis',
      'Sandals and Slides',
      'Customise with Nike By You',
      'All Sale Shoes',
    ],
  },
  {
    title: 'Clothing',
    subTitles: [
      'All Clothing',
      'Sports Bras',
      'Tops and T-Shirts',
      'Hoodies and Sweatshirts',
      'Jackets and Gilets',
      'Pants and Leggings',
      'Tracksuits',
      'Compression and Base Layer',
      'Shorts',
      'Skirts and Dresses',
      'Jerseys and Kits',
      'Modest Wear',
      'Plus size',
      'Caps',
      'Socks',
      'Bags and Backpacks',
      'Accessories and Equipment',
      'All Sale Clothing',
    ],
  },
  {
    title: 'Shop By Sport',
    subTitles: [
      'Running',
      'Gym and Training',
      'Yoga',
      'Football',
      'Basketball',
      'Skateboarding',
      'Tennis',
      'Golf',
    ],
  },
  {
    title: 'Shop By Brand',
    subTitles: [
      'Nike Sportswear',
      'NikeLab',
      'Nike By You',
      'Jordan',
      'ACG',
      'NBA',
      'Nike SB',
    ],
  },
  {
    title: 'Icons',
    subTitles: ['Air Force 1', 'Pegasus', 'Blazer', 'Air Jordan 1', 'Air Max'],
  },
]

export const kidsMenu: [
  submenuType,
  submenuType,
  submenuType,
  submenuType,
  submenuType,
  submenuType,
  submenuType
] = [
  {
    title: 'Featured',
    subTitles: [
      'New Releases',
      'Member Access',
      'Air Force 1',
      'Summer Shop',
      'Tie Dye',
      'Bags and Backpacks',
      'Jordan',
      'Sale',
    ],
  },
  {
    title: "Boys' Shoes",
    subTitles: [
      'Older Kids (3–6.5)',
      'Younger Kids (10–2.5)',
      'Baby and Toddler (1.5–9.5)',
      'Lifestyle',
      'Running',
      'Basketball',
      'Jordan',
      'Football',
      'Sandals and Slides',
      'All Shoes',
    ],
  },
  {
    title: "Boys' Clothing",
    subTitles: [
      'Tops and T-Shirts',
      'Hoodies and Sweatshirts',
      'Pants and Leggings',
      'Shorts',
      "All Boys' Clothing",
    ],
  },
  {
    title: "Girls' Shoes",
    subTitles: [
      'Older Kids (3–6.5)',
      'Younger Kids (10–2.5)',
      'Baby and Toddler (1.5–9.5)',
      'Lifestyle',
      'Running',
      'Basketball',
      'Football',
      'Sandals and Slides',
      'All Shoes',
    ],
  },
  {
    title: "Girls' Clothing",
    subTitles: [
      'Tops and T-Shirts',
      'Sports Bras',
      'Hoodies and Sweatshirts',
      'Pants and Leggings',
      'Shorts',
      "All Girls' Clothing",
    ],
  },
  {
    title: 'Accessories and Equipment',
    subTitles: ['Balls', 'Bags and Backpacks', 'Hats and Headwear'],
  },
  {
    title: 'Shop By Sport',
    subTitles: [
      'Running',
      'Football',
      'Basketball',
      'Gym and Training',
      'Tennis',
    ],
  },
]

export const customiseMenu: [
  submenuType,
  submenuType,
  submenuType,
  submenuType
] = [
  { title: 'Featured', subTitles: ['Nike By You New Releases'] },
  { title: 'Nike By You', subTitles: ['Men', 'Women'] },
  {
    title: 'By Sport',
    subTitles: ['Lifestyle', 'Running', 'Basketball', 'Football'],
  },
  { title: 'Icons', subTitles: ['Air Max', 'Air Force 1', 'Free', 'Flyknit'] },
]

export const salemenu: [submenuType, submenuType, submenuType, submenuType] = [
  { title: 'Featured', subTitles: ['Shop All Sale'] },

  {
    title: "Men's Sale",
    subTitles: ['Shoes', 'Clothing', 'Accessories and Equipment'],
  },

  {
    title: "Women's Sale",
    subTitles: ['Shoes', 'Clothing', 'Accessories and Equipment'],
  },

  {
    title: "Kids' Sale",
    subTitles: ['Shoes', 'Clothing', 'Accessories and Equipment'],
  },
]
