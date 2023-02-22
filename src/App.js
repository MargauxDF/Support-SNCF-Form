import { useState } from "react";
import "./App.css";

const MAX_LENGTH = 10;

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, age);
    setFirstname("");
    setLastname("");
    setAge("");
  };

  // Les lignes qui suivent vont nous permettre de gérer l'état du formulaire,
  // en utilisant un seul appel à useState avec un objet qui contient et stock les noms des champs et leurs valeurs. 
  // Dans le cas de formulaires longs, cela va nous éviter d'utiliser plusieurs variables d'état. 
   
  // on initialise les valeurs des champs du formulaire à une chaîne vide.

  // const [wilder, setWilder] = useState({
  //   firstname: "",
  //   lastname: "",
  //   age: "",
  // });

  // handleChange est utilisée pour mettre à jour l'objet wilder lorsqu'un champ est modifié. 

  // const handleChange = (e) => {
  //   const { value, name } = e.target; //on destructure les élements de notre e.target que l'on va récupérer dans notre input (name et value), 
  //   setWilder({ ...wilder, [name]: value }); // '...wilder' crée une copie de l'objet wilder existant que l'on va venir fussioné avec les nouvelles valeurs.
                                                // '[name]: value' utilise la valeur 'name' de l'input comme nom de propriété(key), et la valeur 'value' de l'input comme valeur.
                                                // par ex: si name="firstname" et value="John", on va créer un nouvel objet qui contiendra toutes les propriétés déjà existante de l'objet wilder, et donc dans "firstname" elle remplacera la valeur par "John".
                                                // On passe cela à setWilder ce qui va nous permettre de mettre à jour la valeur d'une propriété spécifique de l'objet wilder, sans avoir à réécrire toutes les autres propriétés.
  // }

  // handleSubmit est appelée lors de la soumission du formulaire

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Empêche le rechargement de la page par défaut
  //   console.log(wilder); // On affiche notre objet wilder dans la console
  //   setWilder({ // On remet tous nos champs vides une fois que le formulaire a bien été soumis
  //     firstname: "",
  //     lastname: "",
  //     age: ""
  //   })
  // }

  return (
    <div className="App">
      <h1>Become a wilder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">Firstname</label>
          {/*  <input id='firstname' name='firstname' type='text' value={wilder.firstname} onChange={handleChange} /> */}
          <input
            id="firstname"
            name="firstname"
            type="text"
            value={firstname}
            onChange={(e) => {
              if (e.target.value.length <= MAX_LENGTH) { // on compare LA TAILLE de notre e.target.value avecla valeur MAX_LENGTH définie plus haut, si elle est respectée : on setFirsname avec la valeur
                setFirstname(e.target.value);
              }
              console.log(firstname);
            }}
          />
          <span>{MAX_LENGTH - firstname.length} caractères restants</span> 
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          {/*  <input id='lastname' name='lastname' type='text' value={wilder.lastname} onChange={handleChange} /> */}
          <input
            id="lastname"
            name="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          {/*  <input id='age' name='age' type='number' value={wilder.age} onChange={handleChange} /> */}
          <input
            id="age"
            name="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit">Become a wilder</button>
      </form>
    </div>
  );
}

export default App;
