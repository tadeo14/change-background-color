function changeColour() {
    
    const backColour = document.querySelector(`#colour`);

    console.log(backColour.classList);

    console.log(backColour.classList.contains('dark'));

    if (backColour.classList.contains('light')) {
        backColour.classList.add('dark');
        backColour.classList.remove('light');
    } else {
        backColour.classList.add('light');
        backColour.classList.remove('dark');
        
    }


}
