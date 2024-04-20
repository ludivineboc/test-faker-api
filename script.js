window.addEventListener( "load", (event) => {
    console.log("La page est chargée");
    

  
  function getAPI (urlToFetch, fonctionAJouer) {

    fetch(urlToFetch)
    .then( response => response.json() )
    .then( fonctionAJouer)
    .catch( error => {
      console.error(`We encountered an error: ${error}`);
    });

  }

function addProducts(donnees){
    console.log(donnees)
 
    donnees.forEach(element => {
        console.log(element.title)

        let productCard = `
        <div class="productCard">
        <h4>${element.title}<h4>
        <img src="${element.image}">
        </div>
        `
        document.querySelector("#productsContainer").innerHTML += productCard
    });

    
  } 
  
  
  getAPI("https://fakestoreapi.com/products/", addProducts)
          
        

      });
      
      