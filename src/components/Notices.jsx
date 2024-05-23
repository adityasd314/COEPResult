"use client";
import React, { useState, useEffect, useRef } from "react";
import { Spinner } from "@/components/Spinner";
import "./Notices.css";
const BASE_URL = "https://www.coep.org.in";

const Notices = () => {
  const [originalData, setOriginalData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentSearchResults, setCurrentSearchResults] = useState([]);
  const [currentFilteredResults, setCurrentFilteredResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchInput = useRef(null);
  const dateInput = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        ("use server");
        const response = await fetch("/api/notices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pages: 5 }),
        });
        const j = await response.json();
        let d = j.result;
        console.log(typeof d);
        d = Object.values(d).flat();
        const data = d.filter((item) => item.date.length === 10);
        setOriginalData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const search = (query) => {
    const results = [];
    const regex = new RegExp(query, "i");
    originalData.forEach((item) => {
      if (
        regex.test(item.date) ||
        regex.test(item.title) ||
        (item.link && regex.test(item.link.replace("/content/", "")))
      ) {
        results.push({ ...item, link: `${item.link}` });
      }
    });
    return results;
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value.trim();
    if (query === "") {
      setCurrentSearchResults([]);
      setCurrentPage(1);
    } else {
      setCurrentSearchResults(search(query));
      setCurrentPage(1);
    }
  };

  const searchByDate = () => {
    const dateInput = document.getElementById("dateInput").value.trim();
    if (dateInput === "") {
      setCurrentSearchResults([]);
      setCurrentPage(1);
      setCurrentFilteredResults([]);
      return;
    }

    

    setCurrentFilteredResults(
      originalData.filter((item) => {
        return item.date.includes(dateInput);
      })
    );
    setCurrentPage(1);
  };

  const renderTable = (data) => {
    return (
      <tbody>
        {data.map((notice, index) => (
          <tr key={index} className="animate">
            <td>{notice.date}</td>
            <td>
              <a
                href={`${BASE_URL}/${notice.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                {notice.title}
              </a>
            </td>
            <td>
              <a
                href={`${BASE_URL}/${notice.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                Link
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    );
  };

  const renderPagination = (totalPages) => {
    const pageButtons = [];
    const maxButtons = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`px-4 py-2 ${
            currentPage === i ? "bg-blue-500 text-white" : "text-yellow"
          }`}
          onClick={() => {
            setCurrentPage(i);
            renderPage(i);
          }}
        >
          {i}
        </button>
      );
    }
    return (
      <div className="flex justify-center items-center my-4 flex-row" style={{gap:"6px"}}>
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.max(prev - 1, 1));
            renderPage(currentPage - 1);
          }}
          disabled={currentPage === 1}
          className="px-4 py-2 text-white"
        >
          Prev
        </button>
        {pageButtons}
        <button
          onClick={() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
            renderPage(currentPage + 1);
          }}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-white"
        >
          Next
        </button>
        <br />
        <br />
      </div>
    );
  };

  const renderPage = (pageNumber) => {
    const t = (x) => x.current?.value?.trim()?.length == 0;
    console.log({ searchInput, dateInput });
    const data =
      t(searchInput) && t(dateInput)
        ? originalData
        : [...currentSearchResults, ...currentFilteredResults].length > 0
        ? [...new Set([...currentSearchResults, ...currentFilteredResults].map((x)=>JSON.stringify(x)))].map((x)=>JSON.parse(x))
        : [];
    const noticesPerPage = 10;
    const startIndex = (pageNumber - 1) * noticesPerPage;
    const endIndex = startIndex + noticesPerPage;
    const dataToShow = data.slice(startIndex, endIndex);
    return (
      <>
        <table className="tbl lg:w-4/5 m-auto">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          {dataToShow.length ? (
            renderTable(dataToShow)
          ) : (
            <tr>
              <td colSpan="3" className="text-center py-4">
                No data found
              </td>
            </tr>
          )}
        </table>
        <div className="flex justify-center items-center my-4 gap-x-3">
          {renderPagination(Math.ceil(data.length / noticesPerPage))}
        </div>
      </>
    );
  };

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="h1 text-center text-black my-4 text-2xl font-bold">
        Notices
      </h1>
      <div className="search flex justify-between mb-4">
        <div className="flex">
          <input
            type="text"
            id="searchInput"
            ref={searchInput}
            placeholder="Search..."
            onChange={handleSearchInputChange}
            className="px-4 py-2 border mb-2 border-gray-300 rounded mr-2"
          />
          <button
            onClick={() => setCurrentPage(1)}
            className="px-4 py-2 mb-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </div>
        <div className="flex">
          <input
            type="text"
            ref={dateInput}
            id="dateInput"
            placeholder="Search by date (mm/yyyy)"
            onChange={searchByDate}
            className="px-4 py-2 border text-black border-gray-300 rounded mr-2"
          />
          <button
            onClick={searchByDate}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </div>
      </div>

      {isLoading ? (<>
        <div className="loader text-center"> <Spinner /></div>
        
        </>  ) : (
        renderPage(currentPage)
      )}
    </div>
  );
};

export default Notices;
