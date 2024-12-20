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
  osf: "https://osf.io/yx6t3",
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "Interests",
  subTitle: "",
  skills: [
    ["Metaresearch, research methods, statistics"],
    ["Social and personality psychology"],
    ["Science communication"]
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
      title: "The Prevalence of Direct Replication Articles in Top-Ranking Psychology Journals",
      authors: "Clarke, B., Lee, P. Y., Schiavone, S. R., Rhemtulla, M. & Vazire, S.",
      year: "(2024)",
      venue: "American Psychologist",
      volume: "",
      issue: "Advance online publication.",
      page: "",
      link: "https://doi.org/10.1037/amp0001385",
      doi: " https://osf.io/preprints/psyarxiv/sa6rc"
    },
    {
      title: "Looking Our Limitations in the Eye: A Tutorial for Writing About Research Limitations in Psychology",
      authors: "Clarke, B., Alley, L. J., Ghai, S., Flake, J. K., Rohrer, J. M., Simmons, J. P., Schiavone, S. R., & Vazire, S.",
      year: "(2024)",
      venue: "Social and Personality Psychology Compass",
      volume: "18",
      issue: "7",
      page: "e12979.",
      link: "https://doi.org/10.1111/spc3.12979h",
      doi: "https://doi.org/10.1111/spc3.12979"
    },
    {
      title: "What limitations are reported in short articles in" + 
      " social and personality psychology?",
      authors: "Clarke, B., Schiavone, S. R., & Vazire, S.",
      year: "(2023)",
      venue: "Journal of Personality and Social Psychology",
      volume: "125",
      issue: "4",
      page: "874-901",
      link: "https://doi.org/10.1037/pspp0000458",
      doi: "https://psyarxiv.com/n4eq7/"
    },
    {
      title: "Prevalence of transparent research practices in empirical psychology articles published in 2022: A cross sectional study.",
      authors: "Hardwicke, T. E., Thibault, R. T., Clarke, B., Moodie, N., Crüwell, S., Schiavone, S. R., Handcock, S., An Nghiem, K., Mody, F. Eerola, T. & Vazire, S.",
      year: "(2024)",
      venue: "Advances in Methods and Practices in Psychological Science",
      volume: "7",
      issue: "4",
      page: "1-3",
      link: "https://doi.org/10.1177/25152459241283477",
      doi: "https://osf.io/preprints/psyarxiv/t2zs9" 
    },
    {
      title: "An empirical appraisal of eLife’s assessment vocabulary.",
      authors: "Hardwicke, T. E., Schiavone, S. R., Clarke, B., & Vazire, S.",
      year: "(2024)",
      venue: "PLOS Biology",
      volume: "22",
      issue: "8",
      page: "e3002645",
      link: "https://doi.org/10.1371/journal.pbio.3002645",
      doi: "https://doi.org/10.1371/journal.pbio.3002645"
    },
    {
      title: "How do psychology journals handle post-publication critique? A cross-sectional study of policy and practice..",
      authors: "Whamond, A., Vazire, S., Clarke, B., Moodie, N., Schiavone, S. R., Thibault, R. T., & Hardwicke, T. E. ",
      year: "",
      venue: "",
      volume: "",
      issue: "Preprint",
      page: "",
      link: "PsyArXiv, https://osf.io/eadhb/",
      doi: "https://osf.io/eadhb/"
    },
    {
      title: "Dynamics of Social Experiences in the Context of Extended Lockdown.",
      authors: "Tran, A., Bianchi, V., Moeck, E. K., Clarke, B., Moore, I., Burney, S. J. H., Koval, P., Kalokerinos, E. K., & Greenaway, K. H.",
      year: "(2023)",
      venue: "Social Psychological and Personality Science",
      volume: "15",
      issue: "4",
      page: "395-406",
      link: "https://doi.org/10.1177/19485506231176603",
      doi: "https://doi.org/10.1177/19485506231176603"
    },
    {
      title: "The prejudices of expert evidence.",
      authors: "Chin, J., Cullen, H. J., & Clarke, B.",
      year: "(2022)",
      venue: "Monash Law Review",
      volume: "48",
      issue: "2",
      page: "59-96",
      link: "https://doi.org/10.26180/21899295.v2",
      doi: "https://doi.org/10.26180/21899295.v2"
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
