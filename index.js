// Créez un tableau de nombres et utilisez la méthode .map() pour doubler chaque nombre du tableau.
let tableau = [12,20,25,35]
let array = tableau.map(multipl)
function multipl(a){
   return a*2
}
alert(array)

// Créez un tableau de chaînes et utilisez la méthode .filter() pour renvoyer un nouveau tableau avec uniquement
//  les chaînes dont la longueur est supérieure à 3.
let tab =["carrot","but","android"]
let newarray =tab.filter((chaine)=>chaine.length>3)
document.write(newarray)

// Utilisez la méthode .reduce() pour résumer tous les nombres dans un tableau de nombres. 
let nbrs =[2,4,6,8,10]
let init =nbrs.reduce((a,b)=>a+b)
document.write("</br>"+init)

// Utilisez la méthode .sort() pour trier un tableau de chaînes par ordre alphabétique.
let string = ["bineta","amadou","zeynab","toumani"]
let afich = string.sort()
document.write("</br>"+afich)

// Utilisez la méthode .forEach() pour imprimer chaque élément d'un tableau.
let imprim = ["toyota","range","motorola"]
let elmt = imprim.forEach((main)=>document.write("</br>"+main))


