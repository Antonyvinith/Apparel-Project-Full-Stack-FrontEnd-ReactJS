import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Navebar from "../components/Navebar";
import { Box } from "@mui/material";
import { Button } from "react-bootstrap";
import "../Styling/SidebarStyle.css"

function LocationList() {

    const [locations,setLocations]=useState([]);
    const [first, setFirst] = useState(true);
    const [last, setLast] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const perPageData = 2;
  

    useEffect(()=>{
        loadCustomers();
        window.scrollTo(0, 0);
    },[currentPage]);

    const loadCustomers=async()=>{
        const token = localStorage.getItem('token'); 
        // const headers = {'Authorization': `Bearer ${token}`};
        const result =await axios.get(`http://localhost:9000/location/allLocations?page=${currentPage}&size=${perPageData}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type":"application/json"
              },
              withCredentials:true,
        });
        console.log(result.data);
        setLocations(result.data.content); 
        setFirst(result.data.first);
        setLast(result.data.last);
    }

    const handlePrev = () => {
        if(!first )
        {
         setCurrentPage(currentPage-1);
         window.scrollTo(0, 0);
        //  scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
      const handleNext = () => {
        if(!last)
        {
          setCurrentPage(currentPage+1);
          window.scrollTo(0, 0);
        //   scrollToRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
        }
      };


    return (<>
        <Navebar />
        <Box height={40} />
        <Box sx={{ display: "flex" }} className="pageBack">
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <div className='container'>
            <div className='py-'>
            <div><center><h1>Location List</h1></center></div>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th scope="col">Location Reference</th>
                            <th scope="col">Location Type</th>
                            <th scope="col">Location Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            locations.map((location, index)=>(
                                <tr key={location.id}>
                                    {/* <th scope="row">{index+1}</th> */}
                                    <td>{location.locationRef}</td>
                                    <td>{location.locationType}</td>
                                    <td>{location.locationName}</td>
                                </tr>
                            ))
                        }   
                    </tbody>
                </table>
                <div className="btn-group mb-2">
                    {
                        locations.length!==0?<div >
                            <Button onClick={handlePrev}>
                                Prev
                            </Button>
                            <Button onClick={handleNext}>
                                Next
                            </Button>
                        </div>:""
                    }
                </div>
            </div>
        </div>
        </Box>
        </Box>
    </>
    )
}

export default LocationList;