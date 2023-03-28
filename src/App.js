import "./index.css";
import { Header } from "./components/Header/Header.js";
import { Footer } from "./components/Footer/Footer.js";
import { Image_Gif } from "./components/Gif/Image_Gif.js";
import { TextBox } from "./components/Texto/TextBox.js";

export default function App() {
  return (
    <div>
      <Header title="Framework React"/>
      <Footer description="© 2023 Lucas Santana Rodrigues"/>
      <Image_Gif title="teste"/>
      <TextBox description="O React é uma biblioteca modular, o que significa que os componentes podem ser facilmente reutilizados e compartilhados entre diferentes partes da aplicação. Isso torna mais fácil manter e expandir uma aplicação à medida que ela cresce, e permite que equipes de desenvolvimento trabalhem de forma mais eficiente juntas. 
      
      React é um framework JavaScript, o que significa que ele é construído em cima da linguagem JavaScript e depende dela para funcionar. Isso significa que se você quiser usar o React para criar aplicativos, é fundamental que você entenda os conceitos básicos e as sintaxes do JavaScript.
      
      Além disso, o React é baseado em alguns conceitos avançados do JavaScript, como a manipulação de eventos, a criação de funções de callback e a manipulação do DOM (Document Object Model). Se você não entender esses conceitos, pode ser difícil acompanhar o código do React e usá-lo de forma eficiente.
      
      Portanto, se você está interessado em aprender React, é importante que você primeiro aprenda e compreenda os conceitos básicos do JavaScript. Isso lhe dará as bases para usar o React de forma eficiente e criar aplicativos incríveis."
    />
    </div>
  );
}