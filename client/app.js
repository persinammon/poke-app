
// Sending request and response data as JSONs

const postData = async (url = '', data = {})=>{
    const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
    },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
      console.log("error", error);
    }
  }

// Should be overriding null data in parameter (it's not)
postData('/', {answer:42}); //JSON req data