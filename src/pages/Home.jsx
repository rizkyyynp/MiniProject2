import { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);
    const [pagination, setPagination] = useState({
        currentPage: 1
    });

    const getUsers = () => {
        axios
            .get(`https://reqres.in/api/users?per_page=${pagination.per_page}&page=${pagination.currentPage}`)
            .then((res) => {
                console.log(res);
                const response = res.data.data;
                setUsers(response);

                const pagination = {
                    total: res.data.total,
                    per_page: res.data.per_page,
                    currentPage: res.data.page,
                    total_pages: res.data.total_pages,
                };
                setPagination(pagination);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getUsers();
    }, [pagination.currentPage]);

    const handleNext = () => {
        setPagination(() => ({
            ...pagination,
            currentPage: pagination.currentPage + 1,
        }));
    };

    const handlePrevious = () => {
        setPagination(() => ({
            ...pagination,
            currentPage: pagination.currentPage - 1,
        }));
    };

    return (
        <div className="bg-abstract min-h-screen">
            <Navbar />
            <div className="py-3.75 px-9% pb-25  home1:p-5">
                <h1 className="heading text-center pb-3.75 text-green2 text-5xl ml-12 md:ml-0 mb-10">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.75 ml-10 px-5 md:ml-0 md:px-0">
                    {users.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center shadow-bS2 rounded text-center py-7.5 px-5 hover:shadow-bS3 hover:scale-105">
                            <img src={item.avatar} alt="" className="h-20 w-20 rounded-full" />
                            <h3 className="text-2xl text-inputs py-2.5">{item.first_name} {item.last_name}</h3>
                            <p className="text-base leading-7">{item.email}</p>
                            <Link to={`/details/${item.id}`}><a  className="btn mt-2.5 inline-block bg-green2 text-white text-base  rounded py-2 px-6.25 hover:tracking-1px">Read more</a></Link>
                            
                        </div>
                    ))}
                </div>
                <div className="flex justify-between w-full mt-5">
                    <button disabled={pagination.currentPage === 1} onClick={handlePrevious} className="px-4 py-2 ml-12 md:ml-0 bg-green2 text-white rounded disabled:opacity-50 ">Previous</button>
                    <p className="text-green2 font-bold">{pagination.currentPage}</p>
                    <button disabled={pagination.currentPage === pagination.total_pages} onClick={handleNext} className="px-4 py-2 bg-green2 text-white rounded disabled:opacity-50">Next</button>
                </div>

            </div>
        </div>
    );
};

export default Home;
