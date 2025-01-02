// Interceptor Function with Different Methods
function fetchWithInterceptor(url, options = {}) {
    // Pre-request Logic (Interceptor before request)
    console.log("Request URL:", url);
    console.log("Request Options:", options);
  
    // Add custom headers or modify options here
    options.headers = {
      ...options.headers,
      'Authorization': 'Bearer YOUR_TOKEN',  // Example of adding token
      'Content-Type': 'application/json'
    };
  
    // Call the fetch method with the modified options
    return fetch(url, options)
      .then(response => {
        // Post-response Logic (Interceptor after response)
        if (!response) {
          return Promise.reject('Failed to fetch data');
        }
        
        console.log('Response:', response);
  
        // You can process the response here (e.g. JSON parsing)
        return response.json();
      })
      .catch(error => {
        // Handle errors here
        console.error('Request Error:', error);
        throw error; // Re-throw error for further handling if needed
      });
  }
  
  // Specific Method for GET
  function fetchGET(url, params = {}) {
    return fetchWithInterceptor(url, {
      method: 'GET',
      headers: {
        ...params.headers,  // Optional, add custom headers
      },
    });
  }
  
  // Specific Method for POST
  function fetchPOST(url, body, params = {}) {
    return fetchWithInterceptor(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        ...params.headers,  // Optional, add custom headers
      },
    });
  }
  
  // Specific Method for PUT
  function fetchPUT(url, body, params = {}) {
    return fetchWithInterceptor(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        ...params.headers,  // Optional, add custom headers
      },
    });
  }
  
  // Specific Method for DELETE
  function fetchDELETE(url, params = {}) {
    return fetchWithInterceptor(url, {
      method: 'DELETE',
      headers: {
        ...params.headers,  // Optional, add custom headers
      },
    });
  }
  
  export {fetchGET,fetchPOST,fetchPUT,fetchDELETE}