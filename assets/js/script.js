/* const root = document.querySelector("#root"); // Je récupère l'élément #root.
const nav = document.createElement("nav"); // Je créer l'élément nav.
nav.innerHTML = "Hello World"; // J'ajoute à l'élément nav le texte "Hello World".
root.append(nav); // Je rajoute la const "nav" à  la const "root". */

// Pour créer un point d'entré mon HTML j'utilise la formule suivante:
const root = ReactDOM.createRoot(document.querySelector("#root"));
//  Pour créer mon component j'ai besoin d'une simple fonction dont le nom, par convention devra comporter (comme les class) une Majuscule en premier et retourner (return) du JSX.

// Component de type fonction
const Elem = () => {
  let a = "hello";
  let b = "world";
  return (
    /* En JSX l'utilisation d'un component PARENT est OBLIGATOIRE même vide <> </> */
    <>
      {/* ceci est un commentaire JSX
      pour utiliser une class css dans JSX j'ai besoib de l'attribut ClassName=""
    */}
      <nav className="menu" id="superMenu">
        {a + b}
      </nav>
      <div>test test</div>
      <img></img>
      <Elem2></Elem2>
    </>
  );
};
// component de type class
class Elem2 extends React.Component {
  c = "monde";
  /*   le this signifie la class courante */
  d = this.c + "magique";
  render() {
    return (
      <div>
        Bonjour{Elem2.c}
        {this.d}
      </div>
    );
  }
}
// events react

const Bouton = () => {
  /*    Pour executer l'action d'un event sous react je dois déclarer une fonction handle+event qui executera les actionq associées. */
  const handleClick = () => {
    alert("ALERT AU GOGOL");
  };
  return (
    /* Tous mes events sont appelés directement dans le JSX avec une majuscule et appellent la fonction handle+event SANS LES PARENTHESES idem addEventListener */ <button
      onClick={handleClick}
    >
      Bonjour
    </button>
  );
};
//  utilisation de list et des boucles
const courses = ["Slips", "Petit prince", "Ralonge"];
const Liste = () => {
  return (
    <ul>
      {courses.map((value, index) => {
        // console.log(value, index);
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
};

root.render(<Liste />);
