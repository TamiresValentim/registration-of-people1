import React from "react";
import ReactDOM from "react-dom/client";//este client é para dá falso
import GlobalStyle from "./styles/globalStyle";
import Routes from "./routes"


const Root = ReactDOM.createRoot(document.getElementById ('root'));
Root.render(

   <React.StrictMode>
      <Routes/>
   <GlobalStyle />

   </React.StrictMode>
);
