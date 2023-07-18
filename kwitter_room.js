var firebaseConfig = {
      apiKey: "AIzaSyAI5uPhMdITjn6_eYJ9HfERivFPt6taYyE",
      authDomain: "let-s-chat-7867c.firebaseapp.com",
      databaseURL: "https://let-s-chat-7867c-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-7867c",
      storageBucket: "let-s-chat-7867c.appspot.com",
      messagingSenderId: "7537381363",
      appId: "1:7537381363:web:fd370e6a088b333d384c86"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("kwittername");
document.getElementById("user").innerHTML = "Welcome " + user_name + " !!!";

function addroom() {
      room_name = document.getElementById("room_name").value ; 
      firebase.database().ref("/").child(room_name).update({
            room : "Adding Room Name"
      });

      localStorage.setItem("Room_name", room_name) ;

      window.location = "kwitter_page.html" ;
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room names = " + Room_names);
      row = "<div class='room_name' id = "+Room_names+" onclick = 'redirecttoroomname(this.id)'># "+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row ;
      });});}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room name",name);
      window.location = "kwitter_page.html" ;
}

function logout() {
      localStorage.removeItem("kwittername");
      localStorage.removeItem("Room_name");
      window.location= "index.html";
}
