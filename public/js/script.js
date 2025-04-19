// Alumni Data
const alumni = [
  {
    name: "Zoheen Shahzad",
    graduationYear: "2023",
    company: "Google",
    jobTitle: "Software Engineer",
    branch: "Computer Science",
    location: "California, USA",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    linkedin: "https://linkedin.com/in/zoheen",
    github: ""
  },
  {
    name: "Rajneet Kaur Hanspal",
    graduationYear: "2026",
    company: "RetailEZ",
    jobTitle: "Retail Analyst",
    branch: "Food Technology",
    location: "India",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    linkedin: "https://linkedin.com/in/rajneet",
    github: ""
  },
  {
    name: "Ayesha Khan",
    graduationYear: "2022",
    company: "Flipkart",
    jobTitle: "Software Developer",
    branch: "Information Technology",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    linkedin: "https://linkedin.com/in/ayesha",
    github: "https://github.com/ayesha"
  },
  {
    name: "Safura Reshad",
    graduationYear: "2025",
    company: "Jamia Millia Islamia",
    jobTitle: "Student",
    branch: "Electronics",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "",
    github: ""
  },
  {
    name: "Nazrana",
    graduationYear: "2024",
    company: "Jamia Millia Islamia",
    jobTitle: "Student",
    branch: "Computer Engineering",
    location: "Delhi, India",
    image: "https://randomuser.me/api/portraits/women/43.jpg",
    linkedin: "https://linkedin.com/in/nazrana",
    github: ""
  },
  {
    name: "Noor Fatima",
    graduationYear: "2024",
    company: "Microsoft",
    jobTitle: "Product Manager Intern",
    branch: "Computer Science",
    location: "Hyderabad, India",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    linkedin: "https://linkedin.com/in/noorf",
    github: ""
  },
  {
    name: "Sarah Ali",
    graduationYear: "2021",
    company: "Amazon",
    jobTitle: "Cloud Engineer",
    branch: "Electronics and Communication",
    location: "Seattle, USA",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    linkedin: "https://linkedin.com/in/sarahali",
    github: "https://github.com/sarahali"
  },
  {
    name: "Muskaan Arora",
    graduationYear: "2022",
    company: "Meta",
    jobTitle: "UX Designer",
    branch: "Information Technology",
    location: "California, USA",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    linkedin: "https://linkedin.com/in/muskaanarora",
    github: ""
  },
  {
    name: "Ritika Sharma",
    graduationYear: "2023",
    company: "Adobe",
    jobTitle: "Software Developer",
    branch: "Computer Science",
    location: "Noida, India",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    linkedin: "https://linkedin.com/in/ritikasharma",
    github: "https://github.com/ritikasharma"
  },
  {
    name: "Fatima Siddiqui",
    graduationYear: "2025",
    company: "Samsung",
    jobTitle: "Research Intern",
    branch: "Electronics",
    location: "Seoul, South Korea",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    linkedin: "https://linkedin.com/in/fatimas",
    github: ""
  },
  {
    name: "Sana Qureshi",
    graduationYear: "2022",
    company: "Paytm",
    jobTitle: "Business Analyst",
    branch: "Management Studies",
    location: "Gurgaon, India",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    linkedin: "https://linkedin.com/in/sanaqureshi",
    github: ""
  },
  {
    name: "Amina Farooq",
    graduationYear: "2021",
    company: "IBM",
    jobTitle: "Data Scientist",
    branch: "Computer Science",
    location: "Bangalore, India",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
    linkedin: "https://linkedin.com/in/aminafarooq",
    github: "https://github.com/aminafarooq"
  }
];

