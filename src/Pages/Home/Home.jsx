import { useLoaderData } from "react-router-dom";
import Allcards from "../../Components/Alldonationcards/Allcards";
import Banner from "../../Components/Header/Banner";
import {   useEffect, useState } from "react";
 

 

const Home = () => {
    const donationdata=useLoaderData([]);
    const [search,setSearch]=useState([])
    // const[]=useState([])
    // console.log(data);
    // const okitm=useContext(Searchitem)
    const[searchData,setSearchData]=useState('')
    console.log(searchData);
    const getdata=(data)=>{
        const searchdata=donationdata.filter(item=>item.category.toLowerCase() === data);
        setSearch(searchdata);
        setSearchData(data)
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
            

            <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-10 my-20 px-10">
                {
                    search.length>0 ? search.map(donation=> <Allcards key={donation.id} donation={donation}></Allcards>)
                :
                     
                <h1 className="w-full text-5xl text center text-red-600">No data available for</h1>
                }
            </div>
            
        </>
    );
};

export default Home;