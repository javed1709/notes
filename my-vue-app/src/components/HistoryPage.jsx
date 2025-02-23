import { Link } from 'react-router-dom';

function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold font-poppins">NoteAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search history..."
                  className="pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                <span>Filter</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Note History</h1>

        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Example Note {i}</h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-400 mt-1">
                    <span>Last edited 2 hours ago</span>
                  </div>
                </div>
                <Link
                  to={`/note/${i}`}
                  className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View Note
                </Link>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="px-2 py-1 bg-gray-700 rounded">Content Updated</span>
                  <span>•</span>
                  <span>2 hours ago</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span className="px-2 py-1 bg-gray-700 rounded">AI Enhancement</span>
                  <span>•</span>
                  <span>3 hours ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HistoryPage;