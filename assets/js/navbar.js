let drawer = document.getElementById('drawer');
let toogleDrawer = document.getElementById('toogle-drawer');

const desktopScreen = () => {
    drawer.classList.remove('offcanvas', 'offcanvas-start', 'bgSecondary');
    toogleDrawer.classList.add('d-none');
}
const mobileScreen = () => {
    drawer.classList.add('offcanvas', 'offcanvas-start', 'bgSecondary');
    toogleDrawer.classList.remove('d-none');
}
if (window.innerWidth < 768) {
    mobileScreen();
}
else {
    desktopScreen();
}
const handleWindowResize = () => {
    if (window.innerWidth < 768) {
        mobileScreen();
    }
    else {
        desktopScreen();
    }
}
window.addEventListener('resize', handleWindowResize);