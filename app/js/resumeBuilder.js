/*
This is empty on purpose! Your code to build the resume will go here.
 */

var arrayHelper = {
    appendList : function( list, placer ){
        list.forEach( function( element ){
            $( placer ).append( element );
            console.log( placer + "   |   " + element)
        } );
    },
    createList : function ( object ){
        for ( i = 0; i < object.length; i++ ){
            var list = [];
            list.push( object[i]);
            console.log( list );
        }
    }
}

var array = [ 1,2,3,4,5 ];

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

        var formattedContact = [
            HTMLmobile.replace( '%data%', bio.contacts.mobile ),
            HTMLemail.replace( '%data%', bio.contacts.email ),
            HTMLtwitter.replace( '%data%', bio.contacts.twitter ),
            HTMLgithub.replace( '%data%', bio.contacts.github ),
            HTMLlocation.replace( '%data%', bio.contacts.location )
        ]


        var contactsPlacer = '#topContacts, #footerContacts';
        arrayHelper.appendList( formattedContact, contactsPlacer );

        $( '#header' ).prepend( formattedRole ).prepend( formattedname );

        // arrayHelper.createList( bio.skills );
        arrayHelper.appendList( bio.skills, '#skills' )

        if ( bio.skills.length > 0 ){
            $( '#header' ).append( HTMLskillsStart );

            bio.skills.forEach( function( element ){
                var formattedSkills = HTMLskills.replace( '%data%', element );
                $( '#skills' ).append( formattedSkills );
            } )
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
