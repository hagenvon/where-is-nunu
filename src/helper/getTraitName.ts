const rarityDelimiter = "_"

export const cleanName = (_str: string) => {
    let nameWithoutExtension = _str.slice(0, -4);
    let nameWithoutWeight = nameWithoutExtension.split(rarityDelimiter).shift();
    return formatName(nameWithoutWeight || "");
};

export const formatName = (str: string)=> {
    return str.replace(/-/gi, " ").toLowerCase();
}


export const getRarity = (str: string): number => {
    let nameWithoutExtension = str.slice(0, -4);
    let rarityAsString = nameWithoutExtension.split(rarityDelimiter).pop();

    return Number(rarityAsString)
}
