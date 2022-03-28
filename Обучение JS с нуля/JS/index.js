var firstNameId;
var firstNameEl;
var lastNameId;
var lastNameEl;
var addresEl;
var addresId;
var citiesId;
var citiesEl;
var textAreaEl;
var textAreaId;
var image
var avatarId = 'avatar-wrapper';
var avatarEl = document.getElementById(avatarId);


function alertValue() {
    console.log(citiesEl.value);
    console.log(textAreaEl.value);
    console.log(avatarEl.innerHTML);
    console.log(firstNameEl.value);
    console.log(firstNameEl.className);
    console.log(addresEl.value);
    console.log(lastNameEl.className);
}


textAreaId = 'hobbies';
textAreaEl = document.getElementById(textAreaId);
firstNameId = 'first-name';
firstNameEl = document.getElementById(firstNameId);
addresId = 'address';
addresEl = document.getElementById(addresId);
lastNameId = 'last-name';
lastNameEl = document.getElementById(lastNameId);
citiesId = 'cities';
citiesEl = document.getElementById(citiesId);
firstNameEl.value = 'Evegeniy';
lastNameEl.className = 'error-input';
avatarEl.src = 'https://miro.medium.com/max/1400/0*6e2K0U6ZkN9Ju9iL.jpg';
citiesEl.value = 'Minsk';
textAreaEl.value = 'I have not interest';
alertValue();