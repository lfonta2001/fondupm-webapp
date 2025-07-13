import { useState, useEffect, useRef } from 'react';

export default function LoginRegister() {
    const [showPassword, setShowPassword] = useState(false);
    const [selected, setSelected] = useState('login');
    const [showing, setShowing] = useState('login');
    const [isTransitioning, setIsTransitioning] = useState(false);

    const LEmail = useRef(null);
    const REmail = useRef(null);
    const LPassword = useRef(null);
    const RPassword = useRef(null);
    const RName = useRef(null);

    const handleRegister = e => {
        e.preventDefault();
        const formData = {
            email: REmail.current?.value,
            password: RPassword.current?.value,
            userName: RName.current?.value,
        };

        console.log('register: ', JSON.stringify(formData));

        // fetch("http://localhost:3000/user/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log("Response:", result.message);
        // })
        //     .catch((err) => {
        //         console.error("Error:", err);
        // });
    };

    const handleLogin = e => {
        e.preventDefault();
        const formData = {
            email: LEmail.current?.value,
            password: LPassword.current?.value,
        };

        console.log('login: ', JSON.stringify(formData));

        // fetch("http://localhost:3000/user/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formData),
        //     })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         console.log("Response:", result.message);
        //     })
        //     .catch((err) => {
        //         console.error("Error:", err);
        //     });
    };

    function switchForm(target) {
        if (target === selected || isTransitioning) return;
        setIsTransitioning(true);
        setSelected(target);

        setTimeout(() => {
            setShowing(target);
            setIsTransitioning(false);
        }, 500);
    }

    // LOGIN FORM
    const loginForm = (
        <form className='w-4/5 h-full flex flex-col justify-center gap-6'>
            <div className='flex flex-col gap-1'>
                <label
                    htmlFor='email-login'
                    className='text-sm font-medium'>
                    Email
                </label>
                <input
                    ref={LEmail}
                    id='email-login'
                    type='email'
                    placeholder='email@email.com'
                    autoComplete='on'
                    className='border border-gray-300 rounded-md px-3 py-2'
                />
            </div>

            <div className='relative flex flex-col gap-1'>
                <label
                    htmlFor='password-login'
                    className='text-sm font-medium'>
                    Password
                </label>
                <input
                    id='password'
                    type={showPassword ? 'text' : 'password'}
                    ref={LPassword}
                    name='password'
                    placeholder='Super Secure Password'
                    className='w-full border border-gray-300 rounded-md px-3 py-2 pr-16'
                />
                {/* <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-2 top-9 text-sm text-blue-500'>
                    {showPassword ? 'Hide' : 'Show'}
                </button> */}
            </div>

            <a
                href='/support/forgot_password/forgot_password.html'
                className='text-sm text-blue-600 hover:underline'>
                Forgot Password?
            </a>

            <button
                onClick={handleLogin}
                className='bg-green-500 hover:bg-green-600 hover:scale-105 w-full rounded-lg text-white px-4 py-2 transition duration-200 ease-in-out'>
                Login
            </button>
        </form>
    );

    const registerForm = (
        <form className='w-4/5 h-full flex flex-col justify-center gap-6'>
            <input
                ref={REmail}
                type='email'
                name='email'
                placeholder='email@email.com'
                required
                autoComplete='on'
                className='border border-gray-300 rounded-md px-3 py-2'
            />

            <input
                ref={RName}
                type='text'
                name='userName'
                placeholder='Name'
                required
                autoComplete='on'
                className='border border-gray-300 rounded-md px-3 py-2'
            />

            <div className='relative'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    ref={RPassword}
                    name='password'
                    placeholder='Super Secure Password'
                    className='w-full border border-gray-300 rounded-md px-3 py-2 pr-16'
                />
                <button
                    type='button'
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute right-2 top-2 text-sm text-blue-500'>
                    {showPassword ? 'Hide' : 'Show'}
                </button>
            </div>

            <button
                onClick={handleRegister}
                className='bg-green-500 hover:bg-green-600 hover:scale-105 w-full rounded-lg text-white px-4 py-2 transition duration-200 ease-in-out'>
                Register
            </button>
        </form>
    );

    return (
        <section className='relative bg-white mx-auto my-10 rounded-xl shadow-lg w-96 h-[450px] overflow-hidden'>
            {/* Form switcher */}
            <div className='flex justify-between border-b px-6 py-3 bg-gray-100'>
                <button
                    onClick={() => switchForm('login')}
                    className='font-medium text-gray-700 hover:text-black'>
                    Login
                </button>
                <button
                    onClick={() => switchForm('register')}
                    className='font-medium text-gray-700 hover:text-black'>
                    Register
                </button>
            </div>

            {/* Form container */}
            <div className='relative w-full h-full px-6 py-4'>
                <div
                    className={`
                    absolute top-0 left-0 w-full h-full transition-opacity duration-500
                    ${
                        selected === 'login'
                            ? 'opacity-100 pointer-events-auto visible'
                            : 'opacity-0 pointer-events-none invisible'
                    }
                `}>
                    {loginForm}
                </div>
                <div
                    className={`
                    absolute top-0 left-0 w-full h-full transition-opacity duration-500
                    ${
                        selected === 'register'
                            ? 'opacity-100 pointer-events-auto visible'
                            : 'opacity-0 pointer-events-none invisible'
                    }
                `}>
                    {registerForm}
                </div>
            </div>
        </section>
    );
}
