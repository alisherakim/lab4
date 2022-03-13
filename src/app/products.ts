export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  rating:string;
  liunk:string;
}

export const products = [
  {
    id: 1,
    image:'https://images-na.ssl-images-amazon.com/images/I/81qHEkVVniL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL127_SR127,127_.jpg',
    name: 'Family Money',
    price: 4.99,
    description: 'A dead man’s secrets put a family in peril in a twisting novel of suspense by the Amazon Charts bestselling author of the David Adams series.',
    rating:'2|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Family-Money-Chad-Zunker-ebook/dp/B08SLW9ZL1/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B08SLW9ZL1&psc=1'
  },
  {
    id: 2,
    image:'https://images-na.ssl-images-amazon.com/images/I/7133yEVqcHL._UX300__PJku-headphones-v1,TopRight,0,-50_AC_UL127_SR127,127_.jpg',
    name: 'The Reunion',
    price: 4.99,
    description: 'From the USA Today bestselling author of The Wedding Game comes a new romantic comedy about the antics that ensue when three siblings come together for their parents’ fiftieth-anniversary party.',
    rating:'2.5|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Reunion-Meghan-Quinn-ebook/dp/B0995SDJMF/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B0995SDJMF&psc=1'
  },
  {
    id: 3,
    image:'https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL127_SR127,127_.jpg',
    name: 'WILL',
    price: 1.00,
    description: 'One of the most dynamic and globally recognized entertainment forces of our time opens up fully about his life, in a brave and inspiring book that traces his learning curve to a place where outer success, inner happiness, and human connection are aligned. Along the way, Will tells the story in full of one of the most amazing rides through the worlds of music and film that anyone has ever had.',
    rating:'4.7|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Audible-Will/dp/B096MWJLNW/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B096MWJLNW&psc=1'
  },
  {
    id: 4,
    image:'https://images-na.ssl-images-amazon.com/images/I/81PNeyIYVfL._AC_UL127_SR127,127_.jpg',
    name: 'Greenlights',
    price: 1.00,
    description: 'Number-one New York Times Best Seller Discover the life-changing memoir that has inspired millions of readers through the Academy Award-winning actor’s unflinching honesty, unconventional wisdom, and lessons learned the hard way about living with greater satisfaction.',
    rating:'3.9|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Greenlights/dp/B08HLW2JXD/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B08HLW2JXD&psc=1'
  },
  {
    id: 5,
    image:'https://images-na.ssl-images-amazon.com/images/I/91anczTWHgL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg',
    name: 'Unsuitable',
    price: 4.99,
    description: 'From New York Times bestselling author, Samantha Towle, comes a new sexy, romantic suspense standalone novel...',
    rating:'4.5|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Unsuitable-Book-1-Samantha-Towle-ebook/dp/B01LZLCNSH/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B01LZLCNSH&psc=1'
  },
  {
    id: 6,
    image:'https://images-na.ssl-images-amazon.com/images/I/81ZyXARfy8L._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg',
    name: 'Taste',
    price: 4.99,
    description: 'The last person on earth I want to be stranded with is Gianni Lupo.But thanks to the blizzard of the century, I’m trapped in a roadside motel room with that cocky bastard for two straight days. With one small bed.',
    rating:'4.9|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Taste-Melanie-Harlow-ebook/dp/B09LXJ1F9Y/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B09LXJ1F9Y&psc=1'
  },
  {
    id: 7,
    image:'https://images-na.ssl-images-amazon.com/images/I/61+nBGbGW7L._AC_UL127_SR127,127_.jpg',
    name: 'Verity',
    price: 11.26,
    description: 'Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish......',
    rating:'3.3|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Verity-Colleen-Hoover/dp/1538724731/ref=zg_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=1538724731&psc=1'
  },
  {
    id: 8,
    image:'https://images-na.ssl-images-amazon.com/images/I/71ODaT072wL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL127_SR127,127_.jpg',
    name: 'Things We Never Got Over',
    price: 3.99,
    description: 'Bearded, bad-boy barber Knox prefers to live his life the way he takes his coffee: Alone. Unless you count his basset hound, Waylon.',
    rating:'4.8|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Things-We-Never-Got-Over-ebook/dp/B09PNM8FFN/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B09PNM8FFN&psc=1'
  },
  {
    id: 9,
    image:'https://images-na.ssl-images-amazon.com/images/I/91Hfuxsp3vL._AC_UL127_SR127,127_.jpg',
    name: 'Or Else: A Thriller',
    price: 4.99,
    description: 'A secret love becomes a fatal affair in a twisting novel of suspense by Wall Street Journal bestselling author Joe Hart.',
    rating:'4.3|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Else-Thriller-Joe-Hart-ebook/dp/B09D3HSRDF/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B09D3HSRDF&psc=1'
  },
  {
    id: 10,
    image:'https://images-na.ssl-images-amazon.com/images/I/81MUd9D241L._AC_UL127_SR127,127_.jpg',
    name: 'Say Her Name',
    price: 4.99,
    description: '‘My book of the year so far…’ —Lee Child, #1 New York Times bestselling author. In this chilling thriller from the bestselling authors of Spare Room, one woman just wants the truth about who she really is. But she’s not the only one looking…',
    rating:'4.63|5',
    liunk:'https://wa.me/?text=https://www.amazon.com/Say-Her-Name-Dreda-Mitchell-ebook/dp/B09BCNXKVT/ref=zg_atc_o_2/132-2231131-6441355?pd_rd_w=6G40F&pf_rd_p=9de7a1db-3336-42ef-b0d2-5a9bd339ae44&pf_rd_r=BZX9FWMNMTSAJB4KSJC8&pd_rd_r=19d5d905-7e9b-461d-92b9-5d52cf6dffe2&pd_rd_wg=cz8M3&pd_rd_i=B09BCNXKVT&psc=1'
  }
  
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/