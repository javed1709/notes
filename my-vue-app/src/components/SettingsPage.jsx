import { useState } from 'react';

function SettingsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Optionally, you can add logic to persist the dark mode setting, e.g., localStorage
    // localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'} text-white`}>
      {/* Header */}
      <header className={`bg-gray-800 border-b border-gray-700`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
            <span className="text-xl font-bold font-poppins">NoteAI</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>

        <div className="max-w-2xl space-y-8">
          {/* Appearance */}
          <section className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Appearance</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span>Dark Mode</span>
                </div>
                <button
                  className={`w-12 h-6 rounded-full relative ${isDarkMode ? 'bg-indigo-600' : 'bg-gray-600'}`}
                  onClick={toggleDarkMode}
                >
                  <span
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      isDarkMode ? 'right-1' : 'left-1'
                    }`}
                  ></span>
                </button>
              </div>
            </div>
          </section>

          {/* Notifications */}
          <section className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span>Email Notifications</span>
                </div>
                <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                  <span className="w-4 h-4 bg-white rounded-full absolute left-1 top-1"></span>
                </button>
              </div>
            </div>
          </section>

          {/* Account */}
          <section className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-6">Account</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span>Profile Information</span>
                </div>
                <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  Edit
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                  <span>Change Password</span>
                </div>
                <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  Update
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SettingsPage;