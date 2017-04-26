/*
This is empty on purpose! Your code to build the resume will go here.
 */

var arrayHelper = {
    appendList : function( list, selector ){
        list.forEach( function( element ){
            $( selector ).append( element );
        } );
    },
    createList : function ( list, placer, selector ){
        list.forEach( function( element ) {
            var formatted = placer.replace( '%data%', element );
            $( selector ).append( formatted );
        })
    }
}

var bio = {
    "name": "Josh Delacruz",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "4276-8065",
        "email": "joshisadesigner@me.com",
        "twitter": "@joshisadesigner",
        "github": "joshisadesigner",
        "location": "Guatemala City, Guatemala"
    },
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
    ],
    "display": function (){
        var formattedname = HTMLheaderName.replace( '%data%', bio.name );
        var formattedRole = HTMLheaderRole.replace( '%data%', bio.role );
        var formattedPic = HTMLbioPic.replace( '%data%', bio.biopic );
        var formattedMsg = HTMLwelcomeMsg.replace( '%data%', bio.welcomeMessage );
        var contactsSelector = '#topContacts, #footerContacts';

        var formattedContact = [
            HTMLmobile.replace( '%data%', bio.contacts.mobile ),
            HTMLemail.replace( '%data%', bio.contacts.email ),
            HTMLtwitter.replace( '%data%', bio.contacts.twitter ),
            HTMLgithub.replace( '%data%', bio.contacts.github ),
            HTMLlocation.replace( '%data%', bio.contacts.location )
        ]

        $( '#header' ).prepend( formattedRole ).prepend( formattedname );
        $( '#header' ).append( formattedPic );
        $( '#header' ).append( formattedMsg );

        arrayHelper.appendList( formattedContact, contactsSelector );

        if ( bio.skills.length > 0 ){
            $( '#header' ).append( HTMLskillsStart );
            arrayHelper.createList( bio.skills, HTMLskills, '#skills' );
        }
    }
}
bio.display();

var work = {
    "jobs": [
        {
            "employer": "Secure IP",
            "title": "Front-End Web Developer",
            "location": "Guatemala City, Guatemala.",
            "dates": "August 2016 to Date",
            "description": "Front-End Developer and UI/UX Designer role, in charge of the automatization of for the styles and scripts for americavoice.com, my.ameriavoice.com and secureip.io.",
        },
        {
            "employer": "Social Media Networks, Inc.",
            "title": "UI/UX Designer",
            "location": "Guatemala City, Guatemala.",
            "dates": "June 2015 to August 2016",
            "description": "Responsible for UI/UX interface for the client portal that made use of the ssnapp system."
        }
    ],
    "display": function(){

        for( var job in work.jobs ) {
            var formattedEmployer = HTMLworkEmployer.replace( '%data%', work.jobs[ job ].employer );
            var formattedTitle = HTMLworkTitle.replace( '%data%', work.jobs[ job ].title );
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            var formatted = [
                formattedEmployerTitle,
                HTMLworkDates.replace( '%data%', work.jobs[ job ].dates ),
                HTMLworkLocation.replace( '%data%', work.jobs[ job ].location ),
                HTMLworkDescription.replace( '%data%', work.jobs[ job ].description )
            ]

            $( '#workExperience' ).append( HTMLworkStart );
            arrayHelper.appendList( formatted, '.work-entry:last' );
            // $( '.work-entry:last' ).append( formattedEmployerTitle );
        }
    }
}
work.display();

var education = {
    "schools": [
        {
            "name": "Universidad de San Carlos de Guatemala",
            "location": "Guatemala City, Guatemala.",
            "degree": "BA",
            "dates": "August 2014",
            "url": "http://usac.edu.gt/",
            "majors": [ "Multimedia" ]
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer, Nanodegree",
            "school": "Udacity.com",
            "dates": "January 2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "display": function(){

        for ( var i = 0; i < education.schools.length; i++ ){

            var formattedName = HTMLschoolName.replace( '%data%', education.schools[i].name );
            var formattedDegree = HTMLschoolDegree.replace( '%data%', education.schools[i].degree );
            var formattedDates = HTMLschoolDates.replace( '%data%', education.schools[i].dates );
            var formattedLocation = HTMLschoolLocation.replace( '%data%', education.schools[i].location );
            var formattedMajor = HTMLschoolMajor.replace( '%data%', education.schools[i].majors );

            $( '#education' ).append( HTMLschoolStart );
            $( '.education-entry:last' ).append( formattedName + formattedDegree );
            $( '.education-entry:last' ).append( formattedDates );
            $( '.education-entry:last' ).append( formattedLocation );
            $( '.education-entry:last' ).append( formattedMajor );

        }

        for ( var i = 0; i < education.onlineCourses.length; i++ ){

            var formattedTitle = HTMLonlineTitle.replace( '%data%', education.onlineCourses[i].title );
            var formattedSchool = HTMLonlineSchool.replace( '%data%', education.onlineCourses[i].school );
            var formattedDates = HTMLonlineDates.replace( '%data%', education.onlineCourses[i].dates );
            var formattedUrl = HTMLonlineURL.replace( '%data%', education.onlineCourses[i].url );

            $( '#education').append( HTMLonlineClasses );
            $( '#education' ).append( HTMLschoolStart );
            $( '.education-entry:last' ).append( formattedTitle + formattedSchool );
            $( '.education-entry:last' ).append( formattedDates );
            $( '.education-entry:last' ).append( formattedUrl );

        }
    }
}
education.display();

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
