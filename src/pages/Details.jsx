import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import '../css/details.css'

const Details = () => {
    const param = useParams();

    const [details, setDetails] = useState();
    console.log(param?.id);

    const navigate = useNavigate();

    const getDetails = () => {
        axios
            .get(`https://reqres.in/api/users/${param?.id}`)
            .then((res) => {
                console.log(res);
                const response = res.data.data;
                setDetails(response);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getDetails();
    }, [])

    return (
        <div className="bg-abstract h-screen">

            <Navbar />

            <div className="wrapper">
                <div className="user-card">
                    <div className="user-card-img">
                        <img src={details?.avatar} alt="profile Picture" className="rounded-full" />
                    </div>
                    <div className="user-card-info">
                        <h2 className="font-bold"><span>First name:</span> {details?.first_name}</h2>
                        <h2 className="font-bold"><span>Last name:</span> {details?.last_name}</h2>
                        <p className="font-bold"><span>Email:</span> {details?.email}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Details;