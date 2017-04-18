/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "Josh",
    "role": "Front-End Web Developer",
    "contacts": [{
        "mobile": "4276-8065",
        "email": "joshisadesigner@me.com",
        "twitter": "@joshisadesigner",
        "github": "joshisadesigner",
        "location": "Guatemala City, Guatemala"
    }],
    "biopic": "images/me.jpg",
    "welcomeMessage": "Welcome, I\"m learning front-end development!",
    "skills": [
        "Photoshop",
        "Illustrator",
        "InDesign",
        "Sketch",
        "HTML",
        "CSS",
        "JavaScript"
    ]
}

var work = {
    "jobs": [
        {
            "employer": "Secure IP",
            "title": "Front-End Web Developer",
            "location": "Guatemala City, Guatemala.",
            "dates": "August 2016 to Date",
            "description": "",
        },
        {
            "employer": "Social Media Networks, Inc.",
            "title": "UI/UX Designer",
            "location": "Guatemala City, Guatemala.",
            "dates": "June 2015 to August 2016",
            "description": ""
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Universidad de San Carlos de Guatemala",
            "location": "Guatemala City, Guatemala.",
            "degree": "",
            "dates": "August 2014",
            "url": "http://usac.edu.gt/",
            "majors": [ "BA" ]
        }
    ],
    "onlineCourses": [
        {
            "name": "Front-End Web Developer, Nanodegree",
            "location": "Guatemala City, Guatemala.",
            "degreeDate": "January 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
            "majors": []
        }
    ]
}

var projects =
    [
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        }
    ]

var formattedHeaderName = HTMLheaderName.replace( '%data%', bio.name );
var formattedHeaderRole = HTMLheaderRole.replace( '%data%', bio.name );

$( '#header' ).append( formattedHeaderName ).prepend( formattedHeaderRole );

if ( bio.skills.length > 0 ){
    $( '#header' ).append( HTMLskillsStart );

    bio.skills.forEach( function( element ){
        var formattedSkills = HTMLskills.replace( '%data%', element );
        $( '#skills' ).append( formattedSkills );
    } )
}

for( var job in work.jobs ) {
    $( '#workExperience' ).append( HTMLworkStart );

    var formattedWorkEmployer = HTMLworkEmployer.replace( '%data%', work.jobs[ job ].employer );
        console.log( work.jobs[ job ].employer );

    var formattedWorkTitle = HTMLworkTitle.replace( '%data%', work.jobs[ job ].title );
        console.log( work.jobs[ job ].title );

    var formattedWorkemployerTitle = formattedWorkEmployer + formattedWorkTitle;

    $( '.work-entry:last' ).append( formattedWorkemployerTitle );
}
