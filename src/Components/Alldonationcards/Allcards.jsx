 
import { Link } from 'react-router-dom';

const Allcards = ({donation}) => {
    console.log(donation);
    const {id,category,title,image,category_bg,category_text,category_button}=donation || {}
    // console.log(typeof(color_for_category_bg));
    
    
    return (
        <>
            <Link to={`/detail/${id}`} state={title}>
                <div style={{backgroundColor:category_bg}} className={`relative flex flex-col rounded-xl bg-clip-border shadow-md `}> 
                 
                     
                <div className="relative mx-2 mt-2  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    className="h-[148px] w-full object-cover object-center"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <button style={{backgroundColor:category_button, color:category_text}} className={`px-4 py-1 rounded-md font-bold`}>{category}</button>
                        {/* <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            Apple AirPods
                        </p> */}
                        {/* <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            $95.00
                        </p> */}
                    </div>
                    <p style={{color:category_text}} className={`block font-sans text-sm font-bold leading-normal text-gray-700 antialiased opacity-7`}>
                     {title}
                    </p>
                </div>
                 
            </div>  
            </Link>
        </>
    );
};

export default Allcards;