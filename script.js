  const images = [
                 'images/Isfahan.jpg',
                 'images/isfahan2.jpg',
                 'images/isfahan3.jpg'
            ];
            let currentIndex = 0;

            const hero = document.getElementById('hero');

            function updateBackground() {
            hero.style.backgroundImage = `url(${images[currentIndex]})`;
            }

// Initial background
            updateBackground();

// Change background every 3 seconds
            setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateBackground();
               }, 3000);
