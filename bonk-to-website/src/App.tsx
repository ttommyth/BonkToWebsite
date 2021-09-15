import React from 'react';
import logo from './logo.svg';
import Bonker from './assets/bonker.png';
import Bonkee from './assets/bonkee.png';
import BonkeePostBonk from './assets/bonkeePostbonk.png';
import BonkStick from './assets/bonkstick.png';
import './App.css';
import { Helmet } from "react-helmet";
import { relative } from 'path';
import { displayPartsToString } from 'typescript';

const App= ( )=> {
  const [bonk, setBonk] = React.useState(false);
  const [counter, setCounter] = React.useState(0);

  const doBonk = () => {
    setBonk(true);
    setCounter(prev => prev + 1);
  }
  const doUnbonk = () => {
    setBonk(false);
  }
  return (
    <div className="App">
      <div onMouseDown={doBonk} onMouseUp={doUnbonk} className={"disableSelection"}
      onDragStart={e=>e.preventDefault()}
        style={{ height: "100%", width: "100%", alignContent: "center", alignItems: "center" }}
      >
        <div className={"bonkerContainer"}>
      bonked: {counter}
          <img src={Bonker} alt="Bonker" className={"bonker"} />
          <div className={"bonkstick" + (bonk ? " bonked" : "")}>
            <img src={BonkStick} alt="BonkStick" />
            <div className={"bonkword" + (bonk ? " bonked" : "")}> BONK</div>
          </div>
          <div className={"gotoword" + (bonk ? " bonked" : "")}> Go to  horny jail</div>
        </div>
        <div className={"bonkeeContainer"}>
          <img src={Bonkee} alt="Bonkee" className={"bonkee" + (bonk ? " bonked" : "")} />
          <img src={BonkeePostBonk} alt="BonkeePostBonk" className={"postbondbonkee" + (bonk ? " bonked" : "")} />
        </div>
      </div>
      <div style={{backgroundColor:"#696969", width:"100%", height: "8%"}}>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8517193754882771"
     crossOrigin="anonymous"></script>
<ins className={"adsbygoogle"}
     style={{display:"block"}}
     data-ad-client="ca-pub-8517193754882771"
     data-ad-slot="5662747107"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
      </div>
    </div>
  );
}

export default App;
