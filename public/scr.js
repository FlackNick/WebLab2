(function () {
    window.startTime = (new Date).getTime();
    window.addEventListener('load',function () {
        document.getElementById('load-time').innerHTML=((new Date).getTime() - window.startTime)/1000 + 'seconds';
    });
})();

window.addEventListener('load',function () {
    let elements = document.querySelectorAll('.nav_ref');
    elements.forEach(element => {
        if (element.href == window.location.href) {
            let child = element.querySelectorAll('.nav');
            child[0].classList.add('now');
        }
    });
});