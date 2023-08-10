import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Basir",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: "1",
      name: "H&M Slim shirt",
      slug: "H&M-slim-shirt",
      category: "Shirts",
      image: "/images/p1.jpg", // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: "H&M",
      rating: 4.5,
      numReviews: 10,
      description: "high quality shirt",
    },
    {
      //_id: "2",
      name: "Uniqlo Fit Shirt",
      slug: "Uniqlo-fit-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 250,
      countInStock: 0,
      brand: "Uniqlo",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      //_id: "3",
      name: "H&M Slim Pant",
      slug: "H&M-slim-pant",
      category: "Pants",
      image: "/images/p3.jpg",
      price: 25,
      countInStock: 15,
      brand: "H&M",
      rating: 4.5,
      numReviews: 14,
      description: "high quality product",
    },
    {
      //_id: "4",
      name: "Uniqlo Fit Pant",
      slug: "Uniqlo-fit-pant",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 65,
      countInStock: 5,
      brand: "Uniqlo",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
  ],
};
export default data;
