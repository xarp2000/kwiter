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

      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      
      
      function addUser()
      {
        userName = document.getElementById("userName").value;
        firebase.database().ref("/").child(userName).update({
          purpose : "adding user"
        });
      }
      
