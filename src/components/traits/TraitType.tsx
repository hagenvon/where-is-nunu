import "./TraitType.css";
import React from "react";
import { TraitItem } from "./TraitItem";
import { Headline } from "../Headline";
import {SubHeadline} from "../SubHeadline";
import {ITraitType} from "../../models/Trait.model";
import {cleanName, getRarity} from "../../helper/getTraitName";

export const TraitType = (props: ITraitType) => {
  const { headline, items, subline, folder, withoutLabels } = props;
  return (
    <div className="trait-type-wrapper row">
      <div className="col-12">
        <Headline headline={headline} />
          {subline && <SubHeadline value={subline}/>}
      </div>
      {items.map((item, index) => {
        return (
          <div className={"col-lg-1 col-4 col-sm-3"} key={index}>
            <TraitItem
              label={cleanName(item)}
              fileName={`${folder}/${item}`}
              rarity={getRarity(item)}
              withoutLabels={withoutLabels}
            />
          </div>
        );
      })}
    </div>
  );
};
