console.log("Javascript cargado bueno")



 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBQBkYUdxvxV6ip-Tg-b2CNh6m6JX6EExg",
    authDomain: "gats-6d8c3.firebaseapp.com",
    projectId: "gats-6d8c3",
    storageBucket: "gats-6d8c3.appspot.com",
    messagingSenderId: "939241072699",
    appId: "1:939241072699:web:a4d7977b955334215bd41e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase


  var db = firebase.firestore();

let arregloUsuarios = [];

  db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

    	var obj = doc.data()
        obj.id = doc.id;
        arregloUsuarios.push(obj);
    });
});
  


  function agregar_gatos(){
  	var edad = document.getElementById("Edad_gato").value
  	var nombre = document.getElementById("nombre_gato").value
  	var raza = document.getElementById("raza_gato").value

  	if(nombre == "" ||nombre == null){
  		alert("El nombre no puede estar vacio")
  	}else{
  		  db.collection("Gatos").add({ 

    Nombre: nombre,
    Edad: edad,
    Raza: raza
    

})
.then(function(docRef) {
    alert("El gato se agrego correctamente")
})
.catch(function(error) {
    console.error("Error al ingredar el gato ", error);
});

  	}

  }



