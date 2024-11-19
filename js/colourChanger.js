(() => {
const colourPicker = document.getElementById('colourPicker'); 
const bodyElement = document.body;
colourPicker.addEventListener('change',(ev)=>{
    const colourPicked = ev.target.value + "Back";
    bodyElement.className = colourPicked;
})
})();