document.getElementById("sendBtn").addEventListener("click", function() {
  let key = document.getElementById("key").value;
  let uid = document.getElementById("uid").value;
  let region = document.getElementById("region").value;

  if(key === "" || uid === "" || region === "Select your region"){
    alert("Please fill all fields!");
  } else {
    alert("Access Key: " + key + "\nUID: " + uid + "\nRegion: " + region);
  }
});