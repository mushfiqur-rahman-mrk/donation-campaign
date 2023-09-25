 import swal from "sweetalert";

 
const DonationDetail = ({donationcard}) => {
    console.log(donationcard);
    const {category,title,donation_amount,details,image,id}=donationcard || {};

    const handleAddToFavourite=()=>{
        // console.log('btn clicked');
        const addedDonation=[];
        const donations=JSON.parse(localStorage.getItem('donation'))
        if(!donations){
            addedDonation.push(donationcard);
            localStorage.setItem('donation',JSON.stringify(addedDonation))
            swal("Good job!", "Thanks for your donation", "success");
        }
        else{
            const isExist= donations.find(item=>item.id === id)
            if(!isExist){
                addedDonation.push(...donations,donationcard)
            localStorage.setItem('donation',JSON.stringify(addedDonation))
            swal("Greate!", "Thanks for your donation", "success");
            }
            else{
                swal("error", "You already donated in this project", "error");
            }

            
        }
    }


    return (
        <>
            <div className="container mx-auto px-10 my-10">
                <div>
                    <div  className="relative">
                        {/* <img src="/./banner.png" alt="" /> */}
                        <img src={image} alt="" />
                    <div className="absolute bottom-0 h-20 w-full bg-[#00000052]">
                             
                        <button onClick={handleAddToFavourite} className={`px-4 py-2 rounded-md text-white font-semibold ml-4 mt-4
                                    ${category == 'Food' && 'bg-red-500'}
                                    ${category == 'Health' && 'bg-green-500'}
                                    ${category == 'Education' && 'bg-blue-500'}
                                    ${category == 'Clothing' && 'bg-violet-500'}`}>Donation ${donation_amount}</button>
                             
                        </div>
                    </div>
                    
                </div>  
                <div>
                    <h1 className="text-xl font-bold py-5">{title}</h1>    
                    <p>{details}</p>
                </div>  
            </div>         
        </>
    );
};

export default DonationDetail;
