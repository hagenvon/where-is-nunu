import "./App.css";
import { useMemo } from "react";

import Home from "./Home";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { createTheme, ThemeProvider } from "@material-ui/core";
import logo from "./images/logo2.jpg";
import twitter from "./images/twitter.svg";
import discord from "./images/discord.svg";
import twitterBlue from "./images/twitter-blue.svg";
import discordBlue from "./images/discord-blue.svg";
import charlie from "./images/charlie.jpg";
import bubo from "./images/bubo.jpg";
import roadmap from "./images/roadmap.jpg";
import reward from "./images/reward.jpg";
import breed from "./images/breed.jpg";
import separator from "./images/separator.jpg";
import rarity from "./images/rarity.gif";
import faqImg from "./images/faq.jpg";
import itb from "./images/itb.png";
import itb2 from "./images/itb2.png";
import itb3 from "./images/itb3.png";
import itb4 from "./images/itb4.png";
import itb5 from "./images/itb5.png";
import "./App.css";

import { RarityType } from "./components/rarity/RarityType";
import {favoriteRappers, charlieConfig, rarityConfig, buboConfig, examplesConfig} from "./config/_rarities";
import { Headline } from "./components/Headline";
import { SubHeadline } from "./components/SubHeadline";
import {Question} from "./components/Question";
import {faqs} from "./config/_faqs";
import {Answer} from "./components/Answer";
import {AMOUNT_MODELS, THUGS_PER_MODEL} from "./config/__numbers";
import {TraitType} from "./components/traits/TraitType";
import {traitsClothes} from "./config/_traitsClothes";
import {traitsHats} from "./config/_traitsHats";
import {traitsEyeWear, traitsMouthWear} from "./config/_traitsMouthWear";
import {traitsFaces} from "./config/_faces";


const treasury = new anchor.web3.PublicKey(
  process.env.REACT_APP_TREASURY_ADDRESS!
);

const config = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_CONFIG!
);

