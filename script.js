// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Skill Bars Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Skills section is visible, animating skill bars...');
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            console.log('Found skill bars:', skillBars.length);
            skillBars.forEach((bar, index) => {
                const progress = bar.getAttribute('data-progress');
                console.log(`Animating bar ${index + 1} to ${progress}%`);
                setTimeout(() => {
                    bar.style.width = progress + '%';
                    console.log(`Set bar ${index + 1} width to ${progress}%`);
                }, 200 * index);
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    console.log('Skills section found, starting observer...');
    skillObserver.observe(skillsSection);
} else {
    console.error('Skills section not found!');
}

// Typing Effect for Hero Name
const nameElement = document.querySelector('.name');
if (nameElement) {
    const nameText = nameElement.textContent;
    nameElement.textContent = '';
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < nameText.length) {
            nameElement.textContent += nameText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 1000);
}

// Terminal Typing Effect
function initTerminalEffect() {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = typingText.textContent;
        typingText.textContent = '';
        let charIndex = 0;
        
        function typeTerminalText() {
            if (charIndex < text.length) {
                typingText.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeTerminalText, 50);
            }
        }
        
        setTimeout(typeTerminalText, 2000);
    }
}

// Enhanced Particle System
function createCyberParticles() {
    const cyberGrid = document.querySelector('.cyber-grid');
    if (!cyberGrid) return;

    // Create floating data particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(0, 255, 255, ${Math.random() * 0.8})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 20 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.boxShadow = `0 0 ${Math.random() * 15 + 5}px rgba(0, 255, 255, ${Math.random() * 0.6})`;
        cyberGrid.appendChild(particle);
    }
    
    // Create floating binary code
    for (let i = 0; i < 30; i++) {
        const binary = document.createElement('div');
        binary.style.position = 'absolute';
        binary.style.color = `rgba(0, 255, 255, ${Math.random() * 0.4})`;
        binary.style.fontSize = Math.random() * 8 + 6 + 'px';
        binary.style.fontFamily = 'monospace';
        binary.style.left = Math.random() * 100 + '%';
        binary.style.top = Math.random() * 100 + '%';
        binary.textContent = Math.random() > 0.5 ? '1' : '0';
        binary.style.animation = `float-binary ${Math.random() * 15 + 10}s linear infinite`;
        binary.style.animationDelay = Math.random() * 10 + 's';
        binary.style.textShadow = `0 0 5px rgba(0, 255, 255, 0.8)`;
        cyberGrid.appendChild(binary);
    }
}

// Add floating binary animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float-binary {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

createCyberParticles();
initTerminalEffect();
initAchievementModal();

// Achievement Modal System
const achievementData = {
    innovation: {
        title: "Best Innovation Award",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
        description: "Received the prestigious Best Innovation Award for developing an AI-powered customer service solution that reduced response time by 60% and increased customer satisfaction by 45%. The project utilized machine learning algorithms and natural language processing to create an intelligent chatbot system.",
        date: "2023",
        category: "Award",
        highlights: [
            "Led a team of 5 developers in creating the AI solution",
            "Implemented using Python, TensorFlow, and React",
            "Achieved 60% reduction in customer response time",
            "Increased customer satisfaction scores by 45%",
            "Deployed across 3 major company departments"
        ]
    },
    certification: {
        title: "AWS Solutions Architect",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
        description: "Successfully earned the AWS Solutions Architect Associate certification, demonstrating expertise in designing distributed systems on AWS platform. This certification validates skills in deploying, managing, and operating scalable, highly available, and fault-tolerant systems on AWS.",
        date: "2022",
        category: "Certification",
        highlights: [
            "Mastered AWS core services: EC2, S3, RDS, VPC",
            "Designed cost-optimized and secure cloud architectures",
            "Implemented infrastructure as code using CloudFormation",
            "Knowledge of serverless architectures and microservices",
            "Security best practices and compliance requirements"
        ]
    },
    opensource: {
        title: "Open Source Contributor",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
        description: "Active contributor to the open source community with multiple projects gaining significant traction. Personal GitHub repositories have accumulated over 500 stars combined, and regularly contribute to popular open source projects including bug fixes, feature additions, and documentation improvements.",
        date: "2021-Present",
        category: "Open Source",
        highlights: [
            "Created 3 popular open source libraries with 500+ stars",
            "Regular contributor to major JavaScript frameworks",
            "Maintained active GitHub profile with 100+ contributions",
            "Community mentor for junior developers",
            "Published technical articles and tutorials"
        ]
    },
    speaker: {
        title: "Tech Speaker",
        image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
        description: "Invited speaker at 10+ tech conferences and meetups, sharing knowledge on modern web development, cloud technologies, and best practices. Presented to audiences ranging from 50 to 500+ attendees, covering topics from beginner to advanced levels.",
        date: "2020-Present",
        category: "Speaking",
        highlights: [
            "Spoken at 10+ tech conferences and meetups",
            "Presented to audiences of 50-500+ attendees",
            "Topics: React, Node.js, Cloud Architecture, DevOps",
            "Mentored 50+ junior developers through talks",
            "Received consistently high speaker ratings (4.8/5.0)"
        ]
    }
};

