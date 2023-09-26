import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
        <>
            
            {/* <div className="h-screen w-screen bg-white flex items-center"> */}
                
                <div className="container w-screen h-screen flex flex-col md:flex-row items-center justify-center px-5 text-gray-700 my-12">
                    <div className="">
                        <img className="w-full object-cover" src="https://i.ibb.co/TKLftQz/error.jpg" alt="" />
                    </div>
                    <div className="mb-20">
                        <div className="text-6xl font-dark font-bold text-blue-700 pb-3">404</div>
                        <p  className="text-2xl md:text-3xl font-light leading-normal pb-2"
                        >Awwww... Don`t cry </p>
                        <p  className="text-2xl md:text-3xl font-light leading-normal"
                        >It`s just a 404 Error! </p>
                       
                    <p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
                    
                    <Link to={"/"}>
                    <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">back to homepage</button>
                    
                    </Link>
                </div>
                
                
            </div>
            {/* </div> */}
             
            
        </>
    );
};

export default ErrorPage;