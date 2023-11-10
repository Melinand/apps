import { Categoria } from "../interfaces/categorias";
export const CATEGORIAS : Categoria [] = [
    {
        nombre: "Hamburguesas",
        id:0,
         imgUrl:"https://img.asmedia.epimg.net/resizer/d4rnbzBhzlffzz2_aKLti6ZpM_c=/1472x1104/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/JKIMEPFV35GW5D7TMFGA3FBJMQ.jpg",
        productos:[{
            id:1,
            nombre: "Hamburguesa bacon and cheddar con papas fritas",
            precio: 3500,
            ingredientes:["doble carne","panceta","cheddar"],
            imagen:"https://tse2.mm.bing.net/th?id=OIP.DQPg63efwHWbdYisZgtjkAHaEK&pid=Api&P=0&h=180"
        },
        {
            id:2,
            nombre: "Hamburguesa clasica",
            precio: 3000,
            ingredientes:[" carne","queso"],
            imagen:"https://tse1.mm.bing.net/th?id=OIP.oBqH5u3Z8mwZFbY-z7L-oQHaDt&pid=Api&P=0&h=180"
        },
        {
            id:3,
            nombre: "Hamburguesa completa",
            precio: 4000,
            ingredientes:["doble carne","queso","jamos","lechuga","tomate"],
            imagen:"https://www.congeladosking.com/wp-content/uploads/2014/11/burger-and-fries.jpg"
        }
    ]
        
    },
    {
        nombre: "Pizzas",
         id:1,
          imgUrl:"https://alpina.com/media/mageplaza/blog/post/p/i/pizzas.jpg",
        productos:[{
            id:4,
            nombre: "Pizza especial",
            precio: 3500,
            ingredientes:["jamon","queso","huevo"],
            imagen:"https://img.pystatic.com/products/null_64a1386e-2b87-4e42-9d5b-714e49e10cbe_20170914035006724.jpg"
        },
        {
            id:4,
            nombre: "Pizza de mozarela",
            precio: 3500,
            ingredientes:["mozarela","salsa de tomate",""],
            imagen:"https://tse2.mm.bing.net/th?id=OIP.mxG4qyamml8L9tU0xd7qYAHaE8&pid=Api&P=0&h=180"
        },
        {
            id:6,
            nombre: "Pizza de palmito",
            precio: 3500,
            ingredientes:["palmito","salsa golf","salsa"],
            imagen:"https://tse2.mm.bing.net/th?id=OIP.a11hAelAzRHKKWf0h5L-RAHaFj&pid=Api&P=0&h=180"
        }

        ]
    },
    {
        nombre: "Postres",
         id:2,
          imgUrl:"https://tse1.mm.bing.net/th?id=OIP._zXPMAZq6RSxSf-_dZRyfQHaE8&pid=Api&P=0&h=180",
        productos:[{
            id:7,
            nombre: "tiramisu",
            precio: 500,
            ingredientes:["cafe","vainilla","crema"],
            imagen:"https://tse4.mm.bing.net/th?id=OIP.9sS07t96Lm_oHe9WOwiEBQHaEK&pid=Api&P=0&h=180"
        },
        {
            id:8,
            nombre: "Chocotorta",
            precio: 700,
            ingredientes:["Chocolinas","dulce de leche"],
            imagen:"https://cdn1.intriper.com/wp-content/uploads/2020/10/29094819/receta-de-chocotorta-mejor-postre-del-mundo.jpg"
        },
        {
            id:9,
            nombre: "Rogel",
            precio: 700,
            ingredientes:["dulce de leche","masa","merengue"],
            imagen:"https://tse4.mm.bing.net/th?id=OIP.sxTK1SZf_uw7N_25cRCwxgHaEK&pid=Api&P=0&h=180"
        }
    ]
    },
    {
        nombre: "Bebidas",
         id:3,
          imgUrl:"https://www.finedininglovers.com/es/sites/g/files/xknfdk1706/files/styles/im_landscape_100/public/2022-05/bebidas-refrescantes-sin-alcohol%C2%A9iStock.jpg.webp?itok=474pDi5b",
        productos:[{
            id:10,
            nombre: "gaseosa",
            precio: 300,
            ingredientes:["coca cola","sprite","fanta"],
            imagen:"https://i2.wp.com/delivery.restaurantemaitane.ec/wp-content/uploads/2020/06/Gaseosas.jpg?w=1650&ssl=1"
        },
        {
            id:11,
            nombre: "Agua",
            precio: 300,
            ingredientes:["agua con gas","agua sin gas s"],
            imagen:"https://tse4.mm.bing.net/th?id=OIP.NFw04Lh-MRhFMjqjbuI5nwHaHa&pid=Api&P=0&h=180"
        },
        {
            id:12,
            nombre: "jugos",
            precio: 300,
            ingredientes:["naranja","limonada","pomelo"],
            imagen:"https://tse2.mm.bing.net/th?id=OIP.C4D8EJifLB1gF6pQiSqYmgHaE7&pid=Api&P=0&h=180"
        }
    
    ]
    },
]