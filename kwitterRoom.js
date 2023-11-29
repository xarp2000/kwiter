
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNKhBVfGybjcQWvCPOeZt69i-r_ZCnCUk",
  authDomain: "kwiter-9a0eb.firebaseapp.com",
  databaseURL: "https://kwiter-9a0eb-default-rtdb.firebaseio.com",
  projectId: "kwiter-9a0eb",
  storageBucket: "kwiter-9a0eb.appspot.com",
  messagingSenderId: "450406890584",
  appId: "1:450406890584:web:2523f5318f685acc619e2d"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
