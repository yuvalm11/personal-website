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
    const sidebar = document.querySelector('.fixed-sidebar');
    sidebar.classList.remove('active');
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

async function fetchMarkdownFile(owner, repo, filePath) {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching file: ${response.statusText}`);
        }
        const data = await response.json();
        const content = atob(data.content);
        return content;
    } catch (error) {
        console.error(error);
        return null;
    }
}

async function showProjectContent(projectId) {
    window.location.hash = projectId;

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });

    document.getElementById('project-content').classList.add('active');
    document.getElementById('project-content').classList.remove('hidden');

    const projectDetails = document.getElementById('project-details');
    try {
        const content = await fetchMarkdownFile('yuvalm11', 'personal-website', `projects/${projectId}/main.md`);
        projectDetails.innerHTML = content ? marked.parse(content) : `<p>Coming soon...</p>`;
    } catch (error) {
        projectDetails.innerHTML = `<p>Coming soon...</p>`;
    }

    document.querySelectorAll('.sidebar ul > li').forEach(item => item.classList.remove('selected'));
    document.querySelectorAll('#projects-list li').forEach(item => item.classList.remove('selected'));

    const selectedProject = document.querySelector(`[onclick="showProjectContent('${projectId}')"]`);
    if (selectedProject) selectedProject.classList.add('selected');

    toggleSidebar();
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

function toggleSidebar() {
    const sidebar = document.querySelector('.fixed-sidebar');
    sidebar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const hash = window.location.hash.substring(1); // Remove the '#' from URL
    if (hash) {
        showProjectContent(hash);
    } else {
        showSection('about', true);
    }
});

window.addEventListener("hashchange", () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showProjectContent(hash);
    }
});
