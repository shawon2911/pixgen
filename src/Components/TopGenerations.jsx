import Photocard from "./Photocard";


const TopGenerations = async() => {
    const res = await fetch("https://pixgen-nu.vercel.app/data.json");
    const data = await res.json();
    // console.log(data);
    const topData = data.slice(0, 8);
    // console.log(topData);
    return (
        <div>
            <h1 className="text-2xl font-bold mt-10">Top Generations</h1>
            <div className="grid grid-cols-4 gap-10 mt-5">
                {
                    topData.map(photo => <Photocard 
                        key={photo.id}
                        photo = {photo}
                        ></Photocard>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;