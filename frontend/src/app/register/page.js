export default function Login() {

    return (
        <div className="bg-gradient-to-br from-amber-500 to-red-800 h-screen flex justify-center align-center">
            <div className="bg-white mt-18 size-180 shadow-2xl flex flex-col text-center">
                <h1 className="text-4xl my-25">Register</h1>
                <label>Username</label>
                <input type="text" className="border-2 mx-[25%] mb-10" />
                <label>Password</label>
                <input type="password" className="border-2 mx-[25%]" />
                <div className="flex flex-col">
                    <button className="bg-green-500 mx-[25%] mt-5 border-1 shadow-md hover:bg-green-700 transition-all duration-100 cursor-pointer">Register</button>
                    <a className="mt-5 mx-[30%] text-blue-500 cursor-pointer" href="/login">Already have an account? Log in here</a>
                </div>
            </div>
        </div>   
    )
}