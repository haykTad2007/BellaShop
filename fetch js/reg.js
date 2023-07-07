// // let data = fetch('https://6436a5678205915d34f91198.mockapi.io/get').then(res => res.json()).then(v => data = v);

// let user = {
//     Login:'hayko'
// }
// let response = fetch('https://6436a5678205915d34f91198.mockapi.io/get',{
//         method:'POST',
//         headers: {
//                 'Content-Type': 'application/json;charset=utf-8'
//             },
//             body:JSON.stringify(user)
//         })

let data1 = fetch("https://6436a5678205915d34f91198.mockapi.io/post").then( res => res.json()).then( res => data1 = res); 
let Login = document.getElementById('Login')
let password = document.getElementById('password')
let send = document.getElementById('send')

send.onclick = (e) => {
  let data = {
    Login: Login.value,
    password: password.value,
  };


  let res;

  function find() {
    for(i =0 ;i < data1.length;i++){
      if(data1[i].Login === data.Login && data1[i].password === data.password ){
        res = true
        break
      }
      else {res = false}      
        }
      } find()

      if(data.Login && data.password ){

        if (res === false) {
          fetch("https://6436a5678205915d34f91198.mockapi.io/post", {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(data),
          });
        }
        if(res === true) {
          alert("you have already registered . If you have an acount you can Log in");
      }
      } }
      
      
      
