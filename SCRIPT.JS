async function fetchAndDisplay(urls) {
    // Loop through each URL asynchronously
    for (const url of urls) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching URL: ${url} - Status: ${response.status}`);
        }
  
        const data = await response.text(); // Assuming text content
        const content = await processContent(data); // Allow for content processing
  
        // Use AJAX library (like jQuery) to display content
        $.ajax({
          url: "/your/display/endpoint", // Replace with your endpoint to handle content
          type: "POST",
          data: { content }, // Send processed content
          success: function (response) {
            console.log("Content displayed successfully:", response);
          },
          error: function (error) {
            console.error("Error displaying content:", error);
          },
        });
  
      } catch (error) {
        console.error("Error fetching content for", url, error);
      }
    }
  }
  
  // Example usage
  const urls = [
    "https://GET /articles?include=author HTTP/1.1",
    "https://GET /articles?include=author HTTP/1.1",
    "https://GET /articles?include=author HTTP/1.1",
  ];
  
  fetchAndDisplay(urls);
  
  // Optional: Define a function to process fetched content (if needed)
  function processContent(data) {
    // You can modify or format the data here before sending it to the display endpoint
    // For example, if the data is JSON, you can parse it here
    return data;
  }
  