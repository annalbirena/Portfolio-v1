import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from "./context/themeContext";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

//Fuente i18next: https://www.youtube.com/watch?v=C6PtKxW4rvk
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
        <I18nextProvider i18n={i18next} >
          <App />
        </I18nextProvider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);