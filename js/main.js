$(document).ready(function(){
    $('.dropmenu1').click(function(){
        $('ul.dropable1').toggle();
        $('ul.dropable2').hide();
        $('ul.dropable3').hide();
    });
    $('.dropmenu2').click(function(){
        $('ul.dropable2').toggle();
        $('ul.dropable1').hide();
        $('ul.dropable3').hide();
    });
    $('.dropmenu3').click(function(){
        $('ul.dropable3').toggle();
        $('ul.dropable2').hide();
        $('ul.dropable1').hide();
    });
});

const buttons = document.querySelectorAll('.project');
        const overlay = document.querySelector('.overlay');
        const overlayImage = document.querySelector('.overlay-inner img');

        function open(e){
            overlay.classList.add('open');
            constsrc = e.currentTarget.querySelector('img.src').src;
            overlayImage.src = src;

        }

        function close(){
            overlay.classList.remove('open');
        }

        buttons.forEach(button => button.addEventListener('click', open));
        overlay.addEventListener('click', close)