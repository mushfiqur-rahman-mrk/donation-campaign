import { createContext, useState } from "react";

 

const Banner = (props) => {
    const searchfield=document.getElementById('search');
    const [search,setSearch]=useState()
    const Searchitem= createContext()
    

    const handlechange=e=>{
        e.preventDefault();
    }
    const handleSubmit=e=>{
        e.preventDefault();
        const searchValue=(e.target.name.value).toLowerCase();
        // console.log(searchValue);
        props.onSubmit(searchValue)
        setSearch(searchValue)
        searchfield.value=''
        
    }
    console.log(search);
    return (
        <>
            
            
                <div className="relative w-full h-[80vh]">
                    
                    <img className=" absolute w-full h-full object-cover" src="banner.png" alt="" />
                    <div className="absolute w-full h-[85vh] bg-white bg-opacity-90"></div>

                    <div className="relative flex flex-col h-[80vh] justify-center items-center">
                        <h1 className="font-bold text-5xl">I Grow By Helping People In Need</h1>
                         
                        <form onSubmit={handleSubmit}>
                            <input id="search" placeholder="Search...." onChange={handlechange} className="rounded outline-none focus:border focus:border-red-400 mt-8 py-3 px-5 border" type="text" name="name" />
                            <input   className=" bg-red-600 py-3 rounded px-3 ml-2 text-white" type="Submit" value="Search" />
                            {/* <button className="bg-red-600 py-1 rounded px-3 ml-2 text-white">Submit</button> */}
                        </form>
                        
                    </div>
                </div>
            
        </>
    );
};

export default Banner;