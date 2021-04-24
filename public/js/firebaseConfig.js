
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        var firebaseConfig = {
            apiKey: "AIzaSyAi_YOuH1gYGrjuSd0O4bcRA48vHHYHduU",
            authDomain: "elearn-website.firebaseapp.com",
            projectId: "elearn-website",
            storageBucket: "elearn-website.appspot.com",
            messagingSenderId: "585127237310",
            appId: "1:585127237310:web:a1610cbcced2c6a2e2b0ef",
            measurementId: "G-VTK4MCN0ZR"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // make auth and firestore references
        const auth = firebase.auth();
        const db = firebase.firestore();
        
        // make Realtime database reference
        const database = firebase.database();
        const ref =  database.ref("records");

        const storageBucket = firebase.storage();

        


        // update firebase settings
        db.settings({timestampsInSnapshots: true});