// Alumni Achievements
const achievements = {
  "Zoheen Shahzad": [
    { title: "Completed Google STEP Internship", year: "2022", image: "https://img.icons8.com/color/96/medal.png" },
    { title: "Winner - Hackathon CodeFest", year: "2021", image: "https://img.icons8.com/color/96/trophy.png" },
    { title: "Speaker at Women in Tech Conference", year: "2023", image: "https://img.icons8.com/color/96/conference.png" }
  ],
  "Rajneet Kaur Hanspal": [
    { title: "Gold Medalist in Retail Analytics", year: "2025", image: "https://img.icons8.com/color/96/medal2.png" },
    { title: "Campus Ambassador Award", year: "2024", image: "https://img.icons8.com/color/96/award.png" }
  ],
  "Ayesha Khan": [
    { title: "Employee of the Month - Flipkart", year: "2023", image: "https://img.icons8.com/color/96/certificate.png" },
    { title: "Best Newcomer Award", year: "2022", image: "https://img.icons8.com/color/96/badge.png" }
  ],
  "Safura Reshad": [
    { title: "Best Electronics Project Award", year: "2024", image: "https://img.icons8.com/color/96/badge.png" },
    { title: "Dean’s Recommendation for Innovation", year: "2023", image: "https://img.icons8.com/color/96/star.png" }
  ],
  "Nazrana": [
    { title: "Dean’s List Honor", year: "2023", image: "https://img.icons8.com/color/96/star.png" },
    { title: "Winner - Coding Challenge", year: "2022", image: "https://img.icons8.com/color/96/trophy.png" }
  ],
  "Noor Fatima": [
    { title: "First Position - Microsoft Product Challenge", year: "2023", image: "https://img.icons8.com/color/96/medal.png" },
    { title: "Top 10 - Global PM Case Competition", year: "2024", image: "https://img.icons8.com/color/96/competition.png" }
  ],
  "Sarah Ali": [
    { title: "AWS Certified Cloud Practitioner", year: "2022", image: "https://img.icons8.com/color/96/certificate.png" },
    { title: "Tech Speaker at Amazon Web Days", year: "2023", image: "https://img.icons8.com/color/96/conference.png" }
  ],
  "Muskaan Arora": [
    { title: "Best UI/UX Designer - Meta Hackathon", year: "2023", image: "https://img.icons8.com/color/96/design.png" },
    { title: "Top 5 Finalist - International Design Awards", year: "2022", image: "https://img.icons8.com/color/96/prize.png" }
  ],
  "Ritika Sharma": [
    { title: "Adobe Code Warrior Award", year: "2023", image: "https://img.icons8.com/color/96/medal2.png" },
    { title: "Best Coding Project Award", year: "2022", image: "https://img.icons8.com/color/96/trophy.png" }
  ],
  "Fatima Siddiqui": [
    { title: "Research Paper Published at IEEE", year: "2024", image: "https://img.icons8.com/color/96/book.png" },
    { title: "Winner - Samsung Innovation Contest", year: "2023", image: "https://img.icons8.com/color/96/trophy.png" }
  ],
  "Sana Qureshi": [
    { title: "Top Analyst Award - Paytm", year: "2023", image: "https://img.icons8.com/color/96/award.png" },
    { title: "First Prize - Business Case Study Competition", year: "2022", image: "https://img.icons8.com/color/96/certificate.png" }
  ],
  "Amina Farooq": [
    { title: "IBM Best Data Scientist Award", year: "2023", image: "https://img.icons8.com/color/96/medal2.png" },
    { title: "Top Performer - Machine Learning Challenge", year: "2021", image: "https://img.icons8.com/color/96/brain.png" }
  ]
};



