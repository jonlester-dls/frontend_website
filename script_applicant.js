document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-menu a');
    const sectionTitle = document.getElementById('section-title');
    const sectionContent = document.getElementById('section-content');
    const imageElement = sectionContent.querySelector('img'); // Select the existing image element

    // Define content and images for each section
    const contentMap = {
        
        application: {
            title: 'Application',
            content: `
                <table class="table-container">
                    <thead>
                        <tr>
                            <th>Job Title</th>
                            <th>Job Req</th>
                            <th>My Application Status</th>
                            <th>Date Submitted</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Phlebotomist</td>
                            <td>R000110477</td>
                            <td><span class="status">Application In Process</span></td>
                            <td>November 11, 2024</td>
                            
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
