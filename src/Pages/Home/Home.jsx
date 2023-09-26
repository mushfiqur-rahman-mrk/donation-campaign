import { useLoaderData } from "react-router-dom";
import Allcards from "../../Components/Alldonationcards/Allcards";
import Banner from "../../Components/Header/Banner";
import { useContext, useEffect, useState } from "react";

 

const Home = () => {
    const donationdata=useLoaderData([]);
    const [search,setSearch]=useState([])
    // const[]=useState([])
    // console.log(data);
    // const okitm=useContext(Searchitem)

    const getdata=(data)=>{
        const searchdata=donationdata.filter(item=>item.category.toLowerCase() === data);
        setSearch(searchdata)
    }
    useEffect(()=>{
        fetch('/donation.json')
        .then(res=>res.json())
        .then(data => console.log(data))
        setSearch(donationdata);
    },[donationdata])
    console.log(search);
    return (
        <>
            <Banner onSubmit={getdata}></Banner>
            

            <div className="container mx-auto grid grid-cols-4 gap-10 my-20 px-10">
                {
                    search.length>0 ? search.map(donation=><Allcards key={donation.id} donation={donation}></Allcards>)
                :
                <h1>no match</h1>
                
                }
            </div>
            
        </>
    );
};

export default Home;