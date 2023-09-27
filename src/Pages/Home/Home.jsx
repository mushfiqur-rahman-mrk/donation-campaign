import { useLoaderData } from "react-router-dom";
import Allcards from "../../Components/Alldonationcards/Allcards";
import Banner from "../../Components/Header/Banner";
import { useEffect, useState } from "react";

const Home = () => {
  const donationdata = useLoaderData([]);
  const [search, setSearch] = useState([]);
  // const[]=useState([])
  // console.log(data);
  // const okitm=useContext(Searchitem)
  const [searchData, setSearchData] = useState("");
  console.log(searchData);
  const getdata = (data) => {
    const searchdata = donationdata.filter(
      (item) => item.category.toLowerCase() === data
    );
    setSearch(searchdata);
    setSearchData(data);
  };
  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
    setSearch(donationdata);
  }, [donationdata]);
  console.log(search);
  return (
    <>
      <Banner onSubmit={getdata}></Banner>

      <div>
        {search.length > 0 ? (
          <div className="container mx-auto grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-10 my-20 px-10">
            {search.map((donation) => (
              <Allcards key={donation.id} donation={donation}></Allcards>
            ))}{" "}
          </div>
        ) : (
          <div className="w-full text-3xl my-36 text-center text-red-600">
            <h1>No data matched for your search</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
