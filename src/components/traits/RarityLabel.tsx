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
    if (rarity < 3) {
        return "legendary"
    }
    if (rarity > 5) {
        return "rare"
    }

    return "epic"
}

const getBackgroundColor = (rarity: number)=> {
    const rar = getRarityLabel(rarity);

    if (rar === "rare") {
        return "#3f82b7"
    }

    if (rar === "epic") {
        return "#8b3fb7"
    }

    return "#f36821"
}
