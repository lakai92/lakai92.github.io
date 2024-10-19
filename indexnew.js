const element32 = document.querySelector('.selector-button__bg');
if (element32) {
    element32.style.backgroundColor = 'black';
}

// Находим элемент по классу
const banReasonDescription = document.querySelector('.video-chat-area .user-ban-overlay .user-ban__reason-description');

// Если элемент найден, присваиваем ему display: none
if (banReasonDescription) {
    banReasonDescription.style.display = 'none';
} else {
    console.log('Элемент не найден');
}
