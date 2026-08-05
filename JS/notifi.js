function run_msg(data) {
    const main_noti = document.querySelector('.noti');
    if (!main_noti) return; 

    const card = document.createElement('div');
    card.className = 'notification display align-items';

    const icon = document.createElement('i');
    icon.className = 'fa-regular fa-circle-check';
    icon.style.color = 'rgb(1, 183, 44)';

    const text = document.createElement('p');
    text.textContent = data;

    card.appendChild(icon);
    card.appendChild(text);

    main_noti.appendChild(card);

    setTimeout(() => card.remove(), 2000);
}