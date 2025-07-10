// one_page_website.js

document.addEventListener("DOMContentLoaded", function() {
  // Get all champion sections (with images and descriptions)
  const champions = [
    {
      id: "kaisa",
      name: "Kai'Sa",
      imgSrc: "images/league/adcchamp_1.png",
      description: "Kai'Sa is a flexible ADC that scales with items and evolves abilities. She can dive into the backline and has amazing mobility with her ultimate and E."
    },
    {
      id: "lucian",
      name: "Lucian",
      imgSrc: "images/league/adcchamp_2.png",
      description: "Lucian is a high-damage burst ADC with a powerful early game. He excels at dashing around fights and punishing opponents with quick trades."
    },
    {
      id: "samira",
      name: "Samira",
      imgSrc: "images/league/adcchamp_3.png",
      description: "Samira is a stylish ADC that blends ranged and melee combat. She thrives in the chaos of teamfights and her ultimate can wipe out entire teams."
    },
    {
      id: "xayah",
      name: "Xayah",
      imgSrc: "images/league/adcchamp_4.png",
      description: "Xayah uses feather blades to zone and trap enemies. Her ultimate grants invulnerability, making her hard to pin down in teamfights."
    },
    {
      id: "ezreal",
      name: "Ezreal",
      imgSrc: "images/league/adcchamp_5.png",
      description: "Ezreal is a poke-heavy ADC with extreme mobility. He can safely farm and deal damage from afar while staying out of reach of danger."
    }

    //So with my lightbox I wanted to make it so when you click on it shows all the champs I have on there and it allows u to read the descritpion whiel viewing the pictures and I weanted to add arrows so u can go through all of them.
  ];

  const modal = document.getElementById("lightbox-modal");
  const modalImg = modal.querySelector(".lightbox-image");
  const caption = modal.querySelector(".caption");
  const closeBtn = modal.querySelector(".close");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");

  let currentIndex = 0;

  // when clicking ont he champion it opens it up
  function openModal(index) {
    currentIndex = index;
    const champ = champions[currentIndex];
    modal.style.display = "block";
    modalImg.src = champ.imgSrc;
    modalImg.alt = champ.name;
    caption.textContent = champ.name + ": " + champ.description;
  }

  function closeModal() {
    modal.style.display = "none";
  }

  // going over to the previous champ
  function showPrev() {
    currentIndex = (currentIndex - 1 + champions.length) % champions.length;
    openModal(currentIndex);
  }

  // going to the next champion
  function showNext() {
    currentIndex = (currentIndex + 1) % champions.length;
    openModal(currentIndex);
  }


  champions.forEach((champ, idx) => {
    const img = document.querySelector(`#${champ.id} img`);
    if (img) {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        openModal(idx);
      });
    }
  });

  // closing the image on thebutton
  closeBtn.addEventListener("click", closeModal);

  // bkacground clicking to exit the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // arrow event
  prevBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    showPrev();
  });

  nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    showNext();
  });

  // So i wanted to add arrow keys on my lightbox, since its displaying characters I want it to be easily slideable and you can go form one to another.
  document.addEventListener("keydown", (e) => {
    if (modal.style.display === "block") {
      if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }
  });
});
