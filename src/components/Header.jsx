export default function Header() {
    return (
        <header className='fixed top-0 w-full bg-green-300 flex justify-between  px-6 py-3'>
            <h1>My Application</h1>
            <nav className='flex gap-4'>
                <a href='/'>Help</a>
                <a href='/'>Documentation</a>
                <a href='/'>Smth else</a>
            </nav>
        </header>
    );
}
