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
      if(data1[i].Login === data.Login && data1[i].password === data.password){
        res = true
        // console.log('lox');
        break
      }
      else {res = false}      
        }
      } find()
      
      if(data.Login === 'admin' && data.password === '777'){
        location.assign("../page/add/add.html");
        // e.preventDefault()
      }

      else{
      if(data.Login && data.password ){

        if (res === false) {
          // fetch("https://6436a5678205915d34f91198.mockapi.io/post", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json;charset=utf-8",
          //   },
          //   body: JSON.stringify(data),
          alert('if you dont have acount you can creat it ')
          };
        }
        if(res === true) {

          location.assign("profile.html");
        // e.preventDefault(); //nra hamara vor buutony obnovit chani amen angam ete formi mecha gtac
      }
      } }
      
      function name(x,q) {
        x.addEventListener('keypress',function(event){
          if(event.key === "Enter"){
             password.focus();
           }
         })
         q.addEventListener('keypress',function(event){
          if(event.key === "Enter"){
            send.focus();
           }
         })
      }name(Login,password)

       
      
      
      
      
