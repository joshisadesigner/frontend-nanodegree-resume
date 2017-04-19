/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
    "name": "Josh",
    "role": "Front-End Web Developer",
    "welcomeMessage": "Welcome, I\"m learning front-end development!",
    "biopic": "images/me.jpg",
    "contacts": [{
        "mobile": "4276-8065",
        "email": "joshisadesigner@me.com",
        "twitter": "@joshisadesigner",
        "github": "joshisadesigner",
        "location": "Guatemala City, Guatemala"
    }],
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
            "dates": "August 2016 to Date",
            "location": "Guatemala City, Guatemala.",
            "description": "",
        },
        {
            "employer": "Social Media Networks, Inc.",
            "title": "UI/UX Designer",
            "dates": "June 2015 to August 2016",
            "location": "Guatemala City, Guatemala.",
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
            "title": "Ghost Theme",
            "dates": "2016",
            "description": "This is a Ghost theme moder, cleand and content focus for blogging, it is 100% resonsive means it will fit in various devices of different size. Featuring an image or a video in your post is very simple. You can setup a beautiful personal blog. It also support Ghost's author cover and tag description functionality, It's suitable for meditation, travel or hobby.",
            "images": [ 'images/p-01-01.jpg', 'images/p-01-02.jpg']
        },
        {
            "title": "Vyb UI/UX",
            "dates": "2016",
            "description": "UI/UX Design for social media app. VYB (Pronounced Vibe) app tries to capture life's moments from your social media networks in real time using our vMoji and track them through VYB Trail.",
            "images": [ 'images/p-02-01.jpg', 'images/p-02-02.jpg']
        }
    ]
bio.display = function() {
    var formattedHeaderName = HTMLheaderName.replace( '%data%', bio.name );
    var formattedHeaderRole = HTMLheaderRole.replace( '%data%', bio.name );
    var formattedBioPic = HTMLbioPic.replace( '%data%', bio.biopic );
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace( '%data%', bio.welcomeMessage );

    $( '#header' ).prepend( formattedHeaderName ).append( formattedHeaderRole ).append(formattedBioPic,formattedWelcomeMsg);
    $( '#header' ).append( HTMLskillsStart );

    bio.skills.forEach( function( element ){
        var formattedSkills = HTMLskills.replace( '%data%', element );
        $( '#skills' ).append( formattedSkills );
    } )
}

bio.display();


for( var job in work.jobs ) {
    $( '#workExperience' ).append( HTMLworkStart );

    var formattedWorkEmployer = HTMLworkEmployer.replace( '%data%', work.jobs[ job ].employer );
    var formattedWorkTitle = HTMLworkTitle.replace( '%data%', work.jobs[ job ].title );

    var formattedWorkemployerTitle = formattedWorkEmployer + formattedWorkTitle;

    $( '.work-entry:last' ).append( formattedWorkemployerTitle );
}

projects.display = function() {

    for ( var i = 0; i < projects.length; i ++ ) {
        $( '#projects' ).append( HTMLprojectStart );
        var formattedProjectTitle = HTMLprojectTitle.replace( '%data%', projects[i].title );
        var formattedProjectDates = HTMLprojectDates.replace( '%data%', projects[i].dates );
        var formattedProjectDescription = HTMLprojectDescription.replace( '%data%', projects[i].description );

            $( '.project-entry:last' ).append( formattedProjectTitle );
            $( '.project-entry:last' ).append( formattedProjectDates );
            $( '.project-entry:last' ).append( formattedProjectDescription );

        for ( var a = 0; a < projects[i].images.length; a++ ) {
            var formattedProjectImage = HTMLprojectImage.replace( '%data%', projects[i].images[a] );
            $( '.project-entry:last' ).append( formattedProjectImage );
        }
    }

}

projects.display();

$('#mapDiv').append(googleMap);
