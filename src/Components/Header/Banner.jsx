 

const Banner = () => {

    
    const handleSubmit=e=>{
        e.preventDefault();
        const searchValue=e.target.name.value;
        
    }
    return (
        <>
            {/* <div className="bg-[url('banner.png')] w-full h-[80vh] object-center object-cover">
                <div className="flex flex-col h-[80vh] justify-center items-center">
                    <h1 className="font-bold text-2xl">I Grow By Helping People In Need</h1>
                    <div>
                        <input placeholder="Search...." className="rounded mt-4 py-1 px-3" type="text" />
                        <button className="bg-red-600 py-1 rounded px-3 ml-2 text-white">Submit</button>
                    </div>
                </div>
            </div>    */}
            <div>
                <div className="relative w-full h-screen ">
                    
                    <img className=" absolute w-full object-cover" src="banner.png" alt="" />
                    <div className="absolute w-full  h-screen bg-white bg-opacity-90"></div>

                    <div className="relative flex flex-col h-[80vh] justify-center items-center">
                    <h1 className="font-bold text-2xl">I Grow By Helping People In Need</h1>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Search...." className="rounded mt-8 py-1 px-3" type="text" name="name" />
                        <input   className=" bg-red-600 py-1 rounded px-3 ml-2 text-white" type="Submit" value="Submit" />
                        <button className="bg-red-600 py-1 rounded px-3 ml-2 text-white">Submit</button>
                    </form>
                </div>
                </div>
            </div>
        </>
    );
};

export default Banner;