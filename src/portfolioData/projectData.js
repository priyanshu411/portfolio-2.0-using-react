import smartQuizImg from '../images/projects-image/smart-quiz.jpg'
import covidImg from '../images/projects-image/slot-finder.jpg'
import collegeestImg from '../images/projects-image/college-Fest.jpg'
import tutorImg from '../images/projects-image/tutor-finder.jpg'
import sgpaCalcImg from '../images/projects-image/sgpa-calculater.jpg'
import mathGame from '../images/projects-image/math-game.png'
import semImg from '../images/projects-image/sem-marksheet.jpg';

const projectDetail = [
    {
        title: "Smart Quiz",
        img: smartQuizImg,
        link: "https://smart-quiz.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/Smart-Quiz",
        tech: ["HTML", "CSS", "JS", "Firebase", "Materialize"],
        detail: ["Users can play programming language quiz and test skills","50+ Students use this application"]
    },
    {
        title: "Covid-19 vaccine slot finder",
        img: covidImg,
        link: "https://vaccine-slot-finder.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/Covid-19-vaccine-slot-finder",
        tech: ["HTML", "CSS", "JS", "Bootstrap", "API"],
        detail: ["User can find vaccine slot easily after selecting her state"]
    },
    {
        title: "Sgpa Calculater",
        img: sgpaCalcImg,
        link: "https://sgpa-scsit.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/sgpa-calculater",
        tech: ["HTML", "CSS", "JS", "Materialize"],
        detail: ["Student enter their subjects marks and credits and get SGPA.","100+ Students use this application"]
    },
    {
        title: "College fest Management",
        img: collegeestImg,
        link: "https://youtu.be/EOEg2CTpH9s",
        linkTitle: "Watch",
        code: "https://github.com/priyanshu411/College-fest-Management",
        tech: ["HTML", "CSS", "JS", "JAVA", "MySql"],
        detail: ["Students can register, login and participate in events."]
    },
    {
        title: "Tutor finder",
        img: tutorImg,
        link: "https://youtu.be/45tc1XKbrTM",
        linkTitle: "Watch",
        code: "https://github.com/priyanshu411/Tutor-Finder",
        tech: ["HTML", "CSS", "JS", "Bootstrap", "JAVA", "MySql"],
        detail: ["Students or parents can find highly qualified tutors by using this application."]
    },
    {
        title: "Math game",
        img: mathGame,
        link: "https://mathpuzzle.netlify.app/",
        linkTitle: "Live",
        code: "https://github.com/priyanshu411/math-game",
        tech: ["React Js", "Materialize"],
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