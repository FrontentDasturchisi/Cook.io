import React, { useReducer } from 'react'
import pizza from "../img/pizza.jpg"
import sushi from "../img/sushi.jpg"
import burger from "../img/burger.jpg"
import ramen from "../img/ramen.jpg"
import taco from "../img/taco.jpg"
import croissant from "../img/croissant.jpg"
import yakiniku from "../img/yakiniku.jpg"
import tortilla from "../img/tortilla.jpg"
import sashimi from "../img/sashimi.jpg"
import jiaozi from "../img/jiaozi.jpg"
import { FaCircleLeft } from "react-icons/fa6";
import { FaCircleRight } from "react-icons/fa6";
const Carusel = () => {
    const initilaValue = {
        count: 0,
        people: ["Ismoil", "Abror", "Jahongir", "Abdurashid"]
    }
    const countFunc = (state, action) => {
        if (action.type === "COUNT") return { ...state, count: action.payload }
        return state
    }
    const [state, dispatch] = useReducer(countFunc, initilaValue)
    const reviews = [
        {
            id: 1,
            name: "Pizza",
            job: "Rank : 1 ",
            title: "Italy",
            img: pizza,
            text: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, vegetables, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven. The term pizza was first recorded in the year 997, in a Latin manuscript from the southern Italian town of Gaeta, in Lazio, on the border with Campania. Raffaele Esposito is often credited for creating modern pizza in Naples.",
        },
        {
            id: 2,
            name: "Sushi",
            job: "Rank : 2 ",
            title: "Japan",
            img: sushi,
            text: "Sushi is a Japanese dish of prepared vinegared rice, usually with some sugar and salt, plus a variety of ingredients, such as vegetables, and any meat, but most commonly seafood (often raw but can be cooked). Styles of sushi and its presentation vary widely, but the one key ingredient is 'sushi rice', also referred to as shari, or sumeshi. The creator of modern sushi is believed to be Hanaya Yohei, who invented nigiri-zushi, a type of sushi most known today, in which seafood is placed on hand-pressed vinegared rice, around 1824 in the Edo period (1603–1867). It was the fast food of the chōnin class in the Edo period",
        },
        {
            id: 3,
            name: "Burger",
            job: "Rank : 3 ",
            title: "United States of America",
            img: burger,
            text: "A hamburger or simply burger is a food consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a 'special sauce', often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns. A hamburger patty topped with cheese is called a cheeseburger. Hamburgers are often sold at fast-food restaurants and diners, but are also sold at various other restaurants.",
        },
        {
            id: 4,
            name: "Ramen",
            job: "Rank : 4 ",
            title: "Japan",
            img: ramen,
            text: "Ramen is a Japanese noodle dish. It consists of Chinese-style wheat noodles served in a broth; common flavors are soy sauce and miso, with typical toppings including sliced pork (chāshū), nori (dried seaweed), menma (bamboo shoots), and scallions. Ramen has its roots in Chinese noodle dishes and is a part of Japanese Chinese cuisine. Nearly every region in Japan has its own variation of ramen, such as the tonkotsu (pork bone broth) ramen of Kyushu and the miso ramen of Hokkaido. The origins of ramen can be traced back to Yokohama Chinatown in the early 20th century.",
        },
        {
            id: 5,
            name: "Taco",
            job: "Rank : 5 ",
            title: "Mexico",
            img: taco,
            text: "A taco is a traditional Mexican food consisting of a small hand-sized corn- or wheat-based tortilla topped with a filling. The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, beans, vegetables, and cheese, and garnished with various condiments, such as salsa, guacamole, or sour cream, and vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form of antojitos, or Mexican street food, which have spread around the world.",
        },
        {
            id: 6,
            name: "Croissant",
            job: "Rank : 6 ",
            title: "France",
            img: croissant,
            text: "A croissant is a French pastry made from puff pastry in a crescent shape. It is a buttery, flaky, viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough. Croissants are named for their historical crescent shape. The dough is layered with butter, rolled and folded several times in succession, then rolled into a thin sheet, in a technique called laminating. The process results in a layered, flaky texture, similar to a puff pastry",
        },
        {
            id: 7,
            name: "Yakiniku",
            job: "Rank : 7 ",
            title: "Japan",
            img: yakiniku,
            text: "Yakiniku meaning 'grilled meat', is a Japanese term that, in its broadest sense, refers to grilled meat cuisine. Today, 'yakiniku' commonly refers to a style of cooking bite-size meat (usually beef and offal) and vegetables on gridirons or griddles over a flame of wood charcoals carbonized by dry distillation or a gas/electric grill. It is one of the most popular dishes in Japan. The origin of contemporary yakiniku is considered to be Korean barbecue, one of the most popular dishes in Korean cuisine",
        },
        {
            id: 8,
            name: "Tortilla",
            job: "Rank : 8 ",
            title: "Mexico",
            img: tortilla,
            text: "A tortilla is a thin, circular unleavened flatbread from Mesoamerica originally made from maize hominy meal, and now also from wheat flour. The Aztecs and other Nahuatl speakers called tortillas tlaxcalli. First made by the indigenous peoples of Mesoamerica before colonization, tortillas are a cornerstone of Mesoamerican cuisine. Corn tortillas in Mesoamerica are known from as early as 500 BCE.",
        },
        {
            id: 9,
            name: "Sashimi",
            job: "Rank : 9 ",
            title: "Japan",
            img: sashimi,
            text: "The word sashimi means 'pierced body'. This word dates from the Muromachi period (1336 to 1573) and was possibly coined when the word = kiru (cut), the culinary step, was considered too inauspicious to be used by anyone other than samurai. This word may derive from the culinary practice of sticking the fish's tail and fin to the slices for the purpose of identifying the fish being eaten. Another possibility for the name is the traditional method of harvesting. 'Sashimi-grade' fish is caught by individual handline. As soon as the fish is landed, its brain is pierced with a sharp spike, and it is placed in slurried ice.",
        },
        {
            id: 10,
            name: "Jiaozi",
            job: "Rank : 10 ",
            title: "China",
            img: jiaozi,
            text: "Jiaozi are a type of Chinese dumpling. Jiaozi typically consist of a ground meat and/or vegetable filling wrapped into a thinly rolled piece of dough, which is then sealed by pressing the edges together. Finished jiaozi can be boiled, steamed, pan fried, or deep fried, and are traditionally served with a black vinegar and sesame oil dip. They can also be served in a soup. Jiaozi have great cultural significance attached to them within China. Jiaozi are one of the major dishes eaten during the Chinese New Year throughout northern China and eaten all year round in the northern provinces.",
        },

    ];


    const changeCarusel = (action) => {
        if (action === "add") {
            if (state.count > reviews.length - 2) {
                // setCount(0)
                dispatch({ type: "COUNT", payload: 0 })
            }
            else {
                // console.log(count);
                // setCount(count + 1)
                dispatch({ type: "COUNT", payload: state.count + 1 })
            }
        }
        else if (action === "remove") {
            if (state.count === 0) {
                // setCount(reviews.length - 1)
                dispatch({ type: "COUNT", payload: reviews.length - 1 })
            }
            else {
                // console.log(count);
                // setCount(count - 1)
                dispatch({ type: "COUNT", payload: state.count - 1 })
            }
        }
    }


    return (
        <div>
         <h1 className='text-white text-4xl text-center mt-[100px] mb-[140px] font-bold'>Top 10 famous meals around the world</h1>
            <div className='flex  h-screen justify-center items-center mt-8'>
            <div className='flex gap-5  bg-blue-950  flex-col w-[700px] items-center p-10 shadow-lg rounded-xl shadow-white/80 carusel' id='carusel'>
                <div className='w-[200px] h-[200px] rounded-full overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src={reviews[state.count].img} alt="" />
                </div>
                <div className='text-center' >
                    <h1 className='text-2xl text-white font-bold'>{reviews[state.count].name}</h1>
                    <h5 className="uppercase text-cyan-400 my-2">{reviews[state.count].job}</h5>
                    <h5 className="uppercase text-white/50 font-bold my-2"> Country: {reviews[state.count].title}</h5>
                    <p className='text-white'>{reviews[state.count].text}</p>
                    <div className='flex mt-5 gap-10 justify-center'>
                        <button className='text-5xl text-white' onClick={() => changeCarusel('remove')}>
                            <FaCircleLeft />
                        </button>
                        <button onClick={() => dispatch({ type: "COUNT", payload: Math.floor(Math.random() * 4) })} className='px-6 py-2 mt-5 rounded-md hover:bg-white/80  hover:text-slate-900 shadow-lg hover:shadow-white/60 text-white border border-white bg-transparent '>Random</button>
                        <button className='text-5xl text-white' onClick={() => changeCarusel('add')}>
                            <FaCircleRight />
                        </button>

                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Carusel


