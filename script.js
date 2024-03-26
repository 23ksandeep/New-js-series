


const box = document.getElementById("box")
let data = []
const fetchTheApi = async () => {
    let api_call = "https://jsonplaceholder.typicode.com/users";

    try {
       let firstAwait = await fetch(api_call) 
       let responce = await firstAwait.json()
       data = responce
       console.log("responce: ", responce)
       creatCards(responce)
    } catch (error) {
        console.log(error)
    }
function creatCards(){
 data.forEach((user) => {
    console.log("USER: ", user)
    let div = document.createElement("div")
    let h2 = document.createElement("h2");
    h2.textContent = user.name;
    let h3 = document.createElement("h3");
    h3.textContent = user.username;
    let h4 = document.createElement("h4");
    h4.textContent = user.email;
   
    let p = document.createElement("p");
    p.textContent = user.address.street + ", " + user.address.city;
    
    div.append(h2, h3, h4, p)

    box.append(div)





    // box.innerHTML = `
    //     <div>
    //       <h2>${user.name}</h2>
    //       <h3>${user.username}</h3>
    //       <h4>${user.email}</h4>
    //       <p>${(user.address.street, user.address.city)}</p>
    //     </div>;`
 });
}