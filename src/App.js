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
      <TextBox description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
    </div>
  );
}