const candyMachineId = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const theme = createTheme({
    palette: {
        type: 'dark',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                justifyContent: 'flex-start',
            },
        },
        MuiButton: {
            root: {
                textTransform: undefined,
                padding: '12px 16px',
            },
            startIcon: {
                marginRight: 8,
            },
            endIcon: {
                marginLeft: 8,
            },
        },
    },
});

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
        getPhantomWallet(),
        getSlopeWallet(),
        getSolflareWallet(),
        getSolletWallet({ network }),
        getSolletExtensionWallet({ network })
    ],
    []
  );

  return (

      <div className="App">

          <div className={"header"}>
              <div className={"header-section"}>
                  {/*<img src={itb} alt="logo" width={60} />*/}
                  {/*<img src={itb2} alt="logo" width={60} />*/}
                  {/*<img src={itb3} alt="logo" width={60} />*/}
                  <img src={itb4} alt="logo" width={48} />
              </div>

              <div className={"header-section "}>An Infamous NFT Collection</div>
              <div className={"header-section"}>
                  <img src={itb5} alt="logo" width={48} />
              </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />

          {/*<ThemeProvider theme={theme}>*/}
          {/*    <ConnectionProvider endpoint={endpoint}>*/}
          {/*        <WalletProvider wallets={wallets} autoConnect={true}>*/}
          {/*            <WalletDialogProvider>*/}
          {/*                <Home*/}
          {/*                    candyMachineId={candyMachineId}*/}
          {/*                    config={config}*/}
          {/*                    connection={connection}*/}
          {/*                    startDate={startDateSeed}*/}
          {/*                    treasury={treasury}*/}
          {/*                    txTimeout={txTimeout}*/}
          {/*                />*/}
          {/*            </WalletDialogProvider>*/}
          {/*        </WalletProvider>*/}
          {/*    </ConnectionProvider>*/}
          {/*</ThemeProvider>*/}

          <div>Mint paused!</div>

          <div className="container">

              <div className={"row justify-content-center"}>
                  <div className={"col-md-8"}>
                      <div className={"interlude"}>

                          <div className={"interlude-headline"}>
                              Nunu has the ultimate idea for the best NFT collection in the world.
                          </div>
                          <div className={"interlude-section"}>
                              He found the one true utility that changes everything. THE missing piece. They're going to have to cancel the metaverse. Too bad Nunu disappeared. Without a trace.
                          </div>
                          <div className={"interlude-section"}>
                              In a radical move, Charlie and Bubo decide to launch themselves as a NFT collection to find Nunu.
                          </div>
                          <div className={"interlude-section"}>
                              "Let's ask Mr.Thuggles, maybe he knows something" suggests Bubo...
                          </div>
                          {/*<div className={"interlude-section"}>*/}
                          {/*    Join Charlie and Bubo on their quest to find Nunu. Stay curious and make $FRENS along the way.*/}
                          {/*</div>*/}

                      </div>
                  </div>
              </div>

              <div className={"row"}>
                  <div className={"col-12 mb-5"}>
                      <a href="https://twitter.com/where_is_nunu">
                          <img src={twitterBlue} className="App-section-header" alt="logo" width={80} />
                      </a>

                      <a href={"https://discord.gg/Hewj6Beatf"}>
                          <img src={discordBlue} className="App-section-header" alt="logo" width={80} />
                      </a>
                  </div>
              </div>

              <div className={"mt-2"}>
                  <img src={charlie} className="App-section-header" alt="logo" />

                  <RarityType
                      headline={charlieConfig.headline}
                      subline={charlieConfig.subline}
                      items={charlieConfig.items}
                      key={charlieConfig.headline}
                  />
              </div>

              <div>
                  <img src={bubo} className="App-section-header" alt="logo" />

                  <RarityType
                      headline={buboConfig.headline}
                      subline={buboConfig.subline}
                      items={buboConfig.items}
                      key={buboConfig.headline}
                  />
              </div>

              <RarityType
                  headline={examplesConfig.headline}
                  subline={examplesConfig.subline}
                  items={examplesConfig.items}
                  key={examplesConfig.headline}
              />

              <div>
              {/*<img src={roadmap} className="App-section-header mb-3" alt="logo" />*/}



            {/*  <div className={"headline"}>Phase 1 - Mint</div>*/}
            {/*  <p>Mint collection</p>*/}

            {/*  <div>*/}
            {/*      <img src={separator} className="App-section-header mb-4" alt="logo" />*/}
            {/*  </div>*/}


            {/*  <div className={"headline"}>Phase 2 - Reward</div>*/}
            {/*  <p>Reward holders with $FRENS</p>*/}
            {/*  <img src={reward} className="App-section-header" alt="logo" />*/}

            {/*<div>*/}
            {/*    <img src={separator} className="App-section-header mb-3" alt="logo" />*/}
            {/*</div>*/}


              {/*<div className={"headline"}>Phase 3 - Mr.Thuggles</div>*/}
              {/*<p>Release special "Mr.Thuggles" collection exclusively available for $FRENS</p>*/}
              {/*<img src={breed} className="App-section-header" alt="logo" />*/}

              {/*<div className={"headline"}>Phase 4 - Specials</div>*/}
              {/*<p className={"mb-5"}>Release more specials and/or collections exclusively available for $FRENS</p>*/}
              </div>

              <img src={rarity} className="App-section-header" alt="logo" />

              <div className={"section"}>
                  Over 120 unique traits. Some of them are a surprise.
              </div>

              <TraitType headline={"Head Accessoires"} folder={"./assets/traits/hats"} items={traitsHats} />

              <TraitType headline={"Clothes"} folder={"./assets/traits/clothes"} items={traitsClothes} />

              <TraitType headline={"Mouth & Eye Wear"} folder={"./assets/traits/mouth wear"} items={[...traitsMouthWear, ...traitsEyeWear]} />

              <TraitType headline={"Facial Expressions"} subline={"Randomly generated unique facial expressions (from at least 6 different mouthes and 12 eyes variations)"} folder={"./assets/facial-expression"} items={traitsFaces} withoutLabels={true} />


              {/*{rarityConfig.map(conf => {*/}
              {/*    return (*/}
              {/*        <RarityType*/}
              {/*            headline={conf.headline}*/}
              {/*            subline={conf.subline}*/}
              {/*            items={conf.items}*/}
              {/*            key={conf.headline}*/}
              {/*        />*/}
              {/*    );*/}
              {/*})}*/}

              {/*<div className={"section"}>*/}
              {/*    <Headline headline={"Favorite Rappers"} />*/}
              {/*    <SubHeadline value={"(All Rappers are equally rare)"} />*/}
              {/*    <div>{favoriteRappers.join(", ")} ...and snoop</div>*/}
              {/*</div>*/}

              {/*<img src={aboutImg} className="App-section-header" alt="logo" />*/}
              {/*<div>Birdz... that are thugs and infamous.</div>*/}

              <div className={"section mt-5"}>
                  <div><img src={faqImg} className="App-section-header" alt="logo" /></div>

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
                          <a href="https://twitter.com/where_is_nunu">
                              <img src={twitter} className="App-section-header" alt="logo" />
                          </a>

                          <a href={"https://discord.gg/Hewj6Beatf"}>
                              <img src={discord} className="App-section-header" alt="logo" />
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
};

export default App;
