var firebaseConfig = {
        apiKey: "AIzaSyA_Y2omTngPANEyKLPyqKVWZiKoGqDTvcM",
        authDomain: "twitter-bots-7141b.firebaseapp.com",
        databaseURL: "https://twitter-bots-7141b-default-rtdb.firebaseio.com",
        projectId: "twitter-bots-7141b",
        storageBucket: "twitter-bots-7141b.appspot.com",
        messagingSenderId: "740132371729",
        appId: "1:740132371729:web:6e241aecf25862a6ea60b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location = "Kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
