document.addEventListener('DOMContentLoaded', function() {
    // Define all your skills with their image paths and names
    const skills = {
        languages: [
            { name: "C++", image: "../assets/images/languages/c++.png" },
            { name: "Python", image: "../assets/images/languages/python.png" },
            { name: "Java", image: "../assets/images/languages/java.png" },
            { name: "SQL", image: "../assets/images/languages/sql.png" },
            { name: "HTML", image: "../assets/images/languages/html.png" },
            { name: "css", image: "../assets/images/languages/css.png" },
            { name: "JavaScript", image: "../assets/images/languages/js.svg" },
            
            
            
        ],
        ai: [
            { name: "NumPy", image: "../assets/images/AI Libraries and Frameworks/numpy.png" },
            { name: "Pandas", image: "../assets/images/AI Libraries and Frameworks/pandas.png" },
            { name: "MatplotLib", image: "../assets/images/AI Libraries and Frameworks/matpoltlib.png" },
            { name: "Scikit-learn", image: "../assets/images/AI Libraries and Frameworks/scikit-learn.png" },
            { name: "TensorFlow", image: "../assets/images/AI Libraries and Frameworks/Tensorflow.png" },
            { name: "LangChain", image: "../assets/images/AI Libraries and Frameworks/langchain.svg" },
            { name: "Agno", image: "../assets/images/AI Libraries and Frameworks/agno.jpg" },
        ],
        webdev: [
            { name: "Node.js", image: "../assets/images/Web Development Libraries and Frameworks/Node.js.png" },
            { name: "Express", image: "../assets/images/Web Development Libraries and Frameworks/Express.png" },
            { name: "React", image: "../assets/images/Web Development Libraries and Frameworks/React.png" },
            { name: "Flask", image: "../assets/images/Web Development Libraries and Frameworks/Flask.png" },
            { name: "Beautiful Soup", image: "../assets/images/Web Development Libraries and Frameworks/beautifulsoup.png" },
            { name: "Jinja", image: "../assets/images/Web Development Libraries and Frameworks/jinja.svg" },
            { name: "ejs", image: "../assets/images/Web Development Libraries and Frameworks/ejs.svg" },
            { name: "Selenium", image: "../assets/images/Web Development Libraries and Frameworks/Selenium.png" },
            { name: "beautifulsoup", image: "../assets/images/Web Development Libraries and Frameworks/beautifulsoup.png"}
        ],
        databases: [
            { name: "MongoDB", image: "../assets/images/Databases/MongoDB.png" },
            { name: "MySQL", image: "../assets/images/Databases/MySQL.png" },
            { name: "PostgreSQL", image: "../assets/images/Databases/PostgresSQL.png"}
        ],
        tools: [
            { name: "GitHub", image: "../assets/images/Tools and platform/GitHub.png" },
            { name: "Google Cloud", image: "../assets/images/Tools and platform/Google Cloud.png" },
            { name: "Jupyter", image: "../assets/images/Tools and platform/Jupyter.png" },
            { name: "PyTest", image: "../assets/images/Tools and platform/pytest.png" },
            { name: "Hugging Face", image: "../assets/images/Tools and platform/huggingface.png" },
        ]
    };

    // Function to create and populate skill cards
    function populateSkills(category, gridId) {
        const grid = document.getElementById(gridId);
        
        skills[category].forEach(skill => {
            const card = document.createElement('div');
            card.className = 'skill-card';
            
            const img = document.createElement('img');
            img.src = skill.image;
            img.alt = skill.name;
            
            const span = document.createElement('span');
            span.textContent = skill.name;
            
            card.appendChild(img);
            card.appendChild(span);
            grid.appendChild(card);
        });
    }
    
    // Populate all skill categories
    populateSkills('languages', 'languages-grid');
    populateSkills('ai', 'ai-grid');
    populateSkills('webdev', 'webdev-grid');
    populateSkills('databases', 'db-grid');
    populateSkills('tools', 'tools-grid');
    
    // Add animation when skills come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    setTimeout(() => {
        document.querySelectorAll('.skill-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});
