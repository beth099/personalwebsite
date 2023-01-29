/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 900 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Beth Clarke",
  title: "Hi, I'm Beth",
  subTitle: "", // if you want to add link, change bio in Greeting.js
  resumeLink:
    "https://drive.google.com/file/d/1QkykClKfFbeao5l67XuiEK7BYT9Nt_6i/view",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/beth099",
  linkedin: "https://www.linkedin.com/in/beth-clarke-836a681b0/",
  gmail: "bethc1@student.unimelb.edu.au",
  scholar: "https://scholar.google.com.au/citations?user=1RDicMMAAAAJ&hl=en",
  twitter: "https://twitter.com/bethclarke_",
  osf: "https://osf.io/profile/",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Interests",
  subTitle: "",
  skills: [
    ["Metaresearch, research methods"],
    ["Philosophy of science"],
    ["Social and personality psychology"]
  ],

  softwareSkills: [
    {
      skillName: "",
      fontClassname: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Research Section
const researchInfo = {
  display: true, // Set false to hide this section, defaults to true
  publications: [
    {
      title: "What limitations are reported in short articles in" + 
      " social and personality psychology?",
      authors: "Clarke, B., Schiavone, S. R., & Vazire, S.",
      venue: "Journal of Personality and Social Psychology",
      doi: "https://psyarxiv.com/n4eq7/",
      year: "in press."
    },
    {
      title: "The prejudices of expert evidence.",
      authors: "Chin, J., Cullen, H. J., & Clarke, B.",
      venue: "Monash Law Review",
      doi: "https://osf.io/nxcvy/",
      year: "accepted 2021."
    }
  ]
};

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Melbourne",
      logo: require("./assets/images/uomLogo.png"),
      subHeader: "PhD in Psychology",
      duration: "Jan 2022 - present",
      desc: "Studying the state of social and personality psychology from three perspectives:",
      descBullets: [
        "Analyzing and describing common practices in statistical reporting in experimental social psychology",
        "Exploring the relationship between the research limitations reported in published articles and actual research limitations",
        "Describing the types of claims authors make about how their findings can be applied to real world contexts"
      ]
    },
    {
      schoolName: "The University of Melbourne",
      logo: require("./assets/images/uomLogo.png"),
      subHeader: "Bachelor of Arts (Hons.)",
      duration: "Jan 2018 - Dec 2021",
      desc: "Completed with First Class Honours, majoring in Psychology and Philosophy",
      descBullets: [
          "Honours thesis: What limitations are reported in short reports in social and personality psychology?"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "System integration",
      progressPercentage: "70%"
    },
    {
      Stack: "Testing",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "The RepliCATS Project",
      companylogo: require("./assets/images/uomLogo.png"),
      date: "Mar 2021 – Dec 2022",
      desc: "PI: Prof. Fiona Fidler",
      descBullets: [
        "Evaluated social scientific research claims",
        "Assisted in organizing the final repliCATs workshop",
        "Assisted on the organizing committee for the AIMOS2021 and 2022 conferences"
      ],
      color: [24, 63, 128]
    },
    {
      role: "Research Intern",
      company: "FEEL Lab",
      companylogo: require("./assets/images/uomLogo.png"),
      date: "Nov 2021 – Feb 2022",
      desc: "PIs: A/Prof. Peter Koval, A/Prof. Katie Greenaway, & Dr. Elise Kalokerinos",
      descBullets: [
        "Collaborated on a project investigating the role of social interactions on emotions in the COVID-19 lockdowns in Melbourne, Australia"
      ],
      color: [24, 63, 128]
    },
    {
      role: "Research Assistant",
      company: "MetaMelb Lab",
      companylogo: require("./assets/images/uomLogo.png"),
      date: "Dec 2020 – Feb 2021",
      desc: "PI: Prof. Simine Vazire",
      descBullets: [
        "Coded features of published journal articles for a large-scale project assessing the state of social and personality psychology"
      ],
      color: [24, 63, 128]
    },
    {
      role: "Research Intern",
      company: "Personality Processes Lab",
      companylogo: require("./assets/images/uomLogo.png"),
      date: "Jul 2020 – Jan 2021",
      desc: "PI: A/Prof. Luke Smillie",
      descBullets: [
        "Assisted data coding for two personality related projects",
        "Attended regular lab meetings, which discuss the most up-to date topics in personality psychology"
      ],
      color: [24, 63, 128]
    },
    {
      role: "Research Intern",
      company: "Memory and Language Lab",
      companylogo: require("./assets/images/uomLogo.png"),
      date: "Jul 2020 – Jan 2021",
      desc: "PI: Prof. Simon Dennis",
      descBullets: [
        "Coded word cues in a language acquisition project",
        "Attended regular lab meetings which focused on ongoing projects in the lab"
      ],
      color: [24, 63, 128]
    },
    {
      role: "Casual Lecturer",
      company: "Teaching Experience",
      companylogo: require("./assets/images/uomLogo.png"),
      date: "Semester 2 2022, Semester 2 2023",
      desc: "Class: Graduate Research Methods PSYC90029",
      descBullets: [
        "I deliver lectures on the replicability crisis and statistical inference",
        "I assess students' assignments involving critical discussion of their research proposals for their Master’s thesis"
      ],
      color: [24, 63, 128]
     },
     {
      role: "Academic Tutor",
      company: "Teaching Experience",
      companylogo: require("./assets/images/uomLogo.png"),
      date: "Jul 2022 - present",
      desc: "Class: Personality and Social Psychology PSYC20009",
      descBullets: [
        "Teach classes that focus on key topics in social and personality psychology",
        "Mark student lab reports"
      ],
      color: [24, 63, 128]
     }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};



// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements and Awards 🏆 "),
  subtitle:
    "Me in the news!",

  achievementsCards: [
    {
      title: "Orbital Transports Contest Winner",
      subtitle:
        "Winning project proposal for the SmallSat Idea-to-Space Launch Contest - launching a cube satellite early 2023!",
      image: require("./assets/images/otLogo.png"),
      footerLink: [
        {
          name: "Press Release",
          url: "https://www.prnewswire.com/news-releases/the-smallsat-idea-to-space-launch-contest-presented-by-entrepreneur-peter-wokwicz-and-orbital-transports-after-receiving-an-overwhelming-number-of-entries-has-selected-the-winner-301479809.html"
        }
      ]
    },
    {
      title: "UC Computer Engineering Spokesperson",
      subtitle:
        "Selected for a write-up advertising Computer Engineering to propspective students.",
      image: require("./assets/images/ucLogoBW.png"),
      footerLink: [
        {
          name: "Profile",
          url: "https://www.canterbury.ac.nz/get-started/why-uc/student-profiles/all-profiles/marc-katzef.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "",
  email_address: "bethc1@student.unimelb.edu.au"
};


export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  researchInfo,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
};
