// import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-400 rounded-full"></div>
            <span className="text-2xl font-bold text-white font-poppins">NoteAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
            <Link to="/auth/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link
              to="/auth/signup"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-white font-poppins leading-tight mb-6">
              Transform Your Notes with
              <span className="text-indigo-400"> AI Magic</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Experience the future of note-taking with AI-powered visualizations, smart organization,
              and dynamic content generation.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/auth/signup"
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
              >
                Start for Free
              </Link>
              <a
                href="#demo"
                className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Watch Demo
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80"
              alt="AI Note Taking"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white font-poppins mb-16">
            Powerful Features for Modern Note-Taking
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <Feature
              icon={<div className="w-8 h-8 bg-indigo-400 rounded-full"></div>}
              title="AI-Powered Insights"
              description="Transform your notes into visual representations with AI-generated flowcharts, mind maps, and diagrams."
            />
            <Feature
              icon={<div className="w-8 h-8 bg-indigo-400 rounded-full"></div>}
              title="Real-time Collaboration"
              description="Work together seamlessly with real-time editing and secure sharing features."
            />
            <Feature
              icon={<div className="w-8 h-8 bg-indigo-400 rounded-full"></div>}
              title="Smart History"
              description="Track changes and access previous versions of your notes with intelligent history management."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white font-poppins mb-16">
            Loved by Productive People
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
              name="Sarah Chen"
              role="Product Manager"
              quote="NoteAI has completely transformed how I organize my thoughts and present ideas to my team."
            />
            <Testimonial
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150"
              name="David Miller"
              role="Software Engineer"
              quote="The AI-powered visualizations have made it incredibly easy to document complex systems and workflows."
            />
            <Testimonial
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
              name="Emily Taylor"
              role="Content Creator"
              quote="As a content creator, NoteAI helps me organize my ideas and create content structures effortlessly."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

 function Feature({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-8 rounded-xl">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

 function Testimonial({ image, name, role, quote }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">"{quote}"</p>
    </div>
  );
}

export default LandingPage;