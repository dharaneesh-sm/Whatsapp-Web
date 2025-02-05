document.querySelectorAll('.block').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('person').textContent = this.dataset.name;
        document.getElementById('photo').src = this.dataset.img;
    });
});