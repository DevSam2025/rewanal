  
//   EVENEMENT CLICK
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });


// direction vers les pages
    function redirigerVersPage() {
        let menuDeroulant = document.getElementById("menuDeroulant");
        let pageSelectionnee = menuDeroulant.value;
        if (pageSelectionnee) {
            window.location.href = pageSelectionnee;
        }
    }


// pour click de photo


  function openLightbox(imageSrc, caption) {
    document.getElementById('lightbox-image').src = imageSrc;
    document.getElementById('lightbox-caption').textContent = caption;
    document.getElementById('lightbox').classList.remove('hidden');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
  }

  // Ferme la lightbox si on clique en dehors de l'image
  document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
