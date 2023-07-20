import { NextResponse } from "next/server";

export async function GET(request:Request){
    return NextResponse.json([
        {
            title:"Expertise in Front-End Development",
            description:"From crafting pixel-perfect HTML and CSS designs to implementing interactive features with React, Arne possesses a keen eye for detail and an unwavering commitment to delivering visually stunning websites.",
            imgUrl:"/img/react.png"
        },
        {
            title:"WordPress Mastery",
            description:"Whether you need a custom WordPress theme or plugin development, Arne’s deep understanding of the WordPress ecosystem empowers him to create scalable, secure, and feature-rich solutions tailored to your specific needs.",
            imgUrl:"/img/wordpress.png"
        },
        {
            title:"Versatility with Backend Technologies",
            description:"With solid skills in .NET Core and SQL, Arne can develop powerful backend systems and databases that fuel your website's functionality and ensure seamless performance.",
            imgUrl:"/img/dotNet.png"
        },
        {
            title:"Dynamic and Responsive Web Applications",
            description:"Leveraging his proficiency in PHP, Arne crafts dynamic web applications that engage users and deliver personalized experiences. He ensures your website adapts flawlessly to different devices and screen sizes, guaranteeing an exceptional user experience across platforms.",
            imgUrl:"/img/php.png"
        },
        {
            title:"Shopify Solutions",
            description:"Need an e-commerce store that stands out? Arne has a deep understanding of Shopify and can help you build a visually appealing and feature-rich online store that drives conversions and delights your customers.",
            imgUrl:"/img/shopify.png"
        }
    ])
}