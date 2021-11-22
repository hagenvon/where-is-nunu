import "./TraitItem.css";
import {IRarityLabel, ITraitItem} from "../../models/Trait.model";

export const RarityLabel = ({
    rarity
}: IRarityLabel) => {

  return (
      <span className="badge" style={{fontWeight: 500, backgroundColor: getBackgroundColor(rarity)}}>{getRarityLabel(rarity)}</span>
  );
};


const getRarityLabel = (rarity: number): string => {
    if (rarity < 4) {
        return "epic"
    }
    if (rarity > 7) {
        return "rare"
    }

    return "super rare"
}

const getBackgroundColor = (rarity: number)=> {
    const rar = getRarityLabel(rarity);

    if (rar === "rare") {
        return "#82beed"
    }

    if (rar === "super rare") {
        return "#3f82b7"
    }

    return "#274b70"
}
