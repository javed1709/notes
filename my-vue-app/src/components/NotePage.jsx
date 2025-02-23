import { useParams } from 'react-router-dom';

function NotePage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold font-poppins">NoteAI</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">{id ? `Edit Note ${id}` : 'Create New Note'}</h1>

        <div className="max-w-2xl space-y-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <textarea
              className="w-full h-64 bg-gray-700 text-white rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Start typing your note here..."
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
              Save Note
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NotePage;