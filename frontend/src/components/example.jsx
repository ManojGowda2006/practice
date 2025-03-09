export default function LandingPage() {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center" style={{ background: "linear-gradient(to bottom, white, #94F3FE)" }}>
        <header className="absolute top-0 w-full flex justify-between items-center p-5">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="mr-2">🔧</span> serviceHub
          </h1>
          <nav className="space-x-6 text-sm">
            <a href="#" className="hover:underline">signup</a>
            <a href="#" className="hover:underline">login</a>
            <a href="#" className="hover:underline">register</a>
            <a href="#" className="hover:underline">profile</a>
          </nav>
        </header>
  
        <main className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold">Connect with trusted professionals<br />and get the services you need</h2>
          <p className="text-lg mt-2">Effortlessly and Securely!</p>
          <button className="mt-6 bg-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg">
            Get started
          </button>
        </main>
      </div>
    );
  }
  