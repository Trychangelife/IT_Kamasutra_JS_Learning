function addErrorClass(elementId) {
    let element = document.getElementById(elementId);
    element.className = 'default_input';
}

function addErrorClassToAllInputs() {
        addErrorClass('first-name');
        addErrorClass('last-name');
        addErrorClass('address');
}

//addErrorClass('last-name');
window.setTimeout(addErrorClassToAllInputs, 2000);