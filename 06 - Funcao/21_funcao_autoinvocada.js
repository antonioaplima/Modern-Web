// IIFE -> Immediately Invoked Function Expression

//Padrão de função autodeclarada
(function(){
    console.log("Será executado na hora!");
    console.log("Foge do escopo mais abrangente!");
})();

console.log("Escopo global!");
