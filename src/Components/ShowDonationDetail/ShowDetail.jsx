import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "./DonationDetail";

 

const ShowDetail = () => {
    const [donationcard,setDonationcard]=useState()
    const {id}=useParams();
    console.log(id);
    const alldata=useLoaderData()
    console.log(alldata);
    
    useEffect(()=>{
        
        if(alldata.length){
            const showDonationDetail= alldata.find(item=>item.id ==id)
        setDonationcard(showDonationDetail)
        }
    },[id,alldata])
    
    console.log(donationcard);
    return (
        <>
            <div>
                <DonationDetail donationcard={donationcard}></DonationDetail>
            </div>
             
        </>
    );
};

export default ShowDetail;