class Osoba{
    constructor(firstName,lastName,gender,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
       
        this.addToList = function(){
            $(".lista").append($(`<li>Cześć ${this.firstName} ${lastName},
             masz już ${this.age} lat.</li>`));
        }
    }
}
Osoba.prototype.addToTable = function(){
    $("tbody").append($(`<tr><td>${this.firstName}</td><td>${this.lastName}</td>
    <td>${this.gender}</td><td>${this.age}</td></tr>`))
}

$(document).ready(function(){
    let osoba1 = new Osoba("Piotr", "Programista", "mężczyzna", 43);
    osoba1.addToList();
    osoba1.addToTable();
    
    let osoba2 = new Osoba("Ala","Mądrala", "kobieta", 28);
    osoba2.addToList();
    osoba2.addToTable();

    let osoba3 = new Osoba("Adam", "Słodowy", "mężczyzna", 23);
    osoba3.addToList(); 
    osoba3.addToTable();  

})
