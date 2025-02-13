

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Tailwind CSS Test
      </h1>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-gray-700 text-base mb-2">
          If you see a blue heading and this styled card, your Tailwind CSS configuration is likely working!
        </p>

        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Click Me!
        </button>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500">
          Using Tailwind v3
        </p>
      </div>
    </div>
  );
}

export default App;