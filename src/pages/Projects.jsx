import { useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    name:'Baghdadi Sooq',
    img:'/project/bg.png',
    link:'http://15.184.200.116/login',
    description:'This project has been built with multiple purposes, such as selling client products, text booking, etc., with multiple languages. In this project, my work includes managing the drive module, managing penalties, deposits, and working on APIs for both the admin side.',
    technology:['Laravel','Vue Js','MYSQL','Git','Web Sockets']
  },
  {
    name:'Chowman',
    img:'/project/chowman.png',
    link:'https://chowman.net/',
    description:'This project is tailored for the food delivery industry, enabling users to place orders while allowing drivers to accept and manage orders in real-time. I also created Chowman Pay as part of this project, with a focus on enhancing API speed and optimizing queries. Moreover, I integrated various payment gateways like Stripe, PayPal, and Tadit for managing different payment methods',
    technology:['Laravel','Vue Js','Mysql','Git']
  },
    {
    name:'VAFCC Reporing',
    link:'Private',
    description:"This project is dedicated to generating yearly Verganiya Clinic reports for the US market. As a dedicated developer, I was responsible for building a dynamic, lengthy conditional form with CSV import functionality. The project also involved implementing various designs and exporting data with dynamic headers and content",
    technology:['Laravel','HTML','CSS','Bootsrap','Jquery','MYSQL']
  },
    {
    name:'Click & Fix',
    img:'/project/click.jpg',
    link:'http://clickandfix.com/',
    description:"This project, built entirely from scratch by myself including API and Admin, caters to car-related services and emergency issues. Customers can place orders for emergencies, after which client staff allocate alternative vehicles and repair the customer's vehicle. The systemmanages car washing, servicing, and all car-related reports comprehensively and with multiple langauge arbic , Englishnand client communication",
    technology:['Laravel', 'ReactJS', 'Inertia.js', 'MySQL', 'Social APIs','Client Communication']
  },
  {
    name:'Nanalal.in',
    link:'http://nanalal.in/',
    img:'/project/nanalal.png',
    description:'This project is tailored for the food retail industry and has been independently developed by me. It incorporates solutions for reception, ceremony, and party decoration setups, along with comprehensive digital food management systems. The project includes features such as employee management, reporting, ingredient tracking, dashboards, and digital signature capabilities tailored to meet the needs of food retailers',
    technology:['Laravel', 'HTML', 'CSS', 'Bootstrap', 'MySQL', 'WhatsApp API','Stripe Payment', 'Live Chatting', 'Schedule Zoom Meeting with Customer', 'Generate Estimate Invoice PDF', 'and Sendn WhatsApp and more']
  },
    {
    name:'olsonvisual.com',
    img:'/project/olson.png',
    link:'https://olsonvisual.com',
    description:'This project focuses on printing posters and was developed in collaboration with another developer. I contributed to enhancing its speed and optimizing the codebase. Additionally, I addressed numerous bugs and introduced support for managing dynamic order statuses to improve its functionality.',
    technology:['Laravel', 'Vue' ,'Nova','Bootsrap','Git','Order Management' , 'Dynamic Status Change Base on Action', 'Report Builder','Redbbule API']
  },
  {
    name:'DMS(Document-Management-System)',
    link:'Private',
    description:'This project is designed for managing loan and land documents. With the assistance and guidance of my mentor, Simon, I developed this product. It enables tracking of document history using Restore and Zoho API integration. Additionally, it offers social logins and role management capabilities for enhanced user experience and security',
    technology:['Laravel', 'HTML' ,'Blade','Bootsrap','Git','DOM PDF']
  },
];
const Projects = () => {
  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  return (
    <div className="projects-page-container">
      <div className="projects-landing">
        <div className="project-headline">
          <div className="project-header-img">
            <img src="/testimg.jpg" />
          </div>
          <div className="project-page-header">
            <p>
              WHERE<br></br>IDEAS<br></br>
              <span>BEGIN.</span>
            </p>
            <div className="project-page-headline-btn">
              <a href="#project">See my work</a>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="projects-container">
        
{
  projects.map((project, index) => (
    <div className="project" key={index}>
      <div className="project-img">
        <a href="javascript:void(0)">
          {project.img ? <img src={project.img} /> : <img src="/peak-landing.PNG" />}
        </a>
      </div>
      <div className="project-info">
        <h2 className="project-title">{project.name}</h2>
        <p>{project.description}</p>
        <div className="project-tools">
          {project.technology && project.technology.length > 0 ? (
            project.technology.map((tech, index) => <p key={index}>{tech}</p>)
          ) : (
            ''
          )}
        </div>
        <div className="project-btns">
          {project.link === 'Private' ? (
            'Private'
          ) : (
            <a href={project.link} target="_blank">
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  ))
}


      </div>
    </div>
  );
};

export default Projects;