// Internship Certificates Modal Functionality
function openInternshipCertificates() {
    console.log('Opening internship certificates modal...');
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.style.display = 'flex';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Internship certificates modal opened successfully');
    } else {
        console.error('Certificate modal not found!');
        alert('Certificate modal not found!');
    }
}

function closeInternshipCertificates() {
    console.log('Closing internship certificates modal...');
    const modal = document.getElementById('certificateModal');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        console.log('Internship certificates modal closed successfully');
    }
}

// Initialize internship certificates modal
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing internship certificates modal...');
    
    // Test if modal exists
    const modal = document.getElementById('certificateModal');
    const button = document.querySelector('.internship-cert-btn');
    const closeBtn = document.getElementById('closeCertificateModal');
    
    console.log('Certificate modal found:', !!modal);
    console.log('Internship cert button found:', !!button);
    console.log('Close button found:', !!closeBtn);
    
    // Add click listener to internship button
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openInternshipCertificates();
        });
        console.log('Internship cert button listener added');
    }
    
    // Add click listener to close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeInternshipCertificates();
        });
        console.log('Close certificate modal listener added');
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeInternshipCertificates();
            }
        });
        console.log('Outside click listener added for certificate modal');
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && (modal.style.display === 'flex' || modal.classList.contains('active'))) {
            closeInternshipCertificates();
        }
    });
    
    // Make functions global
    window.openInternshipCertificates = openInternshipCertificates;
    window.closeInternshipCertificates = closeInternshipCertificates;
});

// Also add onclick as backup for close button
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('closeCertificateModal');
    if (closeBtn) {
        closeBtn.setAttribute('onclick', 'closeInternshipCertificates()');
        console.log('Backup onclick added to close button');
    }
});

// Hackathon Certificate Modal Functionality - Simplified
function openHackathonCertificate() {
    console.log('Opening hackathon certificate modal...');
    const modal = document.getElementById('hackathonCertificateModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('Modal opened successfully');
        
        // Test if image loads
        const img = modal.querySelector('img');
        if (img) {
            img.onload = function() {
                console.log('Certificate image loaded successfully');
            };
            img.onerror = function() {
                console.error('Certificate image failed to load');
                console.log('Image src:', img.src);
            };
        }
    } else {
        console.error('Modal not found!');
        alert('Certificate modal not found!');
    }
}

function closeHackathonCertificate() {
    console.log('Closing hackathon certificate modal...');
    const modal = document.getElementById('hackathonCertificateModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Modal closed successfully');
    }
}

// Simple initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing hackathon certificate modal...');
    
    // Test if modal exists
    const modal = document.getElementById('hackathonCertificateModal');
    const button = document.querySelector('.hackathon-cert-btn');
    
    console.log('Modal found:', !!modal);
    console.log('Button found:', !!button);
    
    if (modal) {
        console.log('Modal HTML:', modal.outerHTML.substring(0, 200) + '...');
    }
    
    // Add click listener to button
    if (button) {
        button.addEventListener('click', openHackathonCertificate);
        console.log('Button listener added');
    }
    
    // Add click listener to close button
    const closeBtn = document.getElementById('closeHackathonModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeHackathonCertificate);
        console.log('Close button listener added');
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeHackathonCertificate();
            }
        });
        console.log('Outside click listener added');
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeHackathonCertificate();
        }
    });
    
    // Make functions global
    window.openHackathonCertificate = openHackathonCertificate;
    window.closeHackathonCertificate = closeHackathonCertificate;
});

// Google Certificates Modal Functionality
function openGoogleCertificates() {
    console.log('Opening Google certificates modal...');
    const modal = document.getElementById('googleCertificatesModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('Google certificates modal opened successfully');
    } else {
        console.error('Google certificates modal not found!');
        alert('Certificate modal not found!');
    }
}

function closeGoogleCertificates() {
    console.log('Closing Google certificates modal...');
    const modal = document.getElementById('googleCertificatesModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Google certificates modal closed successfully');
    }
}

// Initialize Google certificates modal
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Google certificates modal...');
    
    const modal = document.getElementById('googleCertificatesModal');
    const button = document.querySelector('.google-cert-btn');
    
    console.log('Google modal found:', !!modal);
    console.log('Google button found:', !!button);
    
    // Add click listener to button
    if (button) {
        button.addEventListener('click', openGoogleCertificates);
        console.log('Google button listener added');
    }
    
    // Add click listener to close button
    const closeBtn = document.getElementById('closeGoogleModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeGoogleCertificates);
        console.log('Google close button listener added');
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeGoogleCertificates();
            }
        });
        console.log('Google outside click listener added');
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeGoogleCertificates();
        }
    });
    
    // Make functions global
    window.openGoogleCertificates = openGoogleCertificates;
    window.closeGoogleCertificates = closeGoogleCertificates;
});

