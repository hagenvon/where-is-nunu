export interface ITraitType {
    headline: string;
    subline?: string;
    folder: string;
    items: string[]
    withoutLabels?: boolean;
}

export interface ITraitItem {
    label: string;
    fileName: string;
    rarity: number;
    withoutLabels?: boolean
}


export interface IRarityLabel {
    rarity: number;
}

