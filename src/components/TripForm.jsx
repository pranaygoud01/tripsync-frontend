import React, { useState } from "react";
import axios from "axios";
import { HiSparkles } from "react-icons/hi2";
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';
const TripForm = () => {
  const [formData, setFormData] = useState({
    destination: "",
    people: "",
    days: "",
    range: [],
    preferences: "",
  });

  const [tripPlan, setTripPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        range: checked ? [...prevData.range, value] : prevData.range.filter((r) => r !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTripPlan("");
  
    try {
      const response = await axios.post("https://tripsync-backend-yovp.onrender.com/generate", formData);
      let cleanedTripPlan = response.data.tripPlan
        .replace(/```html|```/g, "") // Remove triple backticks and 'html'
        .trim(); // Remove extra spaces
  
      setTripPlan(cleanedTripPlan);
    } catch (err) {
      setError("Failed to generate trip plan. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const sanitizedHTML = DOMPurify.sanitize(tripPlan);

  return (
    <div className="w-full h-full rounded-l-4xl text-white p-10 max-lg:px-5 max-lg:rounded-none bg-black">
      {tripPlan ? (
        <div>
          <h2 className="text-xl font-semibold bg-gradient-to-l from-indigo-500 via-red-500 to-blue-500 text-transparent bg-clip-text">Your AI-Generated Trip Plan</h2>
          <p className="mt-3">{parse(sanitizedHTML)}</p>
          <button
            onClick={() => setTripPlan("")}
            className="mt-5 bg-white text-black py-2 px-4 rounded-full font-semibold"
          >
            Generate Another Plan
          </button>
        </div>
      ) : (
        <>
          <HiSparkles className="text-2xl mb-1" />
          <h1 className="text-xl font-semibold">
            <span className="bg-gradient-to-r from-orange-500 via-indigo-500 to-green-500 text-transparent bg-clip-text">
              AI-Powered Trip Planner
            </span>{" "}
            - Requirement Form
          </h1>
          <p className="text-xs text-neutral-400 w-8/12 max-lg:w-full mt-2">
            Let our AI-powered trip planner create a perfect itinerary tailored to your preferences. Fill out the form below, and we will craft an unforgettable travel experience for you.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-10">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Destination:</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="bg-transparent border-b font-semibold text-md border-neutral-100 w-full py-2 px-0 outline-0"
                  placeholder="Enter your Destination"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Number of Travelers:</label>
                <input
                  type="number"
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="bg-transparent border-b font-semibold border-neutral-100 w-full py-2 px-0 outline-0"
                  placeholder="Enter number of Travellers"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold">Number of Days:</label>
                <input
                  type="number"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  className="bg-transparent border-b font-semibold border-neutral-100 w-full outline-0 py-2 px-0"
                  placeholder="Enter number of Days"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Trip Budget:</label>
                <div className="flex justify-between w-8/12 max-lg:w-full mt-2">
                  {["Budget", "Mid-range", "Luxury"].map((option) => (
                    <div key={option} className="flex gap-1 items-center">
                      <input
                        type="checkbox"
                        name="range"
                        value={option}
                        checked={formData.range.includes(option)}
                        onChange={handleChange}
                        className="w-5 h-5 cursor-pointer"
                      />
                      <label className="text-sm font-semibold">{option}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold">Any other Requirements</label>
                <textarea
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleChange}
                  className="border-b mt-2 h-[60px] p-2 px-0 outline-0 font-semibold"
                  placeholder="Enter any other requirements"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full max-lg:text-sm text-black bg-white font-semibold py-4"
                disabled={loading}
              >
                {loading ? "Generating..." : "Submit"}
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 mt-5">{error}</p>}
        </>
      )}
    </div>
  );
};

export default TripForm;
