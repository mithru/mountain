
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    let pgmrk1 = document.getElementById('li-1');
    let pgmrk2 = document.getElementById('li-2');
    let pgmrk3 = document.getElementById('li-3');
    let nextBtn1 = document.getElementById('btn-next1');
    let nextBtn2 = document.getElementById('btn-next2');
    let ctaBtn = document.getElementById('intro-cta');
    let desc1 = document.getElementById('desc1');
    let desc2 = document.getElementById('desc2');
    let desc3 = document.getElementById('desc3');

    nextBtn1.addEventListener("click", function() {
        nextBtn1.style.display = 'none';
        nextBtn2.style.display = 'block';
        pgmrk1.style.borderColor = 'gray';
        pgmrk2.style.borderColor = 'white';
        desc1.style.display = 'none';
        // desc1.style.animationName = 'slideout';
        // desc1.style.animationDuration = '2s';
        desc2.style.display = 'block';
        desc2.style.animationName = 'slidein';
        desc2.style.animationDuration = '2s';
    });

    nextBtn2.addEventListener("click", function() {
        nextBtn2.style.display = 'none';
        ctaBtn.style.display = 'block';
        pgmrk2.style.borderColor = 'gray';
        pgmrk3.style.borderColor = 'white';
        desc2.style.display = 'none';
        // desc2.style.animationName = 'slideout';
        // desc2.style.animationDuration = '2s';
        desc3.style.display = 'block';
        desc3.style.animationName = 'slidein';
        desc3.style.animationDuration = '2s';
    });
});
