import React, { useState } from "react";
import Card from "../Components/Card";

const Home = () => {
    const [Name, setName] = useState(" ");
		const [Email, setEmail] = useState("");
		const [Event, setEvent] = useState("");
		const [Type, setType] = useState("");
        const [Details, setDetails] = useState("");
		const [data, setData]= useState([]);
	
		// event handler
		const handleChangeInput = (e) => {
			if (e.target.name === "Name") {
				setName(e.target.value);
			}
	
			if (e.target.name === "Event") {
				setEvent(e.target.value);
			}
			if (e.target.name === "Email") {
				setEmail(e.target.value);
			}
	
			if (e.target.name === "Type") {
				setType(e.target.value);
			}

            if (e.target.name === "Details") {
				setDetails(e.target.value);
			}
		};
	
		const handleClickAdd = (e) => {
			e.preventDefault();
	
			const itemList = [
				...data,
				{
					Name,
					Email,
                    Event,
                    Type,
					Details,
				},
			];
	
			setData(itemList);
		};



    return (
     <div className="   gridgrid-cols-2 flex items-center justify-around min-h-screen">
        
         <div className="w-4/12 border border-gray-200 rounded p-10"> 
         <div className="mb-4">
         <h2 className="text-3xl text-center font-semibold font-ligth h-16">Add List</h2> 
         <label htmlFor="Name" className="block mb-1" > Full Name</label>
            <input type="text" 
               id="Name"
               onChange={handleChangeInput}
               name="Name"
            className="border border-gray-500 py-2 px-4 w-full"/>

         </div>
         <div className="mb-4"> 
         <label htmlFor="Email" className="block mb-1" > Email Address</label>
            <input type="email" 
                id="Email"
                onChange={handleChangeInput}
                name="Email"
            className="border border-gray-500 py-2 px-4 w-full"/>

         </div>
         <div className="mb-4"> 
         <label htmlFor="Event " className="block mb-1" > When is your event?</label>
            <input type="date" 
                id="Event"
                onChange={handleChangeInput}
                name="Event"
             className="border border-gray-500 py-2 px-4 w-full"/>
         </div>

         <div className="mb-4"> 
         <label  htmlFor="Type" className="block mb-1" > What type of event is it?</label>
            <input type="text" 
                 id="Type"
                 onChange={handleChangeInput}
                 name="Type"
            className="border border-gray-500 py-2 px-4 w-full"/>
         </div>

         <div className="mb-4"> 
         <label htmlFor="Details" className="block mb-1" > Additional details</label>
            <textarea type="text"
                 id="Details"
                 onChange={handleChangeInput}
                 name="Details"
            className="border border-gray-500 py-2 px-4 w-full"/>
         </div>

         <div className="mb-4"> 
            <input type="checkbox" className="border border-gray-500 py-2 px-2 w-2"/> Email me news and special offers
         </div>

         <button className="bg-blue-500 py-2 px-4 rounded text-white" onChange={handleClickAdd}> Login</button>
             </div>
            
             <div className="border p-8 bg-grey- 200 rounded">
						<h2 className="text-3xl text-center font-semibold h-16 font-ligth">Record</h2>
						<div className="space-y-4">
						     {data.map((dt) => {
								return <Card data={dt} />; })}
								</div>
                                </div>
         </div>
     
    );
}

export default Home;