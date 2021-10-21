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
import rarityImg from "./images/rarity.gif";
import twitter from "./images/twitter.svg";
import discord from "./images/discord.svg";
import modelsImg from "./images/models.gif";
import faqImg from "./images/faq.gif";
import "./App.css";

import { RarityType } from "./components/rarity/RarityType";
import {favoriteRappers, modelConfig, rarityConfig} from "./config/_rarities";
import { Headline } from "./components/Headline";
import { SubHeadline } from "./components/SubHeadline";
import {Question} from "./components/Question";
import {faqs} from "./config/_faqs";
import {Answer} from "./components/Answer";
import {AMOUNT_MODELS, THUGS_PER_MODEL} from "./config/__numbers";


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
          <header className="App-header">

              <img src={logo} className="App-logo" alt="logo" />
          </header>

          <ThemeProvider theme={theme}>
              <ConnectionProvider endpoint={endpoint}>
                  <WalletProvider wallets={wallets} autoConnect={true}>
                      <WalletDialogProvider>
                          <Home
                              candyMachineId={candyMachineId}
                              config={config}
                              connection={connection}
                              startDate={startDateSeed}
                              treasury={treasury}
                              txTimeout={txTimeout}
                          />
                      </WalletDialogProvider>
                  </WalletProvider>
              </ConnectionProvider>
          </ThemeProvider>

          <div className="container">
              <div className={"section"}>
                  A collection of {THUGS_PER_MODEL * AMOUNT_MODELS} uniquely generated, tough and infamous birdz,
                  derived from the{" "}
                  <a href={"https://www.thugbirdz.com"}>OG Thugbirdz collection.</a>
              </div>


              <img src={modelsImg} className="App-section-header" alt="logo" />

              <RarityType
                  headline={modelConfig.headline}
                  subline={modelConfig.subline}
                  items={modelConfig.items}
                  key={modelConfig.headline}
              />

              <img src={rarityImg} className="App-section-header" alt="logo" />

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
                          <a href="https://twitter.com/infamousBirdz">
                              <img src={twitter} className="App-section-header" alt="logo" />
                          </a>

                          <a href={"https://discord.gg/Kv4PTfq3ep"}>
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
