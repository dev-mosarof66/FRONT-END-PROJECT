import MiniContainer from "../components/ForMiniScreen/MiniContainer.jsx";

function Home() {
  return (
    <div>
      {/* <p>This is a home comp.</p> */}
      {/* Mini Screen UI goes here => less than 768px */}
      <div>
        <MiniContainer />
      </div>
      {/* Large Screen UI goes here => greater than 768 px  */}

      <div></div>
    </div>
  );
}

export default Home;
