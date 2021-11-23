import {IRarityType} from "../models/Rarity.models";
import {THUGS_PER_MODEL} from "./__numbers";

export const charlieConfig: IRarityType = {
        headline: "",
        subline: "Charlie is an artist. He likes Bananas.",
        items: [
            {chance: 80, label: "Normal", previewUrl: "./assets/models/103.png" },
            {chance: 10, label: "Zombie", previewUrl: "./assets/models/221.png" },
            {chance: 10, label: "Alien", previewUrl: "./assets/models/193.png" }
        ]
    }

export const buboConfig: IRarityType = {
    headline: "",
    subline: "Bubo is an amazing developer. She likes Coconuts",
    items: [
        {chance: 80, label: "Normal", previewUrl: "./assets/models/102.png" },
        {chance: 10, label: "Zombie", previewUrl: "./assets/models/118.png" },
        {chance: 10, label: "Alien", previewUrl: "./assets/models/111.png" }
    ]
}

export const examplesConfig: IRarityType = {
    headline: "Examples",
    subline: "The common type comes with 7 different fur colors.",
    items: [
        {chance: -1, label: "", previewUrl: "./assets/types/137.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/151.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/162.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/249.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/257.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/258.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/287.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/296.png" },
        {chance: -1, label: "", previewUrl: "./assets/types/298.png" }
    ]
}


export const rarityConfig: IRarityType[] = [

    {
        headline: "Types",
        items: [
            {chance: 65, label: "Normal", previewUrl: "./assets/types/normal.jpg" },
            {chance: 10, label: "Alien", previewUrl: "./assets/types/alien.jpg" },
            {chance: 10, label: "Zombie", previewUrl: "./assets/types/zombie.jpg" },
            {chance: 15, label: "Spotted", previewUrl: "./assets/types/spotted.jpg" }
        ]
    },
    {
        headline: "Shades",
        items: [
            {chance: 70, label: "Normal", previewUrl: "./assets/shades/2 normal.jpg" },
            {chance: 10, label: "Red", previewUrl: "./assets/shades/3 red.jpg" },
            {chance: 10, label: "Gold", previewUrl: "./assets/shades/4 gold.jpg" },
            {chance: 10, label: "Tron", previewUrl: "./assets/shades/5 tron.jpg" }
        ]
    },
    {
        headline: "Chains",
        items: [
            {chance: 80, label: "None", previewUrl: "./assets/chains/none.jpg" },
            {chance: 10, label: "Silver", previewUrl: "./assets/chains/2 silver.jpg" },
            {chance: 10, label: "Gold", previewUrl: "./assets/chains/2 gold.jpg" },
        ]
    },
    {
        headline: "Ear-rings",
        items: [
            {chance: 80, label: "None", previewUrl: "./assets/ear-ring/none.jpg" },
            {chance: 10, label: "Silver", previewUrl: "./assets/ear-ring/3 silver.jpg" },
            {chance: 10, label: "Gold", previewUrl: "./assets/ear-ring/3 gold.jpg" },
        ]
    },
    {
        headline: "Smoking",
        items: [
            {chance: 80, label: "None", previewUrl: "./assets/smoking/none.jpg" },
            {chance: 10, label: "Spliff", previewUrl: "./assets/smoking/4 spliff.jpg" },
            {chance: 10, label: "Blunt", previewUrl: "./assets/smoking/4 blunt.jpg" },
        ]
    },
    {
        headline: "Tattoo",
        items: [
            {chance: 90, label: "None", previewUrl: "./assets/tattoo/none.jpg" },
            {chance: 10, label: "Teardrop", previewUrl: "./assets/tattoo/teardrop.jpg" },
        ]
    },
    {
        headline: "Head Accessoires",
        subline: "The probabilities vary slightly from model to model. Overall, there is a 33% chance that a thug has a head accessory.",
        items: [
            {chance: 4.2, label: "Beanie", previewUrl: "./assets/head-accessoires/beanie.jpg" },
            {chance: 4.2, label: "Heisenhat", previewUrl: "./assets/head-accessoires/heisenhat.jpg" },
            {chance: 4.2, label: "Doorag blue", previewUrl: "./assets/head-accessoires/doorag.jpg" },
            {chance: 4.2, label: "Doorag red", previewUrl: "./assets/head-accessoires/32.jpg" },
            {chance: 4.2, label: "Cap forward red", previewUrl: "./assets/head-accessoires/cap forward.jpg" },
            {chance: 4.2, label: "Cap forward blue", previewUrl: "./assets/head-accessoires/51.jpg" },
            {chance: 4.2, label: "Cap backward red", previewUrl: "./assets/head-accessoires/cap backward.jpg" },
            {chance: 4.2, label: "Cap backward blue", previewUrl: "./assets/head-accessoires/7.jpg" },
        ]
    },
    {
        headline: "Facial Expressions",
        items: [
            {chance: 33.333, label: "Ferrari", previewUrl: "./assets/facial-expression/expression.jpg" },
            {chance: 33.333, label: "Le Tigre", previewUrl: "./assets/facial-expression/expression.jpg" },
            {chance: 33.334, label: "Blue Steel", previewUrl: "./assets/facial-expression/expression.jpg" },
            {chance: 0, label: "Magnum", previewUrl: "./assets/facial-expression/magnum.jpg", subtext: "Probably way too early to even talk about" },
        ]
    },
    {
        headline: "Gang Roles",
        items: [
            {chance: 85, label: "Thugs", previewUrl: "" },
            {chance: 12, label: "Enforcer", previewUrl: "" },
            {chance: 3, label: "Underboss", previewUrl: "" },
            {amount: 1, label: "Boss", previewUrl: "" },
        ]
    }
];

export const favoriteRappers = [
    "nas", "jay-z", "tupac", "biggie", "outkast", "mobb deep", "wu-tang", "gang-star", "ditc"
];
