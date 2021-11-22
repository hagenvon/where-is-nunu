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
import charlie from "./images/charlie.jpg";
import bubo from "./images/bubo.jpg";
import roadmap from "./images/roadmap.jpg";
import reward from "./images/reward.jpg";
import breed from "./images/breed.jpg";
import separator from "./images/separator.jpg";
import rarity from "./images/rarity.gif";
import faqImg from "./images/faq.jpg";
import "./App.css";

import { RarityType } from "./components/rarity/RarityType";
import {favoriteRappers, charlieConfig, rarityConfig, buboConfig} from "./config/_rarities";
import { Headline } from "./components/Headline";
import { SubHeadline } from "./components/SubHeadline";
import {Question} from "./components/Question";
import {faqs} from "./config/_faqs";
import {Answer} from "./components/Answer";
import {AMOUNT_MODELS, THUGS_PER_MODEL} from "./config/__numbers";
import {TraitType} from "./components/traits/TraitType";
import {traitsClothes} from "./config/_traitsClothes";
import {traitsHats} from "./config/_traitsHats";


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

          <div className="container">

              <div className={"row justify-content-center"}>
                  <div className={"col-md-8"}>
                      <div className={"interlude"}>

                          <div className={"interlude-headline"}>
                              Nunu has the ultimate idea for the best NFT collection in the world.
                          </div>
                          <div className={"interlude-section"}>
                              He found the one true utility that changes everything. The missing piece. "They're going to have to cancel the metaverse. We are going to the mooooon!" were the last words, before Nunu disappeared.
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

              <div>
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


              <div>
              <img src={roadmap} className="App-section-header mb-3" alt="logo" />



              <div className={"headline"}>Phase 1 - Mint</div>
              <p>Mint collection</p>

              <div>
                  <img src={separator} className="App-section-header mb-4" alt="logo" />
              </div>


              <div className={"headline"}>Phase 2 - Reward</div>
              <p>Reward holders with $FRENS</p>
              <img src={reward} className="App-section-header" alt="logo" />

            <div>
                <img src={separator} className="App-section-header mb-3" alt="logo" />
            </div>


              <div className={"headline"}>Phase 3 - Breed</div>
              <p>Release special collections exclusively available for $FRENS</p>
              <img src={breed} className="App-section-header" alt="logo" />


              </div>

              <img src={rarity} className="App-section-header" alt="logo" />

              <TraitType headline={"Head Accessoires"} folder={"./assets/traits/hats"} items={traitsHats} />

              <TraitType headline={"Clothes"} folder={"./assets/traits/clothes"} items={traitsClothes} />

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

              <div className={"section"}>
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
