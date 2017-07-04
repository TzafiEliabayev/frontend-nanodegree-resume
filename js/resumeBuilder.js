// /* Summary
//         $("#htmlIdName")
// */


// var myMail = "tzafiwaisblat@gmail.com";
// var myNewMail = myMail.replace("tzafiwaisblat", "tzafi.eli");
// console.log(myMail);
// console.log(myNewMail);


// var name = "Tzafi Eliabayev";
// var role = "Web Developer";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").prepend(formattedRole).prepend(formattedName);

// var contactInfo = "tzafi.eli@gmail.com";
// var pictureURL = "images/profile.jpg";
// var welcomeMessage = "Hi there, nice to meet you!";
// var skills = ["Nice", "kind"];

// var bio = {
//     "name" : name,
//     "role" : role,
//     "contacts" : { "email": contactInfo},
//     "bioPic" : pictureURL,
//     "welcomeMessage" : welcomeMessage,
//     "skills" : skills
// };

// $("#main").append(bio);

var work = {
    "jobs": [
    {
        "employer": "Cyberbit",
        "title": "Developer",
        "location": "Raanana",
        "dates": "July 15' - May 17'",
        "description": "Developer with C# and WPF"
    },
    {
        "employer": "Qualitest",
        "title": "QA",
        "location": "Natanya",
        "dates": "Jan 11' - July 15'",
        "description": "QA leader"
    }]
}

var projects = {
    "projects": [
    {
        "title": "",
        "dates": "",
        "description": "",
        "images": ["url", "url2"]
    },
    {
        "title": "",
        "dates": "",
        "description": "",
        "images": ["url", "url2"]
    }]
}

var bio = {
    "name": "Tzafi Eliabayev",
    "role": "WEB Developer",
    "welcomeMessage": "Hi there! Nice to meet you :)",
    "biopic": "images/profile.jpg",
    "contacts": {
        "mobile": "054-9994509",
        "email": "tzafi.eli@gmail.com",
        "github": "Tzafi Eliabayev",
        "location": "Holon, Israel"
    },
    "skills": ["skill1", "skill2"]
}

var education = {
    "schools": [
    {
        "name": "Academit Tel-Aviv - Yaffo",
        "location": "Yaffo",
        "degree": "BSc",
        "dates": "2012-2016",
        "url": "",
        "majors": ["Computer Science"]
    },
    {
        "name": "Hebrew University",
        "location": "Rehovot",
        "degree": "BSc",
        "dates": "2009-2011",
        "url": "",
        "majors": ["Animal Science"]
    }],
    "onlineCourses": [
    {
        "title": "WEB Developing",
        "school": "Udacity",
        "dates": "July-August 2017",
        "url": ""
    }]
}



// Your code goes here! Let me help you get started

// function locationizer(work_obj) {
//     var locations = [];
//     work_obj.foreach(function(entry)) {
//         locations.append(entry.location);
//     }
// }

// Did locationizer() work? This line will tell you!
// console.log(locationizer(work));