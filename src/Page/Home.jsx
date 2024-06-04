import Card from '../Components/Card';

const Home = () => {
    let someObj = {
        Fname: "Shoaib",
        age: 25,
        email: "Shoaib@email.com"
    }
    let someArray = [1, 2, 3, 4]
    return (
        <>
            <div className=" flex flex-wrap m-4 container mx-auto">
                <Card name="Shoaib" age="5" email="Shoaib@email.com" />
                <Card someObjs={someObj} />
                <Card someArrays={someArray} />
                <Card name="Talha" btn="Click Me" />
            </div>
        </>
    );
};

export default Home;