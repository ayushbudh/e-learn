//Get elements
 var u1 = document.getElementById('uploader1');
 var u2 = document.getElementById('uploader2');
 var u3 = document.getElementById('uploader3');
 var u4 = document.getElementById('uploader4');
 var u5 = document.getElementById('uploader5');
 var u6 = document.getElementById('uploader6');
 var fa1 = document.querySelector('#fileInput1');
 var fa2 = document.querySelector('#fileInput2');
 var fa3 = document.querySelector('#fileInput3');
 var fa4 = document.querySelector('#fileInput4');
 var fa5 = document.querySelector('#fileInput5');
 var fa6 = document.querySelector('#fileInput6');
 var a1 = document.querySelector('#a1');
 var a2 = document.querySelector('#a2');
 var a3 = document.querySelector('#a3');
 var a4 = document.querySelector('#a4');
 var a5 = document.querySelector('#a5');
 var a6 = document.querySelector('#a6');

 // Listern for file selection


 fa1.addEventListener('change', function (e) {
    // Get file
    var file = e.target.files[0];

    // create a stoarge ref
    var storageRef = firebase.storage().ref('Assignments/'+file.name);

    // Upload file
    var task = storageRef.put(file);

    task.on('state_changed',
    function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        u1.value = percentage;

    },
    function error(err){

    },
    function complete(){
            console.log('File Uploaded for assignment1');
            u1.style.display ="none";
            fa1.style.display ="none";
            a1.style.display ="block";
    }

    );

 });

 fa2.addEventListener('change', function (e) {
    // Get file
    var file = e.target.files[0];

    // create a stoarge ref
    var storageRef = firebase.storage().ref('Assignments/'+file.name);

    // Upload file
    var task = storageRef.put(file);

    task.on('state_changed',
    function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        u2.value = percentage;

    },
    function error(err){

    },
    function complete(){
            console.log('File Uploaded for assignment2');
            u2.style.display ="none";
            fa2.style.display ="none";
            a2.style.display ="block";
    }

    );

 });

 

  fa3.addEventListener('change', function (e) {
    // Get file
    var file = e.target.files[0];

    // create a stoarge ref
    var storageRef = firebase.storage().ref('Assignments/'+file.name);

    // Upload file
    var task = storageRef.put(file);

    task.on('state_changed',
    function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        u3.value = percentage;

    },
    function error(err){

    },
    function complete(){
            console.log('File Uploaded for assignment3');
            u3.style.display ="none";
            fa3.style.display ="none";
            a3.style.display ="block";
    }

    );

 });

 


  fa4.addEventListener('change', function (e) {
    // Get file
    var file = e.target.files[0];

    // create a stoarge ref
    var storageRef = firebase.storage().ref('Assignments/'+file.name);

    // Upload file
    var task = storageRef.put(file);

    task.on('state_changed',
    function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        u4.value = percentage;

    },
    function error(err){

    },
    function complete(){
            console.log('File Uploaded for assignment4');
            u4.style.display ="none";
            fa4.style.display ="none";
            a4.style.display ="block";
    }

    );

 });

 


  fa5.addEventListener('change', function (e) {
    // Get file
    var file = e.target.files[0];

    // create a stoarge ref
    var storageRef = firebase.storage().ref('Assignments/'+file.name);

    // Upload file
    var task = storageRef.put(file);

    task.on('state_changed',
    function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        u5.value = percentage;

    },
    function error(err){

    },
    function complete(){
            console.log('File Uploaded for assignment5');
            u5.style.display ="none";
            fa5.style.display ="none";
            a5.style.display ="block";
    }

    );

 });


  fa6.addEventListener('change', function (e) {
    // Get file
    var file = e.target.files[0];

    // create a stoarge ref
    var storageRef = firebase.storage().ref('Assignments/'+file.name);

    // Upload file
    var task = storageRef.put(file);

    task.on('state_changed',
    function progress(snapshot) {
        var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        u6.value = percentage;

    },
    function error(err){

    },
    function complete(){
            console.log('File Uploaded for assignment6');
            u6.style.display ="none";
            fa6.style.display ="none";
            a6.style.display ="block";
    }

    );

 });