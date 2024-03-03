import React, { useState, useEffect } from "react";
import ModalCard from "../components/modal-card";
import { FaMagnifyingGlass } from "react-icons/fa6";
import axios from "axios";

const Models = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modelsData, setModelsData] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get("https://nodejs-serverless-function-express-omega-sand.vercel.app/api/hello");
        const data = response.data;

        const filteredData = data.filter((model) => {
          const categoryMatch = model.category.toLowerCase().includes(searchQuery.toLowerCase());
          const titleMatch = model.title.toLowerCase().includes(searchQuery.toLowerCase());
          return categoryMatch || titleMatch;
        });

        const uniqueFilteredData = removeDuplicates(filteredData, 'id');
        setModelsData(uniqueFilteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); 
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const removeDuplicates = (arr, key) => {
    const seen = new Set();
    return arr.filter((obj) => {
      const val = obj[key];
      if (seen.has(val)) {
        return false;
      }
      seen.add(val);
      return true;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto mt-4 p-8">
        <section className="mb-8">
          <div className="mb-4">
            <form className="flex items-center max-w-sm mx-auto">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaMagnifyingGlass />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search by title or category..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex gap-[0.85rem] items-center flex-wrap justify-center md:justify-start">
            {modelsData.length === 0 ? (
              <p className="text-lg font-semibold">No models available.</p>
            ) : (
              modelsData.map((model) => (
                <ModalCard key={model.id} data={model} />
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Models;
