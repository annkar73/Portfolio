document.addEventListener("DOMContentLoaded", function() {
    let projects = [
        { name: "Tic-tac-toe", description: "Ett tre-i-rad för två personer", image:"assets/image1.png", caption: "En bild av Projekt 1", gitHubLink: "https://annkar73.github.io/tic-tac-toe/" },
        { name: "Memory", description: "Ett memoryspel av enklare slag.", image:"assets/image2.png", caption: "En bild av Projekt 2", gitHubLink: "https://annkar73.github.io/memory-game/" },
        { name: "Kalender med klocka", description: "En enkel kalender med klocka", image:"assets/image3.png", caption: "En bild av Projekt 3", gitHubLink: "https://annkar73.github.io/calendar/" },
        { name: "Lottogenerator", description: "En slumpgenerator för olika sifferspel, bland annat Lotto.", image:"assets/image1.png", caption: "En bild av Projekt 4", gitHubLink: "https://annkar73.github.io/lotto-generator/" },
        { name: "Konversationstartare", description: "En slumpgenerator för olika samtalsämnen.", image:"assets/image1.png", caption: "En bild av Projekt 5", gitHubLink: "https://annkar73.github.io/vue-conversation-starters/" },



        // Lägg till fler projekt här
    ];

    let projectList = document.getElementById("project-list");

    function goToGitHub(event) {
        let projectIndex = event.target.dataset.projectIndex;
        let project = projects[projectIndex];
        window.open(project.gitHubLink, '_blank');
    }

    projects.forEach(function(project, index) {
        let projectItem = document.createElement("div");
        projectItem.classList.add("project-item"); 

        let projectImageContainer = document.createElement("div");
        projectImageContainer.classList.add("project-image");

        let projectFigure = document.createElement("figure");
        projectFigure.classList.add("project-figure");
        let projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project.name;

        let projectCaption = document.createElement("figcaption");
        projectCaption.textContent = project.caption;
        projectCaption.classList.add("image-caption")
        
        let projectName = document.createElement("h3");
        projectName.textContent = project.name;
        
        let projectDescription = document.createElement("p");
        projectDescription.textContent = project.description;

        let githubLink = document.createElement("button");
        githubLink.textContent = "Se live";
        githubLink.classList.add("github-button");            
        githubLink.dataset.projectIndex = index;
        githubLink.addEventListener("click", goToGitHub);

        let projectContent = document.createElement("div");
        projectContent.classList.add("project-content");
        projectContent.appendChild(projectName);
        projectContent.appendChild(projectDescription);
        projectContent.appendChild(githubLink);

        
        projectFigure.appendChild(projectImage);
        projectFigure.appendChild(projectCaption);

        projectItem.appendChild(projectImageContainer);
        projectItem.appendChild(projectContent);

        projectImageContainer.appendChild(projectFigure);

        projectList.appendChild(projectItem);
    });
});
