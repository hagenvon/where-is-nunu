import React from "react";
import logo from "./images/logo2.jpg";
import rarityImg from "./images/rarity.gif";
// import aboutImg from "./images/about.gif";
// import roadmapImg from "./images/roadmap.gif";
import twitter from "./images/twitter.svg";
import discord from "./images/discord.svg";
import modelsImg from "./images/models.gif";
import faqImg from "./images/faq.gif";
import thugMe from "./images/thug-me.png";
import "./App.css";

import { RarityType } from "./components/rarity/RarityType";
import {favoriteRappers, modelConfig, rarityConfig} from "./config/_rarities";
import { Headline } from "./components/Headline";
import { SubHeadline } from "./components/SubHeadline";
import {Question} from "./components/Question";
import {faqs} from "./config/_faqs";
import {Answer} from "./components/Answer";
import {AMOUNT_MODELS, THUGS_PER_MODEL} from "./config/__numbers";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="container">
        <div className={"section"}>
          A collection of {THUGS_PER_MODEL * AMOUNT_MODELS} uniquely generated, tough and infamous birdz,
          derived from the{" "}
          <a href={"https://www.thugbirdz.com"}>OG Thugbirdz collection.</a>
        </div>


        <img src={modelsImg} className="App-logo" alt="logo" />

        <RarityType
            headline={modelConfig.headline}
            subline={modelConfig.subline}
            items={modelConfig.items}
            key={modelConfig.headline}
        />

        <img src={rarityImg} className="App-logo" alt="logo" />

        {rarityConfig.map(conf => {
          return (
            <RarityType
              headline={conf.headline}
              subline={conf.subline}
              items={conf.items}
              key={conf.headline}
            />
          );
        })}

        <div className={"section"}>
          <Headline headline={"Favorite Rappers"} />
          <SubHeadline value={"(All Rappers are equally rare)"} />
          <div>{favoriteRappers.join(", ")} ...and snoop</div>
        </div>

        {/*<img src={aboutImg} className="App-logo" alt="logo" />*/}
        {/*<div>Birdz... that are thugs and infamous.</div>*/}

        <div className={"section"}>
            <div><img src={faqImg} className="App-logo" alt="logo" /></div>

          {faqs.map(({question, answer})=> {
            return <div key={question}>
              <Question value={question}></Question>
              <Answer value={answer}></Answer>
            </div>
          })}


        </div>
      </div>
      <div className={"footer"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className={"col-12"}>
              <a href="https://twitter.com/infamousBirdz">
                <img src={twitter} className="App-logo" alt="logo" />
              </a>

              <a href={"https://discord.gg/Kv4PTfq3ep"}>
                <img src={discord} className="App-logo" alt="logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
