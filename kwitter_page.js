var firebaseConfig = {
      apiKey: "AIzaSyAw9s4gseIcPXUqPlH0_shT9j9Pvw3w6K4",
      authDomain: "kwitter-4d13e.firebaseapp.com",
      databaseURL: "https://kwitter-4d13e-default-rtdb.firebaseio.com",
      projectId: "kwitter-4d13e",
      storageBucket: "kwitter-4d13e.appspot.com",
      messagingSenderId: "699836874128",
      appId: "1:699836874128:web:cbd9662b298701f04fc715"
    };

firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("User name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("User name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

