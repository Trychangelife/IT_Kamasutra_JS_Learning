function addErrorClass(elementId) {
    let element = document.getElementById(elementId);
    element.className = 'error-input';
}

function addErrorClassToAllInputs() {
        addErrorClass('first-name');
        addErrorClass('last-name');
        addErrorClass('address');
}

//addErrorClass('last-name');
addErrorClassToAllInputs();