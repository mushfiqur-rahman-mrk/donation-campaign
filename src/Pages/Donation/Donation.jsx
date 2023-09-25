import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

 

const Donation = () => {
    const[donatinitem,setDonatinitem]=useState([]);
    const[nodata,setNodata]=useState()
    useEffect(()=>{
        // const favouriteItems=JSON.parse(localStorage.getItem('favourites'))
        const donationItems=JSON.parse(localStorage.getItem('donation'))
        if(donationItems){
            setDonatinitem(donationItems)
        }
        else{
            setNodata('No Data Available')
        }   
    },[])



    return (
        <>
            {/* {nodata ? <p className="flex justify-center items-center text-xl font-bold h-[60vh]">No Data available</p>: <div>
                <div className="grid grid-cols-2 gap-5">
                    {/* {
                        isshow ? filterItem.map(phone=><Detail key={phone.id} phone={phone}></Detail>)
                        :
                         
                        filterItem.slice(0,2).map(phone=><Detail key={phone.id} phone={phone}></Detail>)
                         
                    } */}
                    {/* {
                        filterItem.map(phone=><Detail key={phone.id} phone={phone}></Detail>)
                    } */}
                {/* </div> */}

                {nodata ? <p>No Data Available</p>:<div className="container mx-auto grid grid-cols-2 gap-8 my-10">
                    
                        {
                             donatinitem.map(item=><DonationCard key={item.id} item={item}></DonationCard>)
                        }                    
                    </div>}
            
        </>
    );
};

export default Donation;