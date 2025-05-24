document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const section = document.querySelector(href);
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const certs = {
    Hackathons: {
      title: "Industrial Hackathon",
      desc: "Issued by Sanjivani University for the participation in the hackathon held inside the campus. \nI feel very confident after attending this first hackathon of my life. ",
      img: "h1.jpg",
      file: "h1.jpg"
    },
    ibm: [
        {
          title: "Introduction to Python",
          desc: "(CEPYTIIN, provided by IBMCE)\nA course on ibmcep.cognitiveclass.ai\nPowered by IBM Developer Skills Network.\nIssued by IBM Career Education Program",
          img: "ibm1.jpg",
          file: "ibm1.jpg"
        },
        {
          title: "Data Visualization",
          desc: "(CEDVIIN, provided by IBMCE)\nA course on ibmcep.cognitiveclass.ai\nPowered by IBM Developer Skills Network.\nIssued by IBM Career Education Program",
          img: "image2.png",
          file: "ibm2.pdf"
        }
    ],
    infosys: [
        {
          title: "Introduction to Python",
          desc: "Provided by INFOSYS SPRINGBOARD",
          img: "c4.png",
          file: "c1.pdf"
        },
        {
          title: "Basics of Python",
          desc: "Provided by INFOSYS SPRINGBOARD",
          img: "c1.png",
          file: "c4.pdf"
        },
        {
            title: "Introduction to Hardware & Software",
            desc: "Provided by INFOSYS SPRINGBOARD",
            img: "c5.png",
            file: "c5.pdf"
        },
        {
            title: "Session 5_Mini Projects",
            desc: "Provided by INFOSYS SPRINGBOARD",
            img: "c2.png",
            file: "c3.pdf"
        },
        {
            title: "Design and Build the TaskBot",
            desc: "Provided by INFOSYS SPRINGBOARD",
            img: "c3.png",
            file: "c2.pdf"
        }
    ],
    web: {
      title: "AI & Machine Learning",
      desc: "Issued by IBM. Covers supervised, unsupervised learning, and NLP.",
      img: "cert-images/ai.jpg",
      file: "certificates/ai-certificate.pdf"
    },
    design: {
      title: "FIGMA Desiging Fundamentals",
      desc: "Issued by BCBUZZ TECHNOLOGIES.\nThis certificate is provided to me for attending a webnier on 4th January ,2025",
      img: "design1.jpg",
      file: "design1.jpg"
    }
  };

  function openCertModal(category, index = 0) {
    const cert = Array.isArray(certs[category]) ? certs[category][index] : certs[category];
    document.getElementById('modal-title').innerText = cert.title;
    document.getElementById('modal-desc').innerText = cert.desc;
    document.getElementById('modal-img').src = cert.img;
    document.getElementById('downloadBtn').href = cert.file;
    document.getElementById('certModal').style.display = 'flex';
  }
  
  function closeCertModal() {
    document.getElementById('certModal').style.display = 'none';
  }

  function filterCerts(category) {
    document.querySelectorAll('.cert-card').forEach(card => {
      card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
    });
  }

  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const skillCards = document.querySelectorAll(".skill-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target.querySelector(".skill-fill");
          const percent = entry.target.dataset.skill;
          fill.style.width = percent + "%";
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.6 });

    skillCards.forEach(card => observer.observe(card));
  });



  document.addEventListener("DOMContentLoaded", () => {
const aboutText = document.querySelector("#about .about-text");
const aboutImage = document.querySelector("#about .about-image");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Apply slide-in animation
      if (aboutText) aboutText.classList.add('animate-slide-in-left');
      if (aboutImage) aboutImage.classList.add('animate-slide-in-right');
    } else {
      // Remove the animation classes when the section is not in view
      if (aboutText) aboutText.classList.remove('animate-slide-in-left');
      if (aboutImage) aboutImage.classList.remove('animate-slide-in-right');
    }
  });
}, { threshold: 0.3 }); // Adjust threshold as needed

if (aboutText) observer.observe(aboutText);
if (aboutImage) observer.observe(aboutImage);
});

//home animation
document.addEventListener('DOMContentLoaded', function () {
  const home = document.getElementById('home');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        home.classList.remove('animate-home');
        void home.offsetWidth; // Force reflow to reset animation
        home.classList.add('animate-home');
      }
    });
  }, { threshold: 0.6 });

  observer.observe(home);
});

function toggleDetails(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';
}