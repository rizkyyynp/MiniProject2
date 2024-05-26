import React, { useState, useEffect, useRef } from 'react';
import ImageBG from '../assets/bg.svg';
import Avatar from '../assets/avatar.svg';
import WaveImg from '../assets/wave.png';

const Register = () => {
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        const usernameInput = usernameRef.current;
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

        if (usernameInput && passwordInput) {
            usernameInput.addEventListener('focus', addFocusClass);
            usernameInput.addEventListener('blur', removeFocusClass);
            passwordInput.addEventListener('focus', addFocusClass);
            passwordInput.addEventListener('blur', removeFocusClass);
        }


        return () => {
            if (usernameInput && passwordInput) {
                usernameInput.removeEventListener('focus', addFocusClass);
                usernameInput.removeEventListener('blur', removeFocusClass);
                passwordInput.removeEventListener('focus', addFocusClass);
                passwordInput.removeEventListener('blur', removeFocusClass);
            }
        };
    }, []);

    return (
        <div>
            <img className="wave login1:hidden fixed bottom-0 -left-40 h-full -z-1" src={WaveImg} alt="Wave" />
            <div className="container login1:grid-cols-Customcol3 login3:gap-20 w-screen h-screen grid grid-cols-Customcol1 gap-28 py-0 px-8">
                <div className="img flex justify-end items-center">
                    <img src={ImageBG} className='login1:hidden login2:w-100 w-125' alt="Background" />
                </div>
                <div className="login-content login1:justify-center login1:-mt-52 flex justify-center items-center text-center">
                    <div className='login2:w-72.5 w-90'>
                        <div className='flex items-center justify-center'>
                            <img src={Avatar} className='h-25' alt="Avatar" />
                        </div>

                        <h2 className="title login2:text-4xl login2:my-4 login2:mx-0 my-3.75 mx-0 text-h2T uppercase text-5xl mb-5 font-bold">Register</h2>
                        <div className="input-div one before:right-1/2 after:left-1/2 mt-0 relative grid grid-cols-Customcol2 my-6.25 mx-0 py-1 px-0 border-b-2 border-secondary border-solid">
                            <div className="i text-secondary flex justify-center items-center">
                                <i className="fas fa-user transition-all duration-.3"></i>
                            </div>
                            <div className="div">
                                <h5 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-links text-lg transition-all duration-.3">Username</h5>
                                <input type="text" className="input absolute left-0 top-0 w-full h-full border-none outline-none bg-none py-.5 px-.7 text-xl text-inputs2" ref={usernameRef} />
                            </div>
                        </div>
                        <div className="input-div pass mb-1 before:right-1/2 after:left-1/2 relative grid grid-cols-Customcol2 my-6.25 mx-0 py-1 px-0 border-b-2 border-secondary border-solid">
                            <div className="i text-secondary flex justify-center items-center">
                                <i className="fas fa-lock transition-all duration-.3"></i>
                            </div>
                            <div className="div">
                                <h5 className="absolute left-2.5 top-1/2 -translate-y-1/2 text-links text-lg transition-all duration-.3">Password</h5>
                                <input type="password" className="input absolute left-0 top-0 w-full h-full border-none outline-none bg-none py-.5 px-.7 text-xl text-inputs2" ref={passwordRef} />
                            </div>
                        </div>
                        <a href="#" className='block text-right no-underline text-links text-base transition-all duration-.3 hover:text-primary'>Already have account?</a>
                        <input type="submit" className="block w-full h-12 rounded-3xl outline-none border-none bg-grad1 bg-200% text-white text-xl uppercase my-4 mx-0 cursor-pointer transition-all duration-.5 hover:bg-right" value="Login" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
