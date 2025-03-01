//Task 01: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

async function iterateWithAsyncAwait(array) {
  // create a helper function to create a delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Loop through each item in the array
  for (const item of array) {
    console.log(item);

    // Wait for 1 second before continuing to the next item
    await delay(1000);
  }

  console.log("All items have been processed!");
}

//Task 02: Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

async function awaitCall() {
  // This inner function simulates an API call that returns a Promise
  function fetchDataFromAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = {
          id: 1,
          name: "User Data",
          timestamp: new Date().toISOString(),
        };
        resolve(data);
      }, 2000); // Simulating a 2-second network delay
    });
  }

  console.log("Starting to fetch data...");

  // The await keyword pauses execution until the Promise resolves
  const data = await fetchDataFromAPI();

  console.log("Data received:", data);
  return data;
}

//Task 03: Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.

async function awaitCallWithErrorHandling(shouldFail = false) {
  // This simulates an API call that might fail
  function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          // Simulate a network error
          reject(new Error("Network error: Could not connect to server"));
        } else {
          const data = {
            id: 1,
            name: "User Data",
            timestamp: new Date().toISOString(),
          };
          resolve(data);
        }
      }, 2000);
    });
  }

  console.log("Starting to fetch data...");

  try {
    // This might throw an error if the Promise is rejected
    const data = await fetchDataFromAPI();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    // This block catches any errors thrown in the try block
    console.log(
      "Friendly error message: Sorry, we couldn't retrieve your data. Please try again later."
    );
    console.log("Technical details:", error.message);
    // We can return a default value or null
    return null;
  }
}

//Chaining Async/Await: Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.

async function chainedAsyncFunctions() {
  // Helper function to create a delay
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Define three separate async functions
  async function step1() {
    await delay(1000);
    console.log("Step 1 completed");
    return "Result from step 1";
  }

  async function step2(prevResult) {
    await delay(1000);
    console.log("Step 2 completed with input:", prevResult);
    return "Result from step 2";
  }

  async function step3(prevResult) {
    await delay(1000);
    console.log("Step 3 completed with input:", prevResult);
    return "All steps completed!";
  }

  console.log("Starting the chain of async functions...");

  // Chain the functions using await
  const result1 = await step1();
  const result2 = await step2(result1);
  const finalResult = await step3(result2);

  console.log("Chain completed with result:", finalResult);
  return finalResult;
}

//Task 04: Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.

async function concurrentRequests() {
  // These functions simulate API calls
  function fetchUserData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: "John Doe",
          email: "john@example.com",
        });
      }, 2000);
    });
  }

  function fetchUserPosts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 101, title: "First Post", content: "Hello world!" },
          { id: 102, title: "Second Post", content: "Async is fun!" },
        ]);
      }, 3000);
    });
  }

  console.log("Starting concurrent requests...");

  // Start both requests at the same time and wait for both to complete
  const [userData, userPosts] = await Promise.all([
    fetchUserData(),
    fetchUserPosts(),
  ]);

  // Combine the results
  const combinedResults = {
    user: userData,
    posts: userPosts,
  };

  console.log("All requests completed!");
  console.log("Combined results:", combinedResults);

  return combinedResults;
}

//Task 05: Awaiting Parallel Calls: Write a function parallelCalls that takes an array of URLs and fetches data from each URL concurrently using Promise.all(). Log the responses once all requests are complete.

async function parallelCalls(urls) {
  // This simulates fetching data from a URL
  function fetchFromURL(url) {
    return new Promise((resolve, reject) => {
      // Simulate random success/failure
      const willSucceed = Math.random() > 0.2; // 80% chance of success

      setTimeout(() => {
        if (willSucceed) {
          // Create some dummy data based on the URL
          const urlParts = url.split("/");
          const resource = urlParts[urlParts.length - 1];

          resolve({
            url: url,
            status: 200,
            data: { resource, timestamp: new Date().toISOString() },
          });
        } else {
          reject(new Error(`Failed to fetch from ${url}`));
        }
      }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
    });
  }

  console.log(`Starting parallel calls to ${urls.length} URLs...`);

  try {
    // Create an array of fetch promises
    const fetchPromises = urls.map((url) => fetchFromURL(url));

    // Wait for all promises to resolve
    const responses = await Promise.all(fetchPromises);

    console.log("All URLs fetched successfully!");
    console.log("Responses:", responses);

    return responses;
  } catch (error) {
    console.log("One or more requests failed:", error.message);

    // We could also use Promise.allSettled to get partial results
    console.log("Attempting to get partial results with Promise.allSettled...");

    const fetchPromises = urls.map((url) => fetchFromURL(url));
    const results = await Promise.allSettled(fetchPromises);

    const successful = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);

    const failed = results
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason.message);

    console.log(
      `Got ${successful.length} successful responses and ${failed.length} failures`
    );
    console.log("Successful responses:", successful);
    console.log("Failed requests:", failed);

    return successful;
  }
}
