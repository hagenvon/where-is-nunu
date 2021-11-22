import "./TraitItem.css";
import {ITraitItem} from "../../models/Trait.model";
import {RarityLabel} from "./RarityLabel";

export const TraitItem = ({
  fileName,
  label,
    rarity
}: ITraitItem) => {


    console.log("folder", fileName)
  return (
    <div className="trait-item-wrapper">

        <div className={"trait-item-image"}>

            <img src={fileName} alt="" className="img-fluid" />
        </div>
        <div className={"trait-item-label"}>            <RarityLabel rarity={rarity} /> {label}


        </div>

    </div>
  );
};
