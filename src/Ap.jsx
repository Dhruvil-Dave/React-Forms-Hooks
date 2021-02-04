import React, { useState } from "react";

const Ap = () =>{
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        phone: "",
        qua: "",
    });

const inputEvent = (event) => {
    //console.log(event.target.value);
    //console.log(event.target.value);
    
    const {value, name} = event.target;
    
    setFullName((preValue) =>{
        
        return {
            ...preValue,
            [name] : value,
        }
        /*if (name === "fname"){
            return{
                fname: value,
                lname: preValue.lname,
                email: preValue.email,
                phone: preValue.phone,
            };
        }else if(name === "lname"){
            return{
                fname: preValue.fname,
                lname: value,
                email: preValue.email,
                phone: preValue.phone,
            };
        }else if(name === "email"){
            return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: value,
                phone: preValue.phone,
            };
        }else if(name === "phone"){
            return{
                fname: preValue.fname,
                lname: preValue.lname,
                email: preValue.email,
                phone: value,
            };
        }*/
    });
};
    
const onSubmits = (event) =>{
    event.preventDefault();
    alert("Form Submitted Successfully");
};    
  
return(
    <>
        <div className="main_div">
        <form onSubmit={onSubmits}>
            <div>
                <h1>
                    Hello {fullName.fname}   {fullName.lname}
                </h1><br/>
                <p> {fullName.email} </p>
                <p> {fullName.phone} </p>
                <p> {fullName.qua} </p><br/>
                
                <input type="text" placeholder="Enter Your First Name" name="fname" onChange={inputEvent} value={fullName.fname} required/>
                <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={inputEvent} value={fullName.lname} required/>
                <input type="text" placeholder="Enter Your Email" name="email" onChange={inputEvent} value={fullName.email} required/>
                <input type="password" placeholder="Enter Your Password" name="password" onChange={inputEvent} value={fullName.password} required/>
                <input type="number" placeholder="Enter Your Phone Number" name="phone" onChange={inputEvent} value={fullName.phone} required/>
                <input type="text" placeholder="Enter Your Qualification" name="qua" onChange={inputEvent} value={fullName.qua} required/><br/>
                
                <button type="submit"> Submit Details </button>
            </div>
        </form>
        </div>
    </>
); 
}
export default Ap;