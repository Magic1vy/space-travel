import imageMoon from "../assets/destination/image-moon.webp";
import imageMars from "../assets/destination/image-mars.webp";
import imageEuropa from "../assets/destination/image-europa.webp";
import imageTitan from "../assets/destination/image-titan.webp";

const data = [
    {
        id:1,
        price: 10000,
        name: "MOON",
        image: imageMoon,
        description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 km",
        travelTime:"3 days",
        category: 'MOON'
    },
    {
        id:2,
        price: 25000,
        name: "MARS",
        image: imageMars,
        description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance:"225 MIL. km",
        travelTime:"9 months",
        category: 'MARS'
    },
    {
        id:3,
        price: 67000,
        name: "EUROPA",
        image: imageEuropa,
        description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance:"628 MIL. km",
        travelTime:"3 years ",
        category: 'EUROPA'
    },
    {
        id:4,
        price: 83000,
        name: "TITAN",
        image: imageTitan,
        description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance:"1.6 BIL. km",
        travelTime:"7 years",
        category: 'TITAN'
    },
]
export default data;