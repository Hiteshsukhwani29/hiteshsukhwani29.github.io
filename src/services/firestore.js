import firebase from "firebase/app";
import "firebase/firestore";
import { getDate } from "./utils";

const firebaseConfig = {
    databaseURL: "https://portfolio-12073-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyB_nlstN70QI4OC36r9PRe3ghhRngv26Vo",
    authDomain: "portfolio-12073.firebaseapp.com",
    projectId: "portfolio-12073",
    storageBucket: "portfolio-12073.appspot.com",
    messagingSenderId: "1085157311255",
    appId: "1:1085157311255:web:bd2327637a95951ca72d52"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
else {
    firebase.app();
}

const db = firebase.firestore();

export const getDetails = async () => {
    const detailsRef = db.collection("details");
    const detailsDocRef = await detailsRef.doc("details").get();
    const contentDocRef = await detailsRef.doc("content").get();
    let detailsData, contentData;
    detailsData = await detailsDocRef.data();
    contentData = await contentDocRef.data();
    let detailsMap = new Map();
    for (const key in detailsData) {
        detailsMap[key] = detailsData[key];
    }
    for (const key in contentData) {
        detailsMap[key] = contentData[key];
    }
    return detailsMap;
}

export const getProjects = async () => {
    const projectCollection = db.collection("projects");
    const featuredProjectCollection = db.collection("featured-projects");
    const projectCollectionRef = await projectCollection.get();
    const featuredProjectCollectionRef = await featuredProjectCollection.get();
    const projectDocs = projectCollectionRef.docs;
    const featuredProjectsDocs = featuredProjectCollectionRef.docs;
    let projectDetails = [], featuredProjectDetails = [];
    for (let index = 0; index < projectDocs.length; index++) {
        let projectData = projectDocs[index].data();
        projectDetails.push(projectData);
    }
    projectDetails.sort((a, b) => {
        return a["id"] - b["id"];
    });
    for (let index = 0; index < featuredProjectsDocs.length; index++) {
        let projectData = featuredProjectsDocs[index].data();
        featuredProjectDetails.push(projectData);
    }
    featuredProjectDetails.sort((a, b) => {
        return a["id"] - b["id"];
    });
    let projectMap = new Map();
    projectMap["featured-projects"] = featuredProjectDetails;
    projectMap["projects"] = projectDetails;
    return projectMap;
}

export const getExperience = async () => {
    const experienceCollection = db.collection("experience");
    const experienceCollectionRef = await experienceCollection.get();

    const experienceDocs = experienceCollectionRef.docs;
    let experienceDetails = [];
    for (let index = 0; index < experienceDocs.length; index++) {
        let experienceData = experienceDocs[index].data();
        let startDate = experienceData["startDate"];
        experienceData["startDate"] = getDate(startDate);
        let startDateChars = startDate.split("/");
        experienceData["start-date"] = new Date(startDateChars[2], startDateChars[1], startDateChars[0]);

        let endDate = experienceData["endDate"];
        experienceData["endDate"] = getDate(endDate);
        if(endDate.search("/") !== -1){
            let endDateChars = endDate.split("/");
            experienceData["end-date"] = new Date(endDateChars[2], endDateChars[1], endDateChars[0]);
        }
        else{
            experienceData["end-date"] = new Date();
        }
        experienceDetails.push(experienceData);
    }
    experienceDetails.sort((a, b) => {
        return b["end-date"] - a["end-date"];
    });

    return experienceDetails;
}

export const getVoluntaryExperience = async () => {
    const experienceCollection = db.collection("voluntary-experience");
    const experienceCollectionRef = await experienceCollection.get();

    const experienceDocs = experienceCollectionRef.docs;
    let experienceDetails = [];
    for (let index = 0; index < experienceDocs.length; index++) {
        let experienceData = experienceDocs[index].data();
        let startDate = experienceData["startDate"];
        experienceData["startDate"] = getDate(startDate);
        let startDateChars = startDate.split("/");
        experienceData["start-date"] = new Date(startDateChars[2], startDateChars[1], startDateChars[0]);

        let endDate = experienceData["endDate"];
        experienceData["endDate"] = getDate(endDate);
        if(endDate.search("/") !== -1){
            let endDateChars = endDate.split("/");
            experienceData["end-date"] = new Date(endDateChars[2], endDateChars[1], endDateChars[0]);
        }
        else{
            experienceData["end-date"] = new Date();
        }
        experienceDetails.push(experienceData);
    }
    experienceDetails.sort((a, b) => {
        return b["end-date"] - a["end-date"];
    });

    return experienceDetails;
}