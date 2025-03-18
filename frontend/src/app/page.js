export default function Home() {
    const buttons = ["Login", "Register"]

    return (
        <div className="h-screen">
            <header className="w-full h-[7%] shadow-lg bg-gradient-to-tr text-white border-b-2 border-white from-amber-500 to-red-800">
                <div className="float-right flex flex-row text-3xl">
                    <button className="mx-10 mt-3 cursor-pointer shadow-lg hover:bg-amber-700 transition-all duration-100"><a href="/login">Login</a></button>
                    <button className="mx-10 mt-3 cursor-pointer shadow-lg hover:bg-amber-700 transition-all duration-100">Register</button>
                </div>
            </header>
            <main className="flex flex-col justify-center h-full bg-gradient-to-br from-amber-500 to-red-800">
                <h1 className="h-20 mx-[25%] text-5xl text-white font-bold border-4 text-center">Bugless Battles</h1>
                <div className="flex justify-center text-white text-3xl">
                    <button className="m-10 shadow-lg hover:bg-amber-700 transition-all duration-100"><a href="/code_editor">Get Started</a></button>
                </div>
            </main>
        </div>
    )
}