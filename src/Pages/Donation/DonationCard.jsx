import { Link } from "react-router-dom";

 
const DonationCard = ({item}) => {
    const {category,title,donation_amount,image,id,category_bg,category_text,category_button}=item || {};

    console.log(item);

    return (
        <>
            <div style={{backgroundColor:category_bg}} className={`relative flex w-full max-w-[48rem] md:flex-row flex-col rounded-xl   bg-clip-border   shadow-md`}>
                <div className="relativer m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <button style={{backgroundColor:category_button, color:category_text}} className={`px-3 py-1 font-semibold rounded-lg `}>{category}</button>
                    <h4 className={`mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased 
                    
                    `}>
                        {title}
                    </h4>
                    <p style={{color:category_text}} className={`mb-8 block font-sans text-base font-bold leading-relaxed text-gray-700 antialiased`}>
                     ${donation_amount}
                    </p>
                     
                    <Link to={`/detail/${id}`}>
                    <button style={{backgroundColor:category_text}}
                        className={`px-3 py-1 rounded-lg text-white font-semibold`}
                        type="button"
                    >
                        View Detail
                         
                    </button>
                    
                    </Link>
                     
                </div>
            </div>
            
        </>
    );
};

export default DonationCard;