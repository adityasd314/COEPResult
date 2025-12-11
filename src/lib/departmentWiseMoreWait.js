const fs = require('fs');  // Import fs to save results to a file

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const departmentMapping = {
  1: 'civil',
  9: 'instru',
  7: 'entc',
  11: 'metallurgy',
  13: 'manufacturing',
  3: 'computer',
  10: 'mechanical'
};

const retryRequest = async (mis, maxRetries = 5, initialDelay = 5000) => {
  let attempts = 0;
  let delayTime = initialDelay;

  while (attempts < maxRetries) {
    try {
      const response = await fetch("https://coepresult.vercel.app/api/data", {
        "headers": {
          "accept": "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "sec-gpc": "1"
        },
        "referrer": "https://coepresult.vercel.app/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": `{\"semester\":4,\"yearOfStudy\":\"SY\",\"mis\":\"${mis}\"}`,
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Attempt ${attempts + 1} failed for MIS ${mis}:`, error);
      if (attempts < maxRetries - 1) {
        console.log(`Retrying in ${delayTime / 1000} seconds...`);
        await delay(delayTime);
        delayTime = Math.min(delayTime * 2, 30000); // Increase delay (max 30 seconds)
      }
      attempts++;
    }
  }

  // If all retries fail, return a default result
  console.log(`Max retries reached for MIS ${mis}. Returning default result.`);
  return { result: null };
};

const getDepartmentData = async (code, capacity, delayTime = 100) => {
  let start = 612200000 + code * 1000;
  const computerResults = new Array(capacity).fill(0).map((_, i) => String(+i + 1));
  const results = [];

  for (let i = 0; i < computerResults.length; i++) {
    const mis = start + i;
    results.push(retryRequest(mis));  // Use retryRequest for each MIS
    if (i < computerResults.length - 1) {
      await delay(delayTime);  // Delay between each request
    }
  }

  const response = await Promise.all(results);
  return response.map((x) => x.result).map(x => ({ name: x?.details, score: x?.score }));
};

const getAllDepartmentData = async () => {
  const department100 = [1, 9, 7, 11, 13]; // department codes for 100-capacity
  const department200 = [3, 10]; // department codes for 200-capacity
  
  const department100Requests = department100.map((code) => getDepartmentData(code, 100));
  const department200Requests = department200.map((code) => getDepartmentData(code, 200));

  try {
    const [departmentData100, departmentData200] = await Promise.all([
      Promise.all(department100Requests),
      Promise.all(department200Requests)
    ]);
    return { department100: departmentData100, department200: departmentData200 };
  } catch (error) {
    console.error('Error fetching department data:', error);
    return { department100: [], department200: [] };  // Return empty arrays on error
  }
};

// Call the function to get all department data and save it to a file
getAllDepartmentData()
  .then(data => {
    // Organize data by department
    const departmentResults = {};

    Object.entries(departmentMapping).forEach(([code, departmentName]) => {
      const departmentData = data.department100.concat(data.department200).filter(d => departmentName === departmentMapping[code]);
      departmentResults[departmentName] = departmentData;
    });

    // Save the result to a file
    const dataString = JSON.stringify(departmentResults, null, 2);  // Convert data to a formatted JSON string
    fs.writeFileSync('departmentDataWait.json', dataString, 'utf-8');  // Save the result to a file
    console.log('Data has been saved to departmentData.json');
  })
  .catch(err => {
    console.error('Error in getting department data:', err);
  });
