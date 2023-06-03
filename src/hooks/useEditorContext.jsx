'use client';
import { createContext, useContext, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const EditContext = createContext(undefined);

const useGetEditContext = () => useContext(EditContext);

const Provider = ({ children }) => {
	const { get } = useSearchParams();
	const inEditMode = JSON.parse(get('inEditMode') ?? false);

	const [editMode, setEditMode] = useState(inEditMode);
	const [firstName, setFirstName] = useState('Shivam');
	const [lastName, setLastName] = useState('Sahil');
	const [address, setAddress] = useState('New Delhi, India');
	const [number, setNumber] = useState('+91 XXXXXXXXXX');
	const [metaDetails, setMetaDetails] = useState(
		'[{"title":"Email","value":"activity.schoolsh2@gmail.com","hyperLinked":true,"hyperlinkedUrl":"mailto:activity.schoolsh2@gmail.com"},{"title":"LinkedIn","value":"shivamsahil","hyperLinked":true,"hyperlinkedUrl":"https://www.linkedin.com/in/shivam-sahil/"},{"title":"Github","value":"sedhha","hyperLinked":true,"hyperlinkedUrl":"https://github.com/sedhha"},{"title":"Website","value":"Shivam Sahil","hyperLinked":true,"hyperlinkedUrl":"https://shivam-sahil.vercel.app"},{"title":"Stack Overflow","value":"Shivam Sahil","hyperLinked":true,"hyperLinkedUrl":"https://stackoverflow.com/users/8176451/shivam-sahil"}]'
	);
	const [professionalExperience, setProfessionalExperience] = useState(
		'[{"title":"Software Engineer","org":"Optum Inc, UnitedHealth Group","startDate":1635705000000,"endDate":-1,"bullets":[{"pointer":"Built recursion based nested JSON Editor UI to edit nested JSONs to any possible depth (React with TypeScript)","highlights":["recursion","nested JSON Editor UI","JSONs"]},{"pointer":"Migration of CMS from Contentful to Adobe Experience Manager (Scala Play Integration with GraphQL, HTTP Assets & Query Builder API)","highlights":["CMS","Adobe Experience Manager"]},{"pointer":"Datadog real time alert monitors for capturing and alerting on CI/CD of production apps.","highlights":["Datadog"]},{"pointer":"Integration of standalone React Native Module to bundle up with existing iOS App","highlights":["React Native","iOS App"]},{"pointer":"Migrated Context API based state management to Redux toolkit along with unmounting clean-up optimizations and reducing repetitive API calls","highlights":["Context API","Redux toolkit"]},{"pointer":"Deployed and created CI/CD pipelines for frontend and backend apps involving mocking calls, linting, unit testing, integration testing and e2e testing.","highlights":["CI/CD pipelines","mocking calls","linting","unit testing","integration testing","e2e testing"]}]},{"title":"Software Engineer","org":"Yoptima Media Pvt Ltd","startDate":1578853800000,"endDate":1635705000000,"bullets":[{"pointer":"End to End Analytics based Campaign Performance App (React + Express + Fast API & secured using google oAuth)","highlights":[]},{"pointer":"End to End User-manager & Alert Monitor Web App (React + (Express and Flask) & secured with JWT Authentication)","highlights":["User-manager & Alert Monitor Web App","JWT Authentication"]},{"pointer":"RESTful APIs to generate automated emails and alerts and developed tools to make data driven decisions.","highlights":[]},{"pointer":"End-to-end reporting Automation using Apache Superset, Google Big Query, Google Appscript and Google Data Studio.","highlights":["Apache Superset","Google Big Query","Google Appscript","Google Data Studio"]}]},{"title":"Robotics & Programming Mentor","org":"eckovation pvt. ltd.","startDate":1562956200000,"endDate":1594578600000,"bullets":[{"pointer":"Joined as a Matlab Programming mentor and later promoted to Robotics, IoT, Solidworks, Ansys, C, C++, etc. mentor.","highlights":[]},{"pointer":"Defined and articulated learning outcomes, including measurements, performance metrics and changes to improve student learning.","highlights":[]},{"pointer":"Took Doubt Sessions on Robotics, IoT, Matlab, SolidWorks, Ansys, etc. to classes of around 100+ students.","highlights":[]}]}]'
	);
	const [education, setEducation] = useState(
		'[{"title":"B-Tech in Mechanical Engineering","org":"Vellore Institute of Technology","gradeTotal":10,"gradeScored":8.87,"startDate":1471026600000,"endDate":1597257000000,"bullets":[{"pointer":"Programming Coursework: Computational Fluid Dynamics | Computer Vision | DSA and OOP | Numerical Simulation","highlights":["Programming Coursework:"]},{"pointer":"ME Coursework: CAD | CAM | 3D Simulation | Additive Manufacturing | Lathe Tools | Rapid Prototyping | Product Design","highlights":["ME Coursework:"]},{"pointer":"Co-Curricular: Radio Hosting and Production | Space Exploration Robotics Club | Technical Event Organizer & Volunteer","highlights":["Co-Curricular:"]}]},{"title":"senior secondary education [12th grade]","org":"kendriya vidyalaya ina, new delhi","startDate":1434133800000,"endDate":1465756200000,"bullets":[{"pointer":"CBSE Board | 93.2% Marks | Science Stream [PCM + Computer Science] | Junior Mathematical Olympiad (AIR 28)","highlights":["Junior Mathematical Olympiad (AIR 28)"]}]},{"title":"senior secondary education [10th grade]","org":"kendriya vidyalaya ina, new delhi.","startDate":1371061800000,"endDate":1402597800000,"bullets":[{"pointer":"CBSE Board | 9.6 CGPA | General Studies | SOF – Science Olympiad (Silver & Bronze Medallist)","highlights":["(Silver & Bronze Medallist)"]}]}]'
	);

	const [skills, setSkills] = useState(
		'[{"pointer":"Programming Languages: TypesScript | JavaScript | Python | Scala | Matlab | C++","highlights":["TypesScript","JavaScript","Python","Scala","Matlab","C++"]},{"pointer":"Tools: CI/CD | AEM | Datadog | Contentful | Firebase | GitHub Actions | Unit Testing | E2E and Integration Testing | Serverless","highlights":["CI/CD","AEM","Datadog","Contentful","Firebase","Unit Testing","E2E and Integration Testing","Serverless"]},{"pointer":"Frameworks: NEXT JS | React JS | React Native | Scala-Play | Node JS | Appscript | Flask | Fast API | Redux Toolkit | Sass | Tailwind | Jest","highlights":["NEXT JS","React JS","React Native","Scala-Play","Node JS","Appscript","Flask","Fast API","Redux Toolkit","Sass","Tailwind","Jest"]},{"pointer":"Technologies: Google Cloud | Authentication Protocols | JWT | Intuit QuickBooks | Datadog | Web Sockets | GraphQL | RESTful Protocols | SQL | Google Big Query | Cloud Functions | Docker Containerization","highlights":["Google Cloud","Authentication Protocols","JWT","Intuit QuickBooks","Datadog","Web Sockets","GraphQL","RESTful Protocols","SQL","Google Big Query","Cloud Functions","Docker Containerization"]},{"pointer":"Hardware: Microcontroller Raspberry Pi | (Arduino + Nodemcu) | Intel Galileo | Basler TOF Cam","highlights":["Microcontroller Raspberry Pi","Arduino","Nodemcu","Intel Galileo","Basler TOF Cam"]}]'
	);

	const [achievements, setAchievements] = useState(
		'[{"pointer":"Second Runner Up at HackForGood: Grab Hackathon 2022 (June, 2022)","highlights":[]},{"pointer":"Most Unique Submission at HackForGood: Grab Hackathon 2022 (June, 2022)","highlights":[]},{"pointer":"Community Mentoring App Award at Principal Hack (May, 2022)","highlights":[]},{"pointer":"GNEC Award at Mega Hack 2022 [Global NGO Prize] (Apr, 2022)","highlights":[]},{"pointer":"UiPath Innovation RPA Hackathon 2021 Top 7 Finalist (Dec, 2021)","highlights":[]},{"pointer":"Honourable Mention [Live Peer API] at Spark Blockchain University Hack (Aug, 2020)","highlights":[]},{"pointer":"Category Winner at FlutterThon-2020 [Have you tried Flutter?] (May, 2020)","highlights":[]},{"pointer":"Winner at UW Blockchain Hacks 2020 [Best Pitch] (May, 2020)","highlights":[]},{"pointer":"Top 30 Team Qualifier Award at PennApps (University of Pennsylvania) (Sep, 2019)","highlights":[]},{"pointer":" Winner at Autodesk Designathon (Mar, 2019)","highlights":[]},{"pointer":"Category award under best USE of HERE.COM API (HackHarvard-2018) (Oct, 2018)","highlights":[]},{"pointer":"Best AT&T technology innovation award (Jul, 2018)","highlights":[]},{"pointer":"Winner at summer Bio-fest (Apr, 2017)","highlights":[]},{"pointer":"Winner at reverse Engineering contest ASME (Jan, 2017)","highlights":[]},{"pointer":"1st Runner up at Formula Balloon ASME contest (Sep, 2016)","highlights":[]},{"pointer":"Winner at Mechanical conference (ASME) (Sep, 2016)","highlights":[]},{"pointer":"Bronze medallist at Science Olympiad foundation (Oct, 2015)","highlights":[]},{"pointer":"All India Rank 28 in Junior mathematics Olympiad (Mar, 2015)","highlights":[]},{"pointer":"Silver medallist at Science Olympiad foundation (Nov, 2013)","highlights":[]}]'
	);

	const ctx = {
		editMode,
		firstName,
		lastName,
		address,
		number,
		metaDetails,
		professionalExperience,
		education,
		skills,
		achievements,
		setAchievements,
		setEditMode,
		setSkills,
		setEducation,
		setProfessionalExperience,
		setMetaDetails,
		setNumber,
		setAddress,
		setFirstName,
		setLastName,
	};
	return <EditContext.Provider value={ctx}>{children}</EditContext.Provider>;
};
export { Provider };
export default useGetEditContext;
