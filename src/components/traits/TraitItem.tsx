import "./TraitItem.css";
import {ITraitItem} from "../../models/Trait.model";
import {RarityLabel} from "./RarityLabel";

export const TraitItem = ({
  fileName,
  label,
    rarity,
    withoutLabels
}: ITraitItem) => {


  return (
    <div className="trait-item-wrapper">

        <div className={"trait-item-image"}>

            <img src={fileName} alt="" className="img-fluid" />
        </div>
        <div className={"trait-item-label"}>
            {!withoutLabels && <>
                <RarityLabel rarity={rarity} /> {label}
            </>}



        </div>

    </div>
  );
};
