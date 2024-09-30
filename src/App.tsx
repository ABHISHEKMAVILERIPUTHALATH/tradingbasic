import Appbar from "./components/Appbar";
import StopPercentage from "./components/StopPercentage";
import "./General.css";
function App() {
  const sentence = "20/30/50 rule";
  return (
    <div className="special">
      <Appbar>Trading App</Appbar>
      <StopPercentage sentence={sentence} />
    </div>
  );
}

export default App;
