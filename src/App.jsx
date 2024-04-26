import BgChanger from "./Components/BgChanger";
import BgForBox from "./Components/BgForBox";
import Card from "./Components/Card";
import Counter from "./Components/Counter";

function App() {
  let someObj = {
    Fname: "Shoaib",
    age: 25,
    email: "Shoaib@email.com"
  }
  let someArray = [1, 2, 3, 4]
  return (
    <>
      {/* <Counter />
      <div className=" flex flex-wrap m-4 container mx-auto">
        <Card name="Shoaib" age="5" email="Shoaib@email.com" />
        <Card someObjs={someObj} />
        <Card someArrays={someArray} />
        <Card name="Talha" btn="Click Me" />
      </div> */}
      {/* <BgChanger /> */}
      <BgForBox />
    </>
  );
}

export default App;
