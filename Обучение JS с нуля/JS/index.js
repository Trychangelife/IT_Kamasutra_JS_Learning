function alertValues(Param) {
    console.log(Param.value);
    console.log(Param.className);
}



var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
alertValues(firstNameEl);

var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
alertValues(lastNameEl);

var addresId = 'address';
var addresEl = document.getElementById(addresId);
alertValues(addresEl);

var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
alertValues(citiesEl);

var textAreaId = 'hobbies';
var textAreaEl = document.getElementById(textAreaId);
alertValues(textAreaEl);

var image
var avatarId = 'avatar-wrapper';
var avatarEl = document.getElementById(avatarId);


firstNameEl.value = 'Evegeniy';
lastNameEl.className = 'error-input';
avatarEl.src = 'https://miro.medium.com/max/1400/0*6e2K0U6ZkN9Ju9iL.jpg';
citiesEl.value = 'Minsk';
textAreaEl.value = 'I have not interest';
