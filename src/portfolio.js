import homepic from "./components/Access/ProfilePhotoHorizontal.jpg"
import aboutpic from "./components/Access/kirbybanner.gif"

const header = {
  homepage: '/',
  title: 'Kiarash Taheri'
}

const home = {
  photo: homepic,
  name: 'Kiarash',
  role: 'ML Intern @ AlphaMicron • BME + CS @ UBC',
  description: 'Fascinated by Machine Learning and Computer Science',
  contact: {
    github: 'https://github.com/KiarashTaheri/',
    linkedin: 'https://www.linkedin.com/in/ktaher02//',
  }
}

const about = {
  photo: aboutpic,
  facts: [
    'I am developing a commercial athletic wearable tracker',
    'I have a black belt in TaeKwonDo',
    'I can play the guitar and am learning about Sound Engineering',
    'I love cooking food from other cultures after trying them in resturants',
    'I have beent training gymnastics for 2 years and am trying to learn a handstand push up!',
  ]
}

const experiences = [
  {
    companyLink: "https://alphamicron.com/",
    company: 'AlphaMicron',
    role: 'Machine Learning Intern',
    date: 'May 2024 - August 2024',
    stack: ['TensorFlow', 'Keras', 'Sci-Kit Learn', 'Python']
  },
  {
    companyLink: "https://www.centreforbrainhealth.ca/research/brain-development-disorders/",
    company: 'Center of Brain Health',
    role: 'Machine Learning Intern',
    date: 'June 2023 - May 2024',
    stack: ['TensorFlow', 'Keras', 'PyTorch', 'Python', 'HTML', 'CSS', 'PHP', 'Linux', 'Bash', 'SQL', 'mySQL']
  },
  {
    companyLink: "https://www.linkedin.com/company/ubcbest/?originalSubdomain=ca",
    company: 'UBC Biomedical Engineering Student Team',
    role: 'Software Developer Co-op (Android)',
    date: 'Oct 2021 - Aug 2023',
    stack: ['React Native', 'JavaScript', 'MongoDB', 'Unity', 'WebGL', 'Bluetooth Low Energy (BLE)']
  },

]

const projects = [
  {
    name: 'Athletic Tracker',
    description: 'Developed the Software, UI, and sensor design behind Athletic Tracker',
    stack: ['C++', 'AWS', 'HTML', 'CSS', 'ESP 32', 'Figma']
  },

  {
    name: 'Opportunities Finder AI',
    description: 'Created an AI powered web scraping opprotunties app tailored to the user',
    stack: ['Python', 'HTML', 'CSS', 'React-Native', 'Cohere API'],
  },
  
  {
    name: 'MicroFluidic Cell Sorter Prototype',
    description: 'Utilzied RGB sensor and air pump to sort ping pong balls based on color. Place top 8 out of 20 teams',
    stack: ['C++', 'Circuit Design', 'Filtering', 'CAD'],
  },

]


export { header, home, about, experiences, projects}