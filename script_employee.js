document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-menu a');
    const sectionTitle = document.getElementById('section-title');
    const sectionContent = document.getElementById('section-content');
    const imageElement = sectionContent.querySelector('img'); // Select the existing image element

    // Define content and images for each section
    const contentMap = {
        
        recruitment: {
            title: 'Recruitment',
            content: `
                <p>This is the About section. Here you can add more details about yourself or your application.</p>
                <table class="table-container">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job Title</th>
                            <th>Job Req</th>
                            <th>My Application Status</th>
                            <th>Date Submitted</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jesser Alesna</td>
                            <td>Phlebotomist</td>
                            <td>R000110477</td>
                            <td><span class="status">Application In Process</span></td>
                            <td>November 11, 2024</td>
                            <td><a href="assets/resume.pdf" download="Application_Resume_R000116014.pdf" class="download-link">Download PDF</a><td>
                        </tr>
                        <tr>
                            <td>Juan Dela Cruz</td>
                            <td>Medical Technician</td>
                            <td>R000116014</td>
                            <td><span class="status">Needs Requirement</span></td>
                            <td>October 25, 2024</td>
                            <td><a href="assets/resume.pdf" download="Application_Resume_R000116014.pdf" class="download-link">Download PDF</a><td>
                        </tr>
                        <tr>
                            <td>Michael Thanasis</td>   
                            <td>Medical Technologist</td>
                            <td>R000211015</td>
                            <td><span class="status">Completed</span></td>
                            <td>October 1, 2024</td>
                            <td><a href="assets/resume.pdf" download="Application_Resume_R000116014.pdf" class="download-link">Download PDF</a><td>
                        </tr>
                    </tbody>
                </table>
            `,

        },
        portfolio: {
            title: 'Portfolio',
            content: '<p>Welcome to the Portfolio section. Showcase your work or projects here.</p>',
            image: 'portfolio.jpg',
        },
        orgchart: {
            title: 'Org Chart',
            content: '',
            image: 'assets/org chart.jpg',
        },
    };

    // Add click event listeners to sidebar links
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Remove active class from all links
            links.forEach(l => l.classList.remove('active'));

            // Add active class to the clicked link
            link.classList.add('active');

            // Get the section to load
            const section = link.getAttribute('data-section');

            // Update the content, title, and image
            sectionTitle.textContent = contentMap[section].title;
            sectionContent.innerHTML = contentMap[section].content;
            if (contentMap[section].image) {
                sectionContent.innerHTML += `<img src="${contentMap[section].image}" alt="${contentMap[section].title} Image">`;
            }
        });
    });
});
