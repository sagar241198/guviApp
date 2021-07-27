
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const SignUp = () => {


    const [userData, setData] = useState({ Fname: "",Lname:"", email: "", password: "",number:"" });
    const history = useHistory();
    let name;
    let value;
    function handleData(e) {
        name = e.target.name;
        value = e.target.value;
        setData({ ...userData, [name]: value });
    }
    function Submit(e) {
        e.preventDefault();
        const { Fname,Lname, email, password,number} = userData;
        axios.post("/user_signUp",{ Fname,Lname, email, password,number}).then(function(response){
            alert('you have resistered successfully');
            history.push('/');
        }).catch((err)=>{
            console.log(err)
        })
    }



    return (
        <div className="container-fluid bg-light py-5 ">
            <div className="container d-flex flex-wrap justify-content-space-around">
                <div className="imagebox ml-5">
                    <img src="./Image/signup.jpg" style={{width:"25rem",height:"25rem"}}  alt="" />
                </div>
                <div className="form">

                <img src="./Image/Logo.png" alt="" />
                <form className="my-3">
                    <div class="form-group">
                        <label for="name">First Name</label>
                        <input type="text" class="form-control" id="fname" placeholder="first name"
                            name="Fname"
                            value={userData.Fname}
                            onChange={handleData}
                        />
                        <small id="emailHelp" class="form-text text-success">this name will show on your certificate*</small>
                    </div>
                    <div class="form-group">
                        <label for="name">Last Name</label>
                        <input type="text" class="form-control" id="lname" placeholder=" last name"
                            name="Lname"
                            value={userData.Lname}
                            onChange={handleData}
                        />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
                            name="email"
                            value={userData.email}
                            onChange={handleData}
                        />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password"
                            name="password"
                            value={userData.password}
                            onChange={handleData}
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contact Number</label>
                        <input type="number" class="form-control" id="number" placeholder=" contact number"
                            name="number"
                            value={userData.number}
                            onChange={handleData}
                        />
                    </div>
                    <button type="submit" class="btn btn-success my-2" onClick={Submit}>Sign-up</button>
                </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp;