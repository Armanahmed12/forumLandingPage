async function fetchData() {
    try {
      const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
      const data = await response.json();
      showDataIn(data.posts);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
  
  fetchData();


 // Showing data in the ui 
 function showDataIn(data){
    
    console.log(data);

    data.forEach( eachPostInfo => {
        
          
    });


 }

 console.log("H")