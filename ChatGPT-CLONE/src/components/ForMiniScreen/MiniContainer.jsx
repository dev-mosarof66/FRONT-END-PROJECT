// import { useContext } from "react";
import Header from "../ForMiniScreen/Header/Header";
import Main from "../ForMiniScreen/Main/Main";
export default function MiniContainer() {
  console.log("mini-container");
  return (
    <div>
      {/* <p>This is mini container</p> */}
      <Header />
      <Main />
    </div>
  );
}
