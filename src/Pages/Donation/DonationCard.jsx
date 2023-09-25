import { Link } from "react-router-dom";

 
const DonationCard = ({item}) => {
    const {category,title,donation_amount,image,id}=item || {};

    console.log(item);

    return (
        <>
            <div className={`relative flex w-full max-w-[48rem] flex-row rounded-xl   bg-clip-border   shadow-md
            ${category == 'Food' && 'bg-red-400'}
            ${category == 'Health' && 'bg-green-400'}
            ${category == 'Education' && 'bg-blue-400'}
            ${category == 'Clothing' && 'bg-violet-400'}
            
            `}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                    alt="image"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <button className={`px-3 py-1 rounded-lg 
                     ${category == 'Food' && 'bg-red-600 text-red-900 font-bold'}
                     ${category == 'Health' && 'bg-green-600 text-green-900 font-bold'}
                     ${category == 'Education' && 'bg-blue-600 text-blue-900 font-bold'}
                     ${category == 'Clothing' && 'bg-violet-600 text-violet-900 font-bold'}
                    
                    
                    `}>{category}</button>
                    <h4 className={`mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased 
                    
                    `}>
                        {title}
                    </h4>
                    <p className={`mb-8 block font-sans text-base font-bold leading-relaxed text-gray-700 antialiased
                     ${category == 'Food' && 'text-red-700'}
                     ${category == 'Health' && 'text-green-700'}
                     ${category == 'Education' && 'text-blue-700'}
                     ${category == 'Clothing' && 'text-violet-700'}
                    
                    `}>
                     ${donation_amount}
                    </p>
                     
                    <Link to={`/detail/${id}`}>
                    <button
                        className={`px-3 py-1 rounded-lg text-white
                        ${category == 'Food' && 'bg-red-600'}
                        ${category == 'Health' && 'bg-green-600 '}
                        ${category == 'Education' && 'bg-blue-600 '}
                        ${category == 'Clothing' && 'bg-violet-600 '} `}
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