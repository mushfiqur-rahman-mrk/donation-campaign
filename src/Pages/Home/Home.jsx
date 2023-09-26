import { useLoaderData } from "react-router-dom";
import Allcards from "../../Components/Alldonationcards/Allcards";
import Banner from "../../Components/Header/Banner";
import { useContext } from "react";

 

const Home = () => {
    const donationdata=useLoaderData([])
    // console.log(data);
    // const okitm=useContext(Searchitem)
    return (
        <>
            <Banner></Banner>
            <div className="container mx-auto grid grid-cols-4 gap-10 my-20 px-10">
                {
                    donationdata?.map(donation=><Allcards key={donation.id} donation={donation}></Allcards>)
                }
            </div>
            
        </>
    );
};

export default Home;