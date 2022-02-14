const envelope = document.querySelector('.envelope');
const envelopTop = document.querySelector('.envelope_top');
const paper = document.querySelector('.paper');

envelope.addEventListener('click', function(e) {
    envelopTop.classList.toggle('envelope_top_close');
    paper.classList.toggle('paper_close');
});