function showSection(sectionId, collapseProjects) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId).classList.remove('hidden');

    if (sectionId !== 'project-content') {
        const projectDetails = document.getElementById('project-details');
        projectDetails.innerHTML = '';
    }

    const sidebarItems = document.querySelectorAll('.sidebar ul > li');
    sidebarItems.forEach(item => item.classList.remove('selected'));
    const projectItems = document.querySelectorAll('#projects-list li');
    projectItems.forEach(item => item.classList.remove('selected'));


    document.querySelector(`[onclick="showSection('${sectionId}', true)"]`).classList.add('selected');

    if (collapseProjects) {
        const projectsList = document.getElementById('projects-list');
        projectsList.style.maxHeight = '0';
        setTimeout(() => {
            projectsList.classList.add('hidden');
        }, 300);
    }
}

function toggleProjects() {
    const projectsList = document.getElementById('projects-list');
    if (projectsList.classList.contains('hidden')) {
        projectsList.classList.remove('hidden');
        projectsList.style.maxHeight = projectsList.scrollHeight + 'px';
    } else {
        projectsList.style.maxHeight = '0';
        setTimeout(() => {
            projectsList.classList.add('hidden');
        }, 300);
    }
}

async function showProjectContent(projectId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    document.getElementById('project-content').classList.add('active');
    document.getElementById('project-content').classList.remove('hidden');

    const projectDetails = document.getElementById('project-details');
    try {
        // Adjust the path for static hosting
        const response = await fetch(`./projects/${projectId}/main.md`);
        if (response.ok) {
            const markdownText = await response.text();
            projectDetails.innerHTML = marked.parse(markdownText);
        } else {
            projectDetails.innerHTML = `<p>Coming soon...</p>`;
        }
    } catch (error) {
        projectDetails.innerHTML = `<p>Coming soon...</p>`;
    }

    const sidebarItems = document.querySelectorAll('.sidebar ul > li');
    sidebarItems.forEach(item => item.classList.remove('selected'));
    const projectItems = document.querySelectorAll('#projects-list li');
    projectItems.forEach(item => item.classList.remove('selected'));

    // Ensure the correct project is highlighted
    document.querySelector(`[onclick="showProjectContent('${projectId}')"]`).classList.add('selected');
}

document.querySelectorAll('#projects-list li').forEach(projectItem => {
    projectItem.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    showSection('about', true);
    const projectsList = document.getElementById('projects-list');
    projectsList.classList.add('hidden');
});