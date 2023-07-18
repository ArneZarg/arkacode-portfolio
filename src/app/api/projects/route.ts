import { NextResponse } from "next/server";

export async function GET(request:Request){
    return NextResponse.json([
        {
            title:"310 Healthy Smoothie Recipes",
            description:"Browse smoothie recipes including more than a dozen flavors and smoothie types!",
            technologies:["React Native","Javascript","Liquid"],
            url:"https://apps.apple.com/us/app/healthy-smoothie-recipes/id1668899326?platform=iphone",
            github:"https://github.com/ArneZarg/healthy-recipe-smoothies",
            modalContent:{
                longDescription:"310 Healthy Smoothie Recipes was created in React Native and Javascript, and was designed for iOS and Android. The application takes recipe blog data from 310Nutrition.com and allows the user to filter recipes by flavor and type. The user may then store their favorites using ReactNative's AsyncStorage."
            },
        },
        {
            title:"Scrubs Data",
            description:"A medical license, insurance, and practitioner lookup tool built in React and .Net Core.",
            technologies:["React",".Net Core","SQL"],
            github:"https://github.com/ArneZarg/ScrubsData-dotNet",
            modalContent:{
                longDescription:"Scrubs Data was created for medical practitioners as well as patients. The main features included a medical license lookup tool to match doctors and patients based on insurance, a discussion forum, and a system admin panel. The project was written in SQL, .Net Core, and React.",
                github2:"https://github.com/ArneZarg/ScrubsDataReact"
            }
        },
        {
            title:"310 Nutrition",
            description:"310 Nutrition is an e-commerce store built in Shopify.",
            imageSrc:"/img/310nutritionportfolio.gif",
            technologies:["Liquid","Javascript","Shopify","jQuery"],
            url:"https://310nutrition.com/",
            modalContent:{
                longDescription:"310 Nutrition is an e-commerce store that sells hollistic health products. It was built using Shopify and Liquid as well as jQuery and Javascript. Its main features include a cart drawer, motivators, and a subscription program. 3rd party APIs include Recharge and Klaviyo."
            }
        },
        {
            title:"Kashmere Kollections",
            description:"At Kashmere, we believe that loving the skin you are in should be priority.",
            imageSrc:"/img/kkportfolio.gif",
            technologies:["Liquid","Javascript","Shopify"],
            url:"https://www.kashmerekollections.com/",
            modalContent:{
                longDescription:"Kashmere Kollections is an e-commerce store that sells skin-care products, accessories, and essential oils. It was built in Shopfiy and Liquid as well as jQuery and Javascript. Its main features include a cart drawer, motivators, and a subscription program. 3rd party APIs include Recharge and Klaviyo."
            }
        },
        {
            title:"HP EMT",
            description:"A directory for EMT courses in Southern California.",
            imageSrc:"/img/hpemt.gif",
            technologies:["Wordpress","PHP","Javascript"],
            url:"https://hpemt.org/",
            modalContent:{
                longDescription:"HP EMT is a website where aspiring EMT's can find courses in Southern California. The site was built in PHP and Wordpress. It's main feature is a course registration form using Enrollware API."
            }
        },
        {
            title:"San Marino Police Department Foundation",
            description:"An independent nonprofit organization providing support for efforts that enhance police relations with San Marino",
            imageSrc:"/img/sanMarino.gif",
            technologies:["Wordpress","PHP"],
            url:"https://sanmarinopolicefoundation.org/"
        },
        {
            title:"Oktoberfest Montrose",
            description:"Website for Montrose Oktoberfest",
            technologies:["Wordpress","PHP","CSS"],
            url:"https://oktoberfest.montrosechamber.org"
        },
        {
            title:"Reviewology.com",
            description:"Reviewology is a website with products review website.",
            technologies:["Wordpress","PHP","Javascript","SQL"],
            url:"https://reviewology.com/",
            modalContent:{
                longDescription:"Reviewolgy.com is a website built in Wordpress and PHP. The website includes reviews for products and ranked listings for each product category. The main feature is a custom-built user reviews option, similar to Amazon, where users are able to rate products between 1 and 5 stars. The reviews are stored in a SQL database and a PHP cron script calculates the average and total per review. Another notable feature is a custom script that allows the user to compare 2 products. The website was written in WordPress and PHP, while the reviews application was written in jQuery and PHP."
            }
        },
        {
            title:"310 Hydrate",
            description:"310 Hydrate is a publisher site for 310 Nutrition's Hydrate collection.",
            technologies:["Wordpress","PHP","Shopify","Javascript"],
            url:"https://310hydrate.com/",
            modalContent:{
                longDescription:"310 Hydrate is a smaller site built for 310 Nutrition's 'Hydrates' collection. The site is built in PHP and Wordpress. However, the cart-drawer checkout button redirects the user to the Shopify checkout. The Shopify product and variant ID's are stored in the WordPress admin."
            }
        },
        {
            title:"Dave Williamson Music",
            description:"Website for Juno Award winning guitarist Dave Williamson",
            technologies:["Wordpress","PHP"],
            url:"http://davewilliamsonmusic.ca/",
            github:"https://github.com/ArneZarg/dave-williamson-theme"
        },
    ])
}