
//ADICIONE SEUS LINKS FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyCYXiTh85QfTzkY0hkYZYjhODf8lVbtKgU",
  authDomain: "kwitterprofthays.firebaseapp.com",
  databaseURL: "https://kwitterprofthays-default-rtdb.firebaseio.com",
  projectId: "kwitterprofthays",
  storageBucket: "kwitterprofthays.appspot.com",
  messagingSenderId: "182007721289",
  appId: "1:182007721289:web:f20b13c099fe4e9a507e98"
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
