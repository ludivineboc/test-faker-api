
fetch("myDataset.json")
  .then(rep => {
    return rep.json();
  })
  .then(data => {
    addRecipe(data);
  });

// Cette fonction prend les données JSON en entrée e
function addRecipe(data) {
  // Affiche les données dans la console du navigateur
  console.log(data);

  data.forEach(element => {
    console.log(element.ingredients)

    let ingredients = element.ingredients

    ingredients.forEach(element => {
      console.log(element.quantite + element.unite +element.aliment)
      
    });
  });

}

