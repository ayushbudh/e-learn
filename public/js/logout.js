
// get data for courses
db.collection('courses').get().then(snapshot => {
    setupCourses(snapshot.docs); 
});

// get data for annocements
db.collection('annocements').get().then(snapshot => {
    setupAnnouncements(snapshot.docs);
})


// set courses data from firestore
const courseList = document.querySelector('.card-deck');
// setup guides
const setupCourses = (data) => {
    let html = '';
    data.forEach(doc => {
        const course = doc.data();
        
        const card = `
        <div class="card">
            <a href="">
            <img class="card-img-top" src=${course.img} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.detail}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </a>
        </div>
        `;
        html+=card;
    });
    courseList.innerHTML = html;
}

// set annocements data from firestore

// set courses data from firestore
const announcementList = document.getElementById('announcement-container');
// setup guides
const setupAnnouncements = (data) => {
    let html = '';
    data.forEach(doc => {
        const announcementData = doc.data();
        
        const announcement = `
       <div class="announcement">
            <h3 id="subject">${announcementData.subject} </h3>
            <h6 id="date">${announcementData.date}</h6>
            <p class="lead">${announcementData.announcement}</p>
       </div>
        `;
        html+=announcement;
    });
    announcementList.innerHTML = html;
}

// profile details
const setEmail = document.getElementById('inputEmail');
const setImage = document.getElementById('profile-img');
const setFirstName = document.getElementById('first-name');
const setLastName = document.getElementById('last-name');


// listen for auth status changed
auth.onAuthStateChanged(user => {
    if(user){
        // user logged in
        storageBucket.ref('users/'+user.uid+'/profile.jpg').getDownloadURL()
        .then(imgURL => {
        setImage.src = imgURL;
        }).catch((error) =>{
            // Image does not exists
        })  
       database.ref('records/'+user.uid).once('value')
       .then( (snapshot) => {   
                const firstName = snapshot.val().Firstname;
                const lastName = snapshot.val().Lastname;
                setFirstName.placeholder = firstName;
                setLastName.placeholder = lastName;
           }).catch((error) =>{
               
           })
        setEmail.placeholder=user.email;
    }else{
        // user logged out
    }
})

// log out
const logout = document.getElementById('logout');

logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then(() =>{
        window.location.href = "./authentication.html";
    })
    .catch((err) => {
       
    });
})