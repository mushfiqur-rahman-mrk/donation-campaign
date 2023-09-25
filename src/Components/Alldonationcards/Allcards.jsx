 
import { Link } from 'react-router-dom';

const Allcards = ({donation}) => {
    console.log(donation);
    const {id,category,title,image}=donation || {}

    return (
        <>
            <Link to={`/detail/${id}`} state={title}>
                <div className={`relative flex flex-col rounded-xl   bg-clip-border   shadow-md 
                ${category == 'Food' && 'bg-red-400'}
                ${category == 'Health' && 'bg-green-400'}
                ${category == 'Education' && 'bg-blue-400'}
                ${category == 'Clothing' && 'bg-violet-400'}
                
           `}>
                <div className="relative mx-3 mt-3  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <button className={`px-4 py-1 rounded-md 
                        ${category == 'Food' && 'bg-red-600 text-red-900 font-bold'}
                        ${category == 'Health' && 'bg-green-600 text-green-900 font-bold'}
                        ${category == 'Education' && 'bg-blue-600 text-blue-900 font-bold'}
                        ${category == 'Clothing' && 'bg-violet-600 text-violet-900 font-bold'}
                        
                        
                        `}>{category}</button>
                        {/* <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Apple AirPods
                        </p> */}
                        {/* <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            $95.00
                        </p> */}
                    </div>
                    <p className={`block font-sans text-sm font-bold leading-normal text-gray-700 antialiased opacity-75
                     ${category == 'Food' && 'text-red-700'}
                     ${category == 'Health' && 'text-green-700'}
                     ${category == 'Education' && 'text-blue-700'}
                     ${category == 'Clothing' && 'text-violet-700'}
                     
                     `}>
                     {title}
                    </p>
                </div>
                 
            </div>  
            </Link>
        </>
    );
};

export default Allcards;