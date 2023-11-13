
// Function to fetch student profiles
async function getStudentData() {
    try {
      const response = await fetch('studentData.json');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching student data:', error);
      return null;
    }
  }
  
  // Function to display student profiles

  
  async function showProfile(studentName) {
    const profileContainer = document.querySelector('.profile');
    const studentProfiles = await getStudentData();

    console.log('Loaded Student Profiles:', studentProfiles);

    if (studentProfiles && studentProfiles.hasOwnProperty(studentName)) {
        console.log('Selected Student:', studentProfiles[studentName]);

        const selectedStudent = studentProfiles[studentName];

        // Display the profile in the profile section
        profileContainer.innerHTML = `
        <div class="profileCard">
        <img src="${selectedStudent.profilePic}" alt="${selectedStudent.name}'s Profile" class="profilePic">
        <h2>${selectedStudent.name}</h2>
        <div class='social'>
        <p> <span class="ans"> <a href="${selectedStudent.linkedin}" target="_blank"><img width="35" height="35" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></a></span></p>
        <p><span class="ans"> <a href="${selectedStudent.github}" target="_blank"><img width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/></a></span></p>
        <p><span class="ans"> <a href="${selectedStudent.instagram}" target="_blank"><img width="35" height="35" src="https://img.icons8.com/material-outlined/48/instagram-new--v1.png" alt="instagram-new--v1"/></a></span></p>
        <p><span class="ans"> <a href="${selectedStudent.drive}" target="_blank"><img width="35" height="35" src="https://img.icons8.com/windows/32/google-drive.png" alt="google-drive"/></a></span></p>
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
        console.log('Student Profile not found for:', studentName);
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

