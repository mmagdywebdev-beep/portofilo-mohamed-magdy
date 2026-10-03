var about=document.querySelector(".about-button");

var boxabout=document.querySelector(".parent");
var imgabout=document.querySelector(".hanging-container")

var iconbox=document.querySelector(".clos-box")


// nev par link 
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('menulist');


menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});







about.addEventListener("click",function(){
    boxabout.style.display="block";
    
    imgabout.style.display="none"

})

iconbox.addEventListener("click",function(){
     boxabout.style.display="none";
     imgabout.style.display="block"
})




// ========================================
// PROJECT DATA
// ========================================

const projects = {

    // ====================================
    // PROJECT 1
    // ====================================

    democracy: {

        title: "LUX TIME-E-COMMERCE",

        description:
            "A modern and responsive web application designed to provide a simple, fast and user-friendly experience across all devices.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Git"
        ],

        images: [
            "imageprotofilo/img1.png",
            "imageprotofilo/img2.png",
            "imageprotofilo/img3.png",
            "imageprotofilo/img4.png"
        ],

        liveDemo: "#",

        github: "#"
    },


    // ====================================
    // PROJECT 2
    // ====================================

    neformat: {

        title: "AUDIO BEATS STORE",

        description:
            "A modern and responsive website with a clean interface and smooth user experience across different devices.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Git"
        ],

        images: [
            "imageprotofilo/pro2img11.jpeg",
            "imageprotofilo/pro2img2.jpeg",
            "imageprotofilo/pro2img3.jpeg",
            "imageprotofilo/pro2img4.jpeg"
        ],

        liveDemo: "#",

        github: "#"
    },


    // ====================================
    // PROJECT 3
    // ====================================

    bbe: {

        title: "FIT GYM MANAGEMENT",

        description:
            "A professional and responsive website designed to present the club, its activities and different sections.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Git"
        ],

        images: [
            "imageprotofilo/pro4img1.jpeg",
            "imageprotofilo/pro4img2.jpeg",
            "imageprotofilo/pro4img3.jpeg",
            "imageprotofilo/pro4img4.jpeg"
        ],

        liveDemo: "#",

        github: "#"
    }

};


// ========================================
// GET HTML ELEMENTS
// ========================================

const projectFolders =
    document.querySelectorAll(".project-folder");

const projectModal =
    document.getElementById("projectModal");

const closeProject =
    document.getElementById("closeProject");

const projectTitle =
    document.getElementById("projectTitle");

const projectDescription =
    document.getElementById("projectDescription");

const technologies =
    document.getElementById("technologies");

const liveDemo =
    document.getElementById("liveDemo");

const githubLink =
    document.getElementById("githubLink");


// Images

const image1 =
    document.getElementById("image1");

const image2 =
    document.getElementById("image2");

const image3 =
    document.getElementById("image3");

const image4 =
    document.getElementById("image4");


// ========================================
// OPEN PROJECT
// ========================================

projectFolders.forEach(function(folder) {

    folder.addEventListener("click", function() {

        // Get project name
        const projectId =
            folder.dataset.project;

        // Get project data
        const project =
            projects[projectId];


        // Safety check
        if (!project) {
            return;
        }


        // ==================================
        // PROJECT TITLE
        // ==================================

        projectTitle.textContent =
            project.title;


        // ==================================
        // PROJECT DESCRIPTION
        // ==================================

        projectDescription.textContent =
            project.description;


        // ==================================
        // PROJECT IMAGES
        // ==================================

        image1.src =
            project.images[0];

        image2.src =
            project.images[1];

        image3.src =
            project.images[2];

        image4.src =
            project.images[3];


        // ==================================
        // PROJECT LINKS
        // ==================================

        liveDemo.href =
            project.liveDemo;

        githubLink.href =
            project.github;


        // ==================================
        // TECHNOLOGIES
        // ==================================

        technologies.innerHTML = "";


        project.technologies.forEach(function(tech) {

            const span =
                document.createElement("span");

            span.textContent =
                tech;

            technologies.appendChild(span);

        });


        // ==================================
        // OPEN MODAL
        // ==================================

        projectModal.classList.add("active");


        // Stop page scrolling
        document.body.style.overflow =
            "hidden";

    });

});


// ========================================
// CLOSE BUTTON
// ========================================

closeProject.addEventListener("click", function() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

});


// ========================================
// CLICK OUTSIDE MODAL
// ========================================

projectModal.addEventListener("click", function(event) {

    if (event.target === projectModal) {

        projectModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ========================================
// ESC KEY
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        projectModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});