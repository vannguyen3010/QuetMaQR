const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');


    //Add a click event to the select element
    select.addEventListener('click', () => {
        //add the rotate styles to the caret elment
        select.classList.toggle('select-clicked');
        //add the rotate styles  to the caret element
        caret.classList.toggle('caret-rotate');
        //add the open styles  to the menu element
        menu.classList.toggle('menu-open');
    });
    

    //loop through all option elments
    options.forEach(option => {
        //add a click event to the option element
        option.addEventListener('click', () => {
            //change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            //add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            //add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            //add the open styles to the menu elment
            menu.classList.remove('menu-open');
            //Remove active class from all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            //add active class t clicked option element
            option.classList.add('active');

        });
    });
});