import Card from '@/component/Card/Card';
import React from 'react'

const Ecommerce = () => {
const productList = {
  brand: "Nike",
  products: [
    {
      id: 1,
      name: "Nike Air Max 270",
      category: "Footwear",
      price: 150,
      currency: "USD",
      in_stock: true,
      sizes: [7, 8, 9, 10, 11],
      colors: ["Black", "White", "Red"],
      rating: 4.5,
      reviews_count: 1200,
      image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      name: "Nike Dri-FIT T-Shirt",
      category: "Apparel",
      price: 35,
      currency: "USD",
      in_stock: true,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Blue", "Black", "Gray"],
      rating: 4.3,
      reviews_count: 540,
      image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 3,
      name: "Nike Revolution 6",
      category: "Footwear",
      price: 90,
      currency: "USD",
      in_stock: true,
      sizes: [6, 7, 8, 9, 10],
      colors: ["Black", "White"],
      rating: 4.2,
      reviews_count: 860,
      image_url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    },
    {
      id: 4,
      name: "Nike Sportswear Hoodie",
      category: "Apparel",
      price: 75,
      currency: "USD",
      in_stock: false,
      sizes: ["M", "L", "XL"],
      colors: ["Gray", "Black"],
      rating: 4.6,
      reviews_count: 430,
      image_url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    },
    {
      id: 5,
      name: "Nike Pegasus 40",
      category: "Footwear",
      price: 130,
      currency: "USD",
      in_stock: true,
      sizes: [7, 8, 9, 10, 11, 12],
      colors: ["Blue", "Black", "White"],
      rating: 4.7,
      reviews_count: 980,
      image_url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
    },
    {
      id: 6,
      name: "Nike Gym Shorts",
      category: "Apparel",
      price: 25,
      currency: "USD",
      in_stock: true,
      sizes: ["S", "M", "L"],
      colors: ["Black", "Red"],
      rating: 4.1,
      reviews_count: 300,
      image_url: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0"
    },
    {
      id: 7,
      name: "Nike Running Cap",
      category: "Accessories",
      price: 20,
      currency: "USD",
      in_stock: true,
      sizes: ["One Size"],
      colors: ["Black", "White"],
      rating: 4.4,
      reviews_count: 210,
      image_url: "https://images.unsplash.com/photo-1519741497674-611481863552"
    },
    {
      id: 8,
      name: "Nike Training Backpack",
      category: "Accessories",
      price: 60,
      currency: "USD",
      in_stock: true,
      sizes: ["Standard"],
      colors: ["Black", "Gray"],
      rating: 4.6,
      reviews_count: 150,
      image_url: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa"
    }
  ]
};

  return (
    <div className= 'flex flex-wrap'>
        {
            productList.products.map((item, id) => {
                return <Card key={item.id} products={item}/>;
            })
        }
      
    </div>
  )
}

export default Ecommerce