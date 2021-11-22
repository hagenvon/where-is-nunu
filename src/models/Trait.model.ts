export interface ITraitType {
    headline: string;
    subline?: string;
    folder: string;
    items: string[]
}

export interface ITraitItem {
    label: string;
    fileName: string;
    rarity: number;
}


export interface IRarityLabel {
    rarity: number;
}

