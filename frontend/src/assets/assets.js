
import header_img from './logo.jpeg'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.jpeg'
import menu_2 from './menu_2.jpeg'
import menu_3 from './menu_3.jpeg'
import menu_4 from './menu_4.jpeg'
import menu_5 from './menu_5.jpeg'
import menu_6 from './menu_6.jpeg'
import menu_7 from './menu_7.jpeg'
import menu_8 from './menu_8.jpeg'

import food_1 from './food_1.jpg'
import food_2 from './food_2.jpeg'
import food_3 from './food_3.webp'
import food_4 from './food_4.webp'
import food_5 from './food_5.webp'

import add_icon_white from './add_icon_like.jpeg'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'


export const assets = {
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    profile_icon,

}

export const menu_list = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Burritos",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Vegan",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        image: food_1,
        description: "This easy Greek salad recipe is our new favorite summer side dish. Refreshing & delicious",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Fruity Balsamic Tofu Salad",
        image: food_2,
        description: "Perfect way to usher in the new season! gluten-free and of course: vegan",
        category: "Salad"
    }, {
        _id: "3",
        name: "Rainbow Chopped Salad with Basil & Mozzarella",
        image: food_3,
        description: "Fresh and colorful chopped salad. Classic caprese salad",
        category: "Salad"
    }, {
        _id: "4",
        name: "Garlic-and-Herb Potato Salad",
        image: food_4,
        description: "Mayo and potatoes. This gorgeous vinegar-based potato salad for you",
        category: "Salad"
    },{
        _id: "5",
        name: "Vegetarian Breakfast burrito",
        image: food_5,
        description: "Tasty mix of ingredients. A great way to get your day off to a good start",
        category: "Burritos"
    } 
    
]
