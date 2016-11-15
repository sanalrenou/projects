var bio = {
    "name": "Sanal Renou",
    "role": "Web Developer",
    "contacts": {
        "mobile": "9632306936",
        "email": "sanal.renou@gmail.com",
        "github": "sanalrenou",
        "twitter": "not registered",
        "location": "Purnea,Bihar,India"
    },
    "welcomeMessage": "Where there is a will - there is a way",
    "skills": ["C programming", "HTML", "Logic design", "integrated design"],
    "bioPic": "images/me.jpg"
};

function displaybio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);
    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#header").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#header").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#header").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#header").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedLocation);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);




}

displaybio();

$("#main").append(internationalizeButton);
function inName(name) {
    name = name.trim().split("");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice[1].toLowerCase();

    return name[0] + "" + name[1];

}


var education = {
    "schools": [{
        "name": "S.R.DAV Public School",
        "location": "Purnea, Bihar",
        "degree": "SSLC",
        "dates": "1999 - 2010"

    }, {
        "name": "Bijendra Public School",
        "location": "Purnea, Bihar",
        "degree": "PUC",
        "dates": "2011 - 2012"

    }],
    "onlineCourses": [{
        "title": "Fasttrack Course",
        "school": "Infosys",
        "dates": 2016,
        "url": "infosys.com"
    }, {
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "udacity.com"
    }]
};
var work = {
    "jobs": [{
        "employer": "DSCE",
        "title": "Head Coordinator",
        "dates": "January 2013 - April 2015",
        "location": "Bangaluru,Karnataka",
        "description": "Manage college activities"
    }, {
        "employer": "BSNL",
        "title": "Intern ",
        "dates": "September 2015 - October 2015 ",
        "location": "Katihar,Bihar",
        "description": "Exchange,C-Dot,OFC Cable,Splicing Demo"
    }, {
        "employer": "Infosys Ltd",
        "title": "System engineer",
        "dates": "October 2016 - Up to date",
        "location": "Mysore,Karnataka",
        "description": "Design and monitoring of webpages"
    }]
};
var projects = {
    "projects": [{
        "title": "RFID technology in Attendance System",
        "dates": "June - July 2015",
        "description": "Attendance monitoring using RFID technoloy",
        "images": ["images/Attendance monitor.jpg"]
    }, {
        "title": "GPS based antenna tracking system",
        "dates": "January - June 2016",
        "description": "Tracking of the moving antenna using GPS technology",
        "images": ["images/GPS tracker.jpg"]
    }, {
        "title": "Mosquito Repellent using 555 timer",
        "dates": "May 2014",
        "description": "Mosquito Repellent device is constructed using 555 timer chip",
        "images": ["images/repeller.jpg"]
    }]
};


if (bio.skills.length > 0) {
     $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);


}




function displayWork() {

    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedlocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }

}
displayWork();

$(document).click(function(loc) {
    // your code goes here
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});
projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjects = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedProjects);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
};
projects.display();

education.display = function() {

    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedEducation = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedEducation);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedLocation);
    }
    $("#education").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitl = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        $(".education-entry:last").append(formattedTitl);
        var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedschool);
        var formattedDtes = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDtes);
    }

};

education.display();

$("#mapDiv").append(googleMap);