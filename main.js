$(document).ready(function(){
    class Osoba{
        constructor(firstName,lastName,age){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.hello = function(){
                $(".lista").append($(`<li>Cześć ${this.firstName} ${lastName},
                 masz już ${this.age} lat.</li>`));
            }
        }
    }
    let osoba1 = new Osoba("Piotr", "Tryfon", 43);
    osoba1.hello();
    
    let osoba2 = new Osoba("Ala","Mądrala",28);
    osoba2.hello();

    let osoba3 = new Osoba("Adam", "Słodowy", 23);
    osoba3.hello();   
})
