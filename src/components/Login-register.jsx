import { useState, /*useEffect*/ } from "react";

export default function LoginRegister() {
    const [showPassword, setShowPassword] = useState(false);
    const [selected, setSelected] = useState("login");
    const [showing, setShowing] = useState("login");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
    
        fetch("http://localhost:3000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("Response:", result.message);
            })
            .catch((err) => {
                console.error("Error:", err);
            });
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
        <form name="login" className="w-full h-full flex flex-col justify-center items-center">
            <label htmlFor="email-login">Email</label>
            <input id="email-login" type="email" name="email" placeholder="email@email.com" autoComplete="on"/>
            <input type="password" name="password" placeholder="Super Secure Password"/>
            <div className="flex justify-between items-center">
                <div className=" space-x-1">
                    <input type="checkbox" id="remember-me"/>   
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <a href="/support/forgot_password">Forgot Password?</a>
            </div>
        </form>
    )

    // REGISTER FORM
    const registerForm = (
        <form onSubmit={handleRegister} name="register">
            <input type="text" name="userName" placeholder="Name" required autoComplete="on"/>
            <input type="email" name="email" placeholder="email@email.com" required autoComplete="on"/>
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Super Secure Password"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-0"
                >
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer" >Register</button>
        </form>
    )


    return (
        <section className="relative bg-gray-200 mx-auto my-30 rounded-lg drop-shadow-lg w-96 h-[400px] overflow-hidden">
            <div className="flex justify-between px-3">
                <button onClick={() => switchForm("login")} className="cursor-pointer">Login</button>
                <button onClick={() => switchForm("register")} className="cursor-pointer">Register</button>
            </div>
            <div className="relative w-full h-full">
                <div className={`
                    absolute top-0 left-0 w-full h-full transition-opacity duration-500
                    ${selected === "login" ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}
                `}>
                    {loginForm}
                </div>
                <div className={`
                    absolute top-0 left-0 w-full h-full transition-opacity duration-500
                    ${selected === "register" ? "opacity-100 pointer-events-auto visible" : "opacity-0 pointer-events-none invisible"}
                `}>
                    {registerForm}
                </div>
            </div>
        </section>
    );
}