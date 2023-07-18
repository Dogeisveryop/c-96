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
    room_name = localStorage.getItem("Room_name");

    function sendmsg(){
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            likes : 0 ,
            message : msg ,
            name : user_name 
      });
      document.getElementById("msg").value = "" ;
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
