// Define student profiles
const studentProfiles = {
    shafi: {
        profilePic: 'https://media.licdn.com/dms/image/D5603AQHlArcbb7sjJw/profile-displayphoto-shrink_400_400/0/1681261689525?e=1705536000&v=beta&t=hk74kpoBTe6mwY-XOavBuq0AZ8nJldcdfwSwL77Q3kw',
        name: 'Mohammad Shafi',
        rollId: '22A31A43G0',
        department: 'Artificial intelligence',
        cgpa: 9.1,
        age: 20,
        grade: 'A',
        adhaarNo: '1234 5678 9012',
        mobNo: '+917013345662',
        collegeMail: '22A31A43G0@pragati.ac.in',
        personalMail: 'shafimohammad5050@gmail.com',
        aicteCertificates: 3,
        linkedin: 'https://www.linkedin.com/in/shafi-mohammad9/',
        github: 'https://github.com/ShafiMohammad09',
        instagram: 'https://www.instagram.com/iam_shafi_mohammad/'
    },
    Sashank: {
        name: 'P Sashank rao',
        age: 18,
        grade: 'A',
        profilePic: 'assets/profile-assets/sashank.jpg',
        adhaarNo: '9876 5432 1098',
        mobNo: '+917993341023',
        rollId: '22A31A43G4',
        department: 'Artificial intelligence',
        cgpa: 9.2,
        collegeMail: '22a31a43g4@pragati.ac.in',
        personalMail: 'Sashank.perabathula@gmail.com',
        aicteCertificates: 3,
        linkedin: 'https://www.linkedin.com/in/janedoe/',
        github: 'https://github.com/janedoe',
        instagram:'https://www.instagram.com/psashankrao/'
    }
    // Add more profiles as needed
};

// Function to display student profiles
function showProfile(studentName) {
    const profileContainer = document.querySelector('.profile');

    if (studentProfiles.hasOwnProperty(studentName)) {
        const selectedStudent = studentProfiles[studentName];

        // Display the profile in the profile section
        profileContainer.innerHTML = `
            <div class="profileCard">
                <img src="${selectedStudent.profilePic}" alt="${selectedStudent.name}'s Profile" class="profilePic">
                <h2>${selectedStudent.name}</h2>
                <div class='social'>
                <p> <span class="ans"> <a href="${selectedStudent.linkedin}" target="_blank"><img width="40" height="40" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></a></span></p>
                <p><span class="ans"> <a href="${selectedStudent.github}" target="_blank"><img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/></a></span></p>
                <p><span class="ans"> <a href="${selectedStudent.instagram}" target="_blank"><img width="40" height="40" src="https://img.icons8.com/material-outlined/48/instagram-new--v1.png" alt="instagram-new--v1"/></a></span></p>
                </div>
               <div class="profileCard-Data> 
                <p class="age" >Age: <span class="ans">${selectedStudent.age}</span></p>
                <p>Grade: <span class="ans"> ${selectedStudent.grade}</span> </p>
                <p>Adhaar No: <span class="ans"> ${selectedStudent.adhaarNo}</span> </p>
                <p>Mobile No: <span class="ans"> ${selectedStudent.mobNo}</span></p>
                <p>Roll ID: <span class="ans"> ${selectedStudent.rollId}</span></p>
                <p>Department: <span class="ans"> ${selectedStudent.department}</span></p>
                <p>CGPA: <span class="ans"> ${selectedStudent.cgpa}</span></p>
                <p>College Mail: <span class="ans"> ${selectedStudent.collegeMail}</span></p>
                <p>Personal Mail: <span class="ans"> ${selectedStudent.personalMail}</span></p>
                <p>No. of AICTE Certificates: <span class="ans"> ${selectedStudent.aicteCertificates}</span></p>
                <!-- Add more profile details as needed -->
                </div>
            </div>
        `;
    } else {
        profileContainer.innerHTML = `<p>Student profile not found</p>`;
    }
}



document.querySelectorAll('.m-item').forEach(function(item) {
    item.addEventListener('click', function () {
        alert("sorry 😅, Can't reach at the moment");
    });
});

const input = document.querySelector('.search-input');
const list = document.querySelector('#studentList');
const items = Array.from(list.children);

input.addEventListener('input', () => {
  const query = input.value.toLowerCase();
  
  items.forEach(item => {
    const name = item.children[1].textContent.toLowerCase();
    const rollId = item.children[2].textContent.toLowerCase();
    
    if (name.includes(query) || rollId.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