// Python Certificates Modal Functionality
function openPythonCertificates() {
    console.log('Opening Python certificates modal...');
    const modal = document.getElementById('pythonCertificatesModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('Python certificates modal opened successfully');
    } else {
        console.error('Python certificates modal not found!');
        alert('Certificate modal not found!');
    }
}

function closePythonCertificates() {
    console.log('Closing Python certificates modal...');
    const modal = document.getElementById('pythonCertificatesModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('Python certificates modal closed successfully');
    }
}

// Initialize Python certificates modal
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Python certificates modal...');
    
    const modal = document.getElementById('pythonCertificatesModal');
    const button = document.querySelector('.python-cert-btn');
    
    console.log('Python modal found:', !!modal);
    console.log('Python button found:', !!button);
    
    // Add click listener to button
    if (button) {
        button.addEventListener('click', openPythonCertificates);
        console.log('Python button listener added');
    }
    
    // Add click listener to close button
    const closeBtn = document.getElementById('closePythonModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePythonCertificates);
        console.log('Python close button listener added');
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePythonCertificates();
            }
        });
        console.log('Python outside click listener added');
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closePythonCertificates();
        }
    });
    
    // Make functions global
    window.openPythonCertificates = openPythonCertificates;
    window.closePythonCertificates = closePythonCertificates;
});

// TechClasher Certificate Modal Functionality
function openTechclasherCertificate() {
    console.log('Opening TechClasher certificate modal...');
    const modal = document.getElementById('techclasherCertificateModal');
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        console.log('TechClasher modal opened successfully');
        
        // Test if image loads
        const img = modal.querySelector('img');
        if (img) {
            img.onload = function() {
                console.log('TechClasher certificate image loaded successfully');
            };
            img.onerror = function() {
                console.error('TechClasher certificate image failed to load');
                console.log('Image src:', img.src);
            };
        }
    } else {
        console.error('TechClasher modal not found!');
        alert('Certificate modal not found!');
    }
}

function closeTechclasherCertificate() {
    console.log('Closing TechClasher certificate modal...');
    const modal = document.getElementById('techclasherCertificateModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        console.log('TechClasher modal closed successfully');
    }
}

// Initialize TechClasher certificate modal
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing TechClasher certificate modal...');
    
    const modal = document.getElementById('techclasherCertificateModal');
    const button = document.querySelector('.techclasher-cert-btn');
    
    console.log('TechClasher modal found:', !!modal);
    console.log('TechClasher button found:', !!button);
    
    // Add click listener to button
    if (button) {
        button.addEventListener('click', openTechclasherCertificate);
        console.log('TechClasher button listener added');
    }
    
    // Add click listener to close button
    const closeBtn = document.getElementById('closeTechclasherModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTechclasherCertificate);
        console.log('TechClasher close button listener added');
    }
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeTechclasherCertificate();
            }
        });
        console.log('TechClasher outside click listener added');
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeTechclasherCertificate();
        }
    });
    
    // Make functions global
    window.openTechclasherCertificate = openTechclasherCertificate;
    window.closeTechclasherCertificate = closeTechclasherCertificate;
});

// Certificate Modal Functionality
function initCertificateModal() {
    const certificatesBtn = document.querySelector('.certificates-btn');
    const certificateModal = document.getElementById('certificateModal');
    const closeCertificateModal = document.getElementById('closeCertificateModal');

    // Open certificate modal
    certificatesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        certificateModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close certificate modal
    closeCertificateModal.addEventListener('click', (e) => {
        e.stopPropagation();
        certificateModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    certificateModal.addEventListener('click', (e) => {
        if (e.target === certificateModal) {
            certificateModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Add click to view full size for certificate images
    const certificateImgs = document.querySelectorAll('.certificate-img');
    certificateImgs.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open(img.src, '_blank');
        });
    });

    // Prevent event bubbling on certificate items
    const certificateItems = document.querySelectorAll('.certificate-item');
    certificateItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });
}

// Initialize certificate modal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCertificateModal();
});

// Enhanced Navbar Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Set initial active link
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add techy hover effects to nav items
    navLinks.forEach((link, index) => {
        link.addEventListener('mouseenter', function() {
            // Add random tech class for variety
            const techClasses = ['glow-cyan', 'glow-magenta', 'glow-green'];
            const randomClass = techClasses[index % techClasses.length];
            this.classList.add(randomClass);
        });
        
        link.addEventListener('mouseleave', function() {
            // Remove tech classes
            this.classList.remove('glow-cyan', 'glow-magenta', 'glow-green');
        });
    });
});

