import smartQuizImg from '../images/projects-image/smart-quiz.png'
import covidImg from '../images/projects-image/slot-finder.png'
import collegeestImg from '../images/projects-image/college-Fest.png'
import tutorImg from '../images/projects-image/tutor-finder.png'
import sgpaCalcImg from '../images/projects-image/sgpa-calculater.png'
import mathGame from '../images/projects-image/math-game.png'
import semImg from '../images/projects-image/sem-marksheet.png';

const projectDetail = [
    {
        title: "Smart Quiz",
        img: smartQuizImg,
        link: "https://smart-quiz.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/Smart-Quiz",
        tech: ["HTML", "CSS", "JS", "Firebase", "Materialize CSS"],
        detail: ["Quiz web application where you can play java ,html ,css ,js etc programming language quiz and test your skills", "Admin can add ,update ,read questions after login with his email password"]
    },
    {
        title: "Covid-19 vaccine slot finder",
        img: covidImg,
        link: "https://vaccine-slot-finder.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/Covid-19-vaccine-slot-finder",
        tech: ["HTML", "CSS", "JS", "Bootstrap", "API"],
        detail: ["User can find vaccine slot easily after selecting her state"
            , "This website use Co-WIN Public API for find Vaccine slot easily."]
    },
    {
        title: "College fest Management",
        img: collegeestImg,
        link: "https://youtu.be/EOEg2CTpH9s",
        linkTitle: "Watch",
        code: "https://github.com/priyanshu411/College-fest-Management",
        tech: ["HTML", "CSS", "JS", "JAVA", "MySql"],
        detail: ["By using this application student can register, login and participate in events.", "Admin can manage events and get student participation detail easily."]
    },
    {
        title: "Tutor finder",
        img: tutorImg,
        link: "https://youtu.be/45tc1XKbrTM",
        linkTitle: "Watch",
        code: "https://github.com/priyanshu411/Tutor-Finder",
        tech: ["HTML", "CSS", "JS", "Bootstrap", "JAVA", "MySql"],
        detail: ["Students or parents can find highly qualified tutors at affordable prices through Online and contact with teacher through online/offline."]
    },
    {
        title: "Sgpa Calculater",
        img: sgpaCalcImg,
        link: "https://sgpa-scsit.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/sgpa-calculater",
        tech: ["HTML", "CSS", "JS", "Materialize CSS"],
        detail: ["Student enter their subjects marks and credits and get SGPA.", "Sgpa calculater for my college students (School of Computer Science and IT,DAVV)"]
    },
    {
        title: "Math game",
        img: mathGame,
        link: "https://mathpuzzle.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/math-game",
        tech: ["React Js", "Materialize CSS"],
        detail: ["A simple mathematical operation game"]
    },
    {
        title: "Semester Marksheet",
        img: semImg,
        link: "https://replit.com/@Priyanshu411/semester-marksheet#main.cpp?embed=1&output=1",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/semester-marksheet",
        tech: ["C++", "OOPs"],
        detail: ["Student enter their subjects marks ,credit and other detail.And get marksheet with their grade, sgpa and other detail"]
    }

];
export default projectDetail;