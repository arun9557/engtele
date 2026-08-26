export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar (Basic) */}
      <nav className="w-full p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-extrabold text-blue-600">English with Marcus</div>
        <button className="hidden md:block font-semibold text-gray-600 hover:text-blue-600">
          Reviews
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full mb-6">
          ⭐ Trusted by 70+ Students
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Master Fluent English with <br className="hidden md:block" />
          <span className="text-blue-600">1-on-1 Telephone Lessons</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-10 max-w-2xl">
          Build your confidence, improve pronunciation, and speak naturally with personalized conversational practice.
        </p>
        
        <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
          Book a Trial Call Today
        </button>
        <p className="mt-4 text-sm text-gray-500">No credit card required for the trial.</p>
      </section>
    </main>
  );
}
