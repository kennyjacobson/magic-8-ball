// import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  //get query string variable showResult
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const showResult = urlParams.get('showResult');
  let imgSrc = "https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png";
  if (showResult === "true") {
    console.log("showResult is true");
    const randomNum = Math.floor(Math.random() * 12) + 1;
    imgSrc = `https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-${randomNum}.png`;
  }
  return (
    <div className="App">
      <Helmet>
      <meta property="fc:frame" content="vNext" />
                    <meta property="og:image" content={imgSrc}></meta>
                    <meta property="fc:frame:image" content={imgSrc}></meta>
                    <meta property="fc:frame:image:aspect_ratio" content="1:1"></meta>
                    <meta property="fc:frame:button:1" content="Shake Me!"></meta>
                    <meta property="fc:frame:post_url" content="https://bespoke-cajeta-fb55fd.netlify.app?showResult=true"></meta>
                    
                    
      </Helmet>
      <header className="App-header">
        <img src={"https://nfts-dataw.s3.amazonaws.com/magic-8-ball/magic-8-ball-title.png"} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
