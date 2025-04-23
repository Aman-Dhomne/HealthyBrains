import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Sparkles, Activity } from 'lucide-react'; // Removed PersonStanding
import Navbar from '../components/Navbar';
import HighLightText from '../components/HighLightText';
import image from '../assets/image.jpg'

function HealthyBrainsPage() {
  return (
    <div className="min-h-screen bg-[#fcefbe]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Understand and Manage Your <HighLightText text="Mental Health" />
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Take our comprehensive assessment to gauge your stress level and receive personalized recommendations for improving your mental wellbeing.
            </p>
            <Link 
              to="/visitor-info" 
              className="bg-[#daa75c] text-white px-8 py-4 rounded-md hover:bg-[#845022ad] inline-block transition-colors duration-300 text-lg font-medium"
            >
              Start Assessment
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src= {image}
              alt="Mental health illustration" 
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How <HighLightText text="Healthy Brains" /> Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#fcefbe] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#daa75c] rounded-full p-3 inline-block mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Assess Your Stress</h3>
              <p className="text-gray-700">
                Complete our carefully designed questionnaire to evaluate your current stress and mental wellbeing levels.
              </p>
            </div>
            
            <div className="bg-[#fcefbe] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#daa75c] rounded-full p-3 inline-block mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Insights</h3>
              <p className="text-gray-700">
                Receive a detailed analysis of your mental health status with clear visualizations of your assessment results.
              </p>
            </div>
            
            <div className="bg-[#fcefbe] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-[#daa75c] rounded-full p-3 inline-block mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Recommendations</h3>
              <p className="text-gray-700">
                Explore tailored suggestions for improving your mental wellbeing, including meditation, yoga, and professional resources.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why It Matters Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Mental Health <HighLightText text="Matters" />
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Mental health is just as important as physical health. In today's fast-paced world, stress and anxiety affect millions of people. By understanding and monitoring your mental wellbeing, you can take proactive steps to maintain balance and prevent more serious conditions from developing.
          </p>
          <Link 
            to="/visitor-info" 
            className="bg-[#daa75c] text-white px-8 py-4 rounded-md hover:bg-[#845022ad] inline-block transition-colors duration-300 text-lg font-medium"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#e8c185] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} Healthy Brains | Mental Wellbeing Assessment
          </p>
          <p className="text-sm text-gray-600 mt-2">
            This tool is for educational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HealthyBrainsPage;

