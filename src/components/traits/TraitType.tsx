import "./TraitType.css";
import React from "react";
import { TraitItem } from "./TraitItem";
import { Headline } from "../Headline";
import {SubHeadline} from "../SubHeadline";
import {ITraitType} from "../../models/Trait.model";
import {cleanName, getRarity} from "../../helper/getTraitName";

export const TraitType = (props: ITraitType) => {
  const { headline, items, subline, folder } = props;
  return (
    <div className="rarity-type-wrapper row">
      <div className="col-12">
        <Headline headline={headline} />
          {subline && <SubHeadline value={subline}/>}
      </div>
      {items.map((item, index) => {
        return (
          <div className={"col-1"} key={index}>
            <TraitItem
              label={cleanName(item)}
              fileName={`${folder}/${item}`}
              rarity={getRarity(item)}
            />
          </div>
        );
      })}
    </div>
  );
};
