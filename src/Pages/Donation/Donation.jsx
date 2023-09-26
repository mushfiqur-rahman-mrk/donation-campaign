import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

 

const Donation = () => {
    const[donatinitem,setDonatinitem]=useState([]);
    const[nodata,setNodata]=useState()
    const [isclicked,setIsclicked]=useState(false)
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
        <div className="px-20">
 
                {nodata ? <p className="h-[70vh] w-full text-4xl text-green-600 flex justify-center items-center ">No Data Available</p>:<div>
                    <div className="container mx-auto grid grid-cols-2 gap-8 my-10">
                        {
                            isclicked ?  donatinitem.map(item=><DonationCard key={item.id} item={item}></DonationCard>)
                            :
                            donatinitem.slice(0,4).map(item=><DonationCard key={item.id} item={item}></DonationCard>)
                        }
                                            
                    </div>
                    
                </div>   }
 

                {
                    donatinitem.length>4 && <div>
                        {
                            isclicked ? ''
                            :
                            <button onClick={()=>setIsclicked(!isclicked)} className="bg-red-600 px-3 py-2 rounded-lg block mt-10 text-white mb-20 mx-auto">See more</button>
                            
                        }

                    </div>
 
                }
            
        </div>
    );
};

export default Donation;