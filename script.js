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
        if (content) {
            projectDetails.innerHTML = marked.parse(content);
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

    document.querySelector(`[onclick="showProjectContent('${projectId}')"]`).classList.add('selected');

    toggleSidebar()
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
