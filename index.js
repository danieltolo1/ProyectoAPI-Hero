const access_token ='338148107599656';
const main = document.querySelector('main')
var hero = 0;

function request(val) {
    return fetch('https://superheroapi.com/api.php/'+ access_token + '/' + val );
  }
  
  async function elegirHeroe(val) {
    const response1 = await request(val);
    const data = await response1.json();
    console.log(data);
  
        const card = document.createElement('div')
        card.ClassName = "card"
        const img = document.createElement('img')
        img.src = data.image.url 
   
        const titulo = document.createElement('h3')
        titulo.textContent = data.name
   
        card.append(img, titulo)
        main.append(card)

  }


  function sub() {
    var a=document.getElementById("hero").value;
    console.log(a);
    elegirHeroe(a);
  };

  
 


 /* crear tarjeta por JavaScript*/


