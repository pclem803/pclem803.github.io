const show_nav_bar = () => {
    nav_bar = document.getElementById('page_links_mobile');

    if (nav_bar.style.display != "flex"){
        nav_bar.style.display = "flex"
    } else {
        nav_bar.style.display = "none"
    }
}

const resize = () => {

    if (document.body.clientWidth > 800) {
        nav_bar = document.getElementById('page_links_mobile');
        nav_bar.style.display = "none"
    }

    const file_name = location.href.split('/').slice(-1);
    if (file_name == 'work.html'){
        resize_ideal_lab();
    }

}

const mounted = () => {
    resize_ideal_lab();
}

const resize_ideal_lab = () => {
    ideal_lab_name = document.getElementById('ideal_lab_name')
    if (document.body.clientWidth < 1050) {
        ideal_lab_name.textContent = 'Relativity'
    } else {
        ideal_lab_name.textContent = 'Relativity'
    }
}