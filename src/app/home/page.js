
export default function Home() {
    return (
      <div>
      
        <div className="relative h-100 bg-black text-white flex items-center justify-center">
          <div className="absolute inset-0 bg-opacity-100"></div>
          <h1 className="text-4xl font-bold z-10">Welcome to My Website!</h1>
        </div>
  
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-gray-900">Your Journey Begins Here</h2>
          <p className="mt-4 text-gray-700">
            This is the home page of our website. Here, you  test
            ll find information about our company, our services,
            and how we aim to make a difference. We are committed to delivering quality products and services to 
            help you grow and succeed.
          </p>
  
          <div className="mt-8 text-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }
  