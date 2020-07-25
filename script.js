const shareBtn = document.querySelector('.share');
const tooltip = document.querySelector('.tooltip');
const normalFooter = document.querySelector('.footer-author');
const unshareBtn = document.getElementById('share');



shareBtn.addEventListener('click', ()=>{

    if (normalFooter.style.display = 'flex') {
        tooltip.style.display = 'flex';
        normalFooter.style.display = 'none'
    } 
});


unshareBtn.addEventListener ('click', ()=> {
    if (normalFooter.style.display = 'none') {
        tooltip.style.display = 'none';
        normalFooter.style.display = 'flex'
    } 
})


