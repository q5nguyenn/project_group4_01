var modelItems = document.querySelectorAll('.model-item');

[...modelItems].forEach( function(item) {
    var itemContentBox = item.querySelector('.model-item-content');
    item.addEventListener('mouseover', (e)=> {
        itemContentBox.style.display = 'block';
    });
    item.addEventListener('mouseout', (e)=> {
        itemContentBox.style.display = 'none';
    });
})
