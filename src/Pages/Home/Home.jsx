import { useLoaderData } from "react-router-dom";
import Allcards from "../../Components/Alldonationcards/Allcards";
import Banner from "../../Components/Header/Banner";

 

const Home = () => {
    const donationdata=useLoaderData([])
    // console.log(data);

    return (
        <>
            <Banner></Banner>
            <div className="container mx-auto grid grid-cols-4 gap-10 my-20">
                {
                    donationdata?.map(donation=><Allcards key={donation.id} donation={donation}></Allcards>)
                }
            </div>
            
        </>
    );
};

export default Home;