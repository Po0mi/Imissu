document.addEventListener("DOMContentLoaded", function() {
    const loveYou = document.getElementById('loveYou');
    const missYou = document.getElementById('missYou');
    const toggleButton = document.getElementById('toggleButton');

    // Floating hearts creator
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.querySelector('.hearts-container').appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    // Sparkles creator
    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        document.querySelector('.sparkles').appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }

    // Animation loops
    setInterval(createHeart, 300);
    setInterval(createSparkle, 100);

    // Toggle button functionality
    toggleButton.addEventListener('click', function() {
        if (missYou.style.display === "none" || missYou.style.display === "") {
            missYou.style.display = "block";
            loveYou.style.display = "block";
            setTimeout(() => {
                missYou.classList.add('visible');
                loveYou.classList.add('visible');
            }, 10);
            toggleButton.textContent = "Hide the Magic 💖";
        } else {
            missYou.style.animation = 'bounceOut 1s';
            loveYou.style.animation = 'bounceOut 1s';
            setTimeout(() => {
                missYou.style.display = "none";
                loveYou.style.display = "none";
                missYou.classList.remove('visible');
                loveYou.classList.remove('visible');
            }, 1000);
            toggleButton.textContent = "Show the Magic ✨";
        }
    });

    // Interactive effects
    loveYou.addEventListener('mouseover', function() {
        this.style.transform = 'rotate(-2deg) scale(1.1)';
        this.style.color = '#ffeb3b';
        this.style.transition = 'all 0.3s';
    });

    loveYou.addEventListener('mouseout', function() {
        this.style.transform = 'rotate(0deg) scale(1)';
        this.style.color = 'white';
    });

    // Click sparkles
    document.addEventListener('click', function(e) {
        for(let i = 0; i < 5; i++) {
            createSparkle();
        }
    });
});