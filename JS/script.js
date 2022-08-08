function createImages() {
    const imgs = document.querySelectorAll('#portfolio-photos img');
    const body = document.querySelector('body');

    imgs.forEach((img, idx) => {
        const tag_img = document.createElement('img');
        const tag_back = document.createElement('div');

        tag_back.classList.add('image-background');
        tag_back.id = `back-${idx}`;
        tag_img.src = img.src;

        tag_back.appendChild(tag_img);
        body.appendChild(tag_back);

        img.addEventListener('click', () => {
            document.getElementById(`back-${idx}`).classList.add('open');
        });
    })
};

function closeImages() {
    const backs = document.querySelectorAll('.image-background');

    backs.forEach((back, idx) => {
        back.addEventListener('click', () => {
            document.getElementById(`back-${idx}`).classList.remove('open');
        });
    });
};

function selectImages() {
    createImages();
    closeImages();
};

selectImages();

/*----------------------------------------------------------*/
function getEleNav() {
    top_nav = document.querySelector('#top-nav');
    close_nav = document.querySelector('#close-nav');
}

function openTopNav() {
    getEleNav();
            
    top_nav.classList.add('open');
    close_nav.style.display = 'block';
};

function closeTopNav() {
    getEleNav();
            
    top_nav.classList.remove('open');
    close_nav.style.display = 'none';
};

/*----------------------------------------------------------*/
const isElInView = (el) => {
    let distanceTop = el.getBoundingClientRect().top;

    return distanceTop <= window.innerHeight - (window.innerHeight * 0.2);
}

function animateOnScroll() {
    const els = document.querySelectorAll('.body-part');

    els.forEach(el => {
        let isScrolled = isElInView(el);
        isScrolled ? el.classList.add('scrolled') : el.classList.remove('scrolled');
    });
}

window.addEventListener('scroll', () => {
    animateOnScroll();
});

/*----------------------------------------------------------*/