// Initialize all modals and effectsionality
function initAchievementModal() {
    const modal = document.getElementById('achievementModal');
    const modalClose = document.querySelector('.modal-close');
    const achievementCards = document.querySelectorAll('.achievement-card');
    
    // Add click event to achievement cards
    achievementCards.forEach(card => {
        card.addEventListener('click', function() {
            const achievementType = this.getAttribute('data-achievement');
            openAchievementModal(achievementType);
        });
    });
    
    // Close modal when clicking X
    modalClose.addEventListener('click', closeAchievementModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeAchievementModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeAchievementModal();
        }
    });
}

function openAchievementModal(achievementType) {
    const modal = document.getElementById('achievementModal');
    const data = achievementData[achievementType];
    
    if (!data) return;
    
    // Populate modal content
    document.querySelector('.modal-title').textContent = data.title;
    document.querySelector('.modal-img').src = data.image;
    document.querySelector('.modal-img').alt = data.title;
    document.querySelector('.modal-description').textContent = data.description;
    document.querySelector('.modal-date').textContent = data.date;
    document.querySelector('.modal-category').textContent = data.category;
    
    // Populate highlights
    const highlightsList = document.querySelector('.highlights-list');
    highlightsList.innerHTML = '';
    data.highlights.forEach(highlight => {
        const li = document.createElement('li');
        li.textContent = highlight;
        highlightsList.appendChild(li);
    });
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeAchievementModal() {
    const modal = document.getElementById('achievementModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #00ff88, #00d4ff)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ff006e, #ff4458)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.achievement-card, .skill-category, .stat-item, .contact-item');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// Code Block Typing Animation
const codeContent = document.querySelector('.code-content pre code');
if (codeContent) {
    const originalCode = codeContent.textContent;
    codeContent.textContent = '';
    let codeIndex = 0;
    
    function typeCode() {
        if (codeIndex < originalCode.length) {
            codeContent.textContent += originalCode.charAt(codeIndex);
            codeIndex++;
            setTimeout(typeCode, 30);
        }
    }
    
    setTimeout(typeCode, 2000);
}

// Mouse Trail Effect (optional, for extra visual effect)
let mouseTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) { // Only on desktop
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '4px';
        trail.style.height = '4px';
        trail.style.background = 'rgba(0, 212, 255, 0.5)';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9999';
        trail.style.transition = 'opacity 0.5s ease';
        
        document.body.appendChild(trail);
        mouseTrail.push(trail);
        
        // Remove old trail elements
        if (mouseTrail.length > maxTrailLength) {
            const oldTrail = mouseTrail.shift();
            oldTrail.style.opacity = '0';
            setTimeout(() => oldTrail.remove(), 500);
        }
        
        // Fade out current trail
        setTimeout(() => {
            trail.style.opacity = '0';
            setTimeout(() => trail.remove(), 500);
        }, 100);
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const particles = document.querySelector('.particles');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    if (particles && scrolled < window.innerHeight) {
        particles.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Loading Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Easter Egg: Konami Code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    // Create a more intense cyberpunk animation
    const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ff006e', '#ffbd2e'];
    const container = document.body;
    
    // Create matrix rain effect
    for (let i = 0; i < 100; i++) {
        const matrix = document.createElement('div');
        matrix.style.position = 'fixed';
        matrix.style.left = Math.random() * 100 + '%';
        matrix.style.top = '-50px';
        matrix.style.color = colors[Math.floor(Math.random() * colors.length)];
        matrix.style.fontSize = Math.random() * 20 + 10 + 'px';
        matrix.style.fontFamily = 'monospace';
        matrix.style.zIndex = '10000';
        matrix.style.pointerEvents = 'none';
        matrix.style.textShadow = `0 0 10px ${matrix.style.color}`;
        matrix.textContent = Math.random() > 0.5 ? '1' : '0';
        
        container.appendChild(matrix);
        
        // Animate falling matrix
        const duration = Math.random() * 3 + 2;
        matrix.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
            { transform: 'translateY(100px) rotate(180deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 100}px) rotate(360deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'linear'
        }).onfinish = () => matrix.remove();
    }
    
    // Create cyberpunk confetti
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.zIndex = '10000';
        confetti.style.pointerEvents = 'none';
        confetti.style.boxShadow = `0 0 10px ${confetti.style.background}`;
        
        container.appendChild(confetti);
        
        const duration = Math.random() * 3 + 2;
        const horizontalMovement = (Math.random() - 0.5) * 200;
        
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight + 20}px) translateX(${horizontalMovement}px) rotate(720deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => confetti.remove();
    }
    
    showNotification('� CYBERPUNK MODE ACTIVATED! Welcome to the matrix!', 'success');
}
