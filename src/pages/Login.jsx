import React, { useState, useEffect, useRef } from 'react';
import ImageBG from '../assets/bg.svg';
import Avatar from '../assets/avatar.svg';
import WaveImg from '../assets/wave.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Login = () => {
    // Animation
    const [EmailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // Login
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState(null);
    const [errorLogin, setErrorLogin] = useState("");

    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        console.log(event);
        setEmail(event.target.value);
    }

    const handleChangePassword = (event) => {
        console.log(event);
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        const payload = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post("https://reqres.in/api/login", payload);
            const token = response.data.token;
            setToken(token);
            localStorage.setItem("access_token", token);

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                iconColor: 'white',
                customClass: {
                    popup: 'colored-toast',
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            })

            Toast.fire({
                icon: 'success',
                title: 'Login Berhasil',
            });

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch (error) {
            setErrorLogin(error.response.data.error);
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                iconColor: 'white',
                customClass: {
                    popup: 'colored-toast',
                },
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            })
            Toast.fire({
                icon: 'error',
                title: error.response.data.error,
            });
        }
    }



    useEffect(() => {
        const emailInput = emailRef.current;
        const passwordInput = passwordRef.current;

        const addFocusClass = (event) => {
            const parent = event.target.parentNode.parentNode;
            parent.classList.add('focus');
        };

        const removeFocusClass = (event) => {
            const parent = event.target.parentNode.parentNode;
            if (event.target.value === "") {
                parent.classList.remove('focus');
            }
        };

        if (emailInput && passwordInput) {
            emailInput.addEventListener('focus', addFocusClass);
            emailInput.addEventListener('blur', removeFocusClass);
            passwordInput.addEventListener('focus', addFocusClass);
            passwordInput.addEventListener('blur', removeFocusClass);
        }


        return () => {
            if (emailInput && passwordInput) {
                emailInput.removeEventListener('focus', addFocusClass);
                emailInput.removeEventListener('blur', removeFocusClass);
                passwordInput.removeEventListener('focus', addFocusClass);
                passwordInput.removeEventListener('blur', removeFocusClass);
            }
        };
    }, []);

    return (
        <div>
            <img className="wave login1:hidden fixed bottom-0 -left-40 h-full -z-1" src={WaveImg} alt="Wave" />
            <div className="container login1:grid-cols-Customcol3 login3:gap-20 w-screen h-screen grid grid-cols-Customcol1 gap-28 py-0 px-8">
                <div className="img flex justify-end items-center ">
                    <img src={ImageBG} className='login1:hidden login2:w-100 w-125' alt="Background" />
                </div>
                <div className="login-content login1:justify-center login1:-mt-52 flex justify-center items-center text-center">

                    <div className='login2:w-72.5 w-90'>
                        <div className='flex items-center justify-center'>
                            <img src={Avatar} className='h-25' alt="Avatar" />
                        </div>
                        <h2 className="title login2:text-4xl login2:my-4 login2:mx-0 my-3.75 mx-0 text-h2T uppercase text-5xl mb-5 font-bold">Login</h2>
                        <div className="input-div one before:right-1/2 after:left-1/2 mt-0 relative grid grid-cols-Customcol2 my-6.25 mx-0 py-1 px-0 border-b-2 border-secondary border-solid">
                            <div className="i text-secondary flex justify-center items-center">
                                <i className="fas fa-user transition-all duration-.3"></i>
                            </div>
                            <div className="div">
                                <h5 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-primary text-lg transition-all duration-.3 ">Email</h5>
                                <input type="text" placeholder='Email' className="input absolute left-0 top-0 w-full h-full border-none outline-none bg-none py-.5 px-.7 text-xl text-inputs2" ref={emailRef} onChange={handleChangeEmail} />
                            </div>
                        </div>
                        <div className="input-div pass mb-1 before:right-1/2 after:left-1/2 relative grid grid-cols-Customcol2 my-6.25 mx-0 py-1 px-0 border-b-2 border-secondary border-solid">
                            <div className="i text-secondary flex justify-center items-center">
                                <i className="fas fa-lock transition-all duration-.3"></i>
                            </div>
                            <div className="div">
                                <h5 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-primary text-lg transition-all duration-.3 ">Password</h5>
                                <input type="password" placeholder='Password' className="input absolute left-0 top-0 w-full h-full border-none outline-none bg-none py-.5 px-.7 text-xl text-inputs2" ref={passwordRef} onChange={handleChangePassword} />
                            </div>
                        </div>
                        <Link to="/register"><a href="#" className='block text-right no-underline text-links text-base transition-all duration-.3 hover:text-primary'>Don't have an account?</a></Link>

                        <input type="submit" className="block w-full h-12 rounded-3xl outline-none border-none bg-grad1 bg-200% text-white text-xl uppercase my-4 mx-0 cursor-pointer transition-all duration-.5 hover:bg-right" value="Login" onClick={handleLogin} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
