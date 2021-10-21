export interface IRarityType {
    headline: string;
    subline?: string;
    items: IRarityItem[]
}

export interface IRarityItem {
    label: string;
    chance?: number;
    amount?: number;
    infotext?: string;
    previewUrl: string;
    subtext?: string;
}