function renderAlumni(alumniList) {
  const container = document.getElementById('alumniContainer');
  container.innerHTML = '';

  alumniList.forEach(alum => {
    const card = `
    <div class="card">
      <img src="${alum.image}" alt="${alum.name}" class="profile-pic">
      <h3 class="name">${alum.name}</h3>
      <p class="details"><strong>Batch:</strong> ${alum.graduationYear}</p>
      <p class="details"><strong>Branch:</strong> ${alum.branch}</p>
      <p class="details"><strong>Company:</strong> ${alum.company}</p>
      <p class="details"><strong>Job Title:</strong> ${alum.jobTitle}</p>
      <p class="details"><strong>Location:</strong> ${alum.location}</p>
      <div class="links">
        ${alum.linkedin ? `<a href="${alum.linkedin}" target="_blank" class="connect-btn">LinkedIn</a>` : ''}
        ${alum.github ? `<a href="${alum.github}" target="_blank" class="connect-btn github">GitHub</a>` : ''}
      </div>
      <button class="btn btn-primary view-profile-btn" data-bs-toggle="modal" data-bs-target="#alumniModal" onclick="showAlumniDetails('${alum.name}')">View Full Profile</button>
    </div>
    `;
    container.insertAdjacentHTML('beforeend', card);
  });
}
function showAlumniDetails(name) {
  const alumniDetails = alumni.find(alum => alum.name === name);
  
  document.getElementById('alumniImage').src = alumniDetails.image;
  document.getElementById('alumniName').innerText = alumniDetails.name;
  document.getElementById('alumniBatch').innerText = alumniDetails.graduationYear;
  document.getElementById('alumniBranch').innerText = alumniDetails.branch;
  document.getElementById('alumniCompany').innerText = alumniDetails.company;
  document.getElementById('alumniJobTitle').innerText = alumniDetails.jobTitle;
  document.getElementById('alumniLocation').innerText = alumniDetails.location;
  
  const linkedinLink = document.getElementById('alumniLinkedin');
  const githubLink = document.getElementById('alumniGithub');

  linkedinLink.style.display = alumniDetails.linkedin ? 'inline-block' : 'none';
  linkedinLink.href = alumniDetails.linkedin || '#';

  githubLink.style.display = alumniDetails.github ? 'inline-block' : 'none';
  githubLink.href = alumniDetails.github || '#';

  // Add Achievements
  const achievementsContainer = document.getElementById('achievementsContainer');
  achievementsContainer.innerHTML = ''; // Clear previous

  const alumAchievements = achievements[name] || [];
  alumAchievements.forEach(ach => {
    const achCard = `
      <div class="achievement-card">
        <div class="achievement-line"></div>
        <img src="${ach.image}" alt="Badge" class="achievement-badge">
        <div class="achievement-details">
          <h4>${ach.title}</h4>
          <p>${ach.year}</p>
        </div>
      </div>
    `;
    achievementsContainer.insertAdjacentHTML('beforeend', achCard);
  });
}

// Initial render
renderAlumni(alumni);

// Search Inputs
const searchName = document.getElementById('searchName');
const searchBatch = document.getElementById('searchBatch');
const searchCompany = document.getElementById('searchCompany');
const searchLocation = document.getElementById('searchLocation');
const searchBranch = document.getElementById('searchBranch');
const searchJob = document.getElementById('searchJob');

// Filter function
function filterAlumni() {
  const nameVal = searchName.value.trim().toLowerCase();
  const batchVal = searchBatch.value.trim();
  const companyVal = searchCompany.value.trim().toLowerCase();
  const locationVal = searchLocation.value.trim().toLowerCase();
  const branchVal = searchBranch.value.trim().toLowerCase();
  const jobVal = searchJob.value.trim().toLowerCase();

  const filtered = alumni.filter(alum => {
    return (
      alum.name.toLowerCase().includes(nameVal) &&
      alum.graduationYear.includes(batchVal) &&
      alum.company.toLowerCase().includes(companyVal) &&
      alum.location.toLowerCase().includes(locationVal) &&
      alum.branch.toLowerCase().includes(branchVal) &&
      alum.jobTitle.toLowerCase().includes(jobVal)
    );
  });

  renderAlumni(filtered);
}

// Add Event Listeners
searchName.addEventListener('input', filterAlumni);
searchBatch.addEventListener('input', filterAlumni);
searchCompany.addEventListener('input', filterAlumni);
searchLocation.addEventListener('input', filterAlumni);
searchBranch.addEventListener('input', filterAlumni);
searchJob.addEventListener('input', filterAlumni);


modal.classList.add('show');
document.getElementById('closeModal').addEventListener('click', () => {
  const modal = document.getElementById('profileModal');
  modal.classList.add('hidden');
  modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
  const modal = document.getElementById('profileModal');
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.classList.remove('show');
  }
});


 // Add event listener to hamburger-list
 document.querySelector(".hamburger").addEventListener("click", () => {
  const navRight = document.querySelector(".nav-link");
  // Check if the nav-right menu is visible
  if (navRight.style.top === "-500%") {
      // Close the menu
      navRight.style.top = "65px";
  } else {
      // Open the menu
      navRight.style.top = "-500%";
  }
});
