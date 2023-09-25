import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import ShowDetail from "../Components/ShowDonationDetail/ShowDetail";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";

 

const DonationRoute = createBrowserRouter([
    {
        path:"/",
        element: <Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('donation.json')
            },
            {
                path:"/donation",
                element:<Donation></Donation>,
                 
            },
            {
                path:'/statistics',
                element:<Statistics></Statistics>
            },
           
            {
                path:"/detail/:id",
                element: <ShowDetail></ShowDetail>,
                loader: ()=> fetch('donation.json')
            }
        ]
        
    }
])
    
 

export default DonationRoute;

 