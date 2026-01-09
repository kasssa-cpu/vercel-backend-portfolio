export default function openNavbar() {
    const openButton = document.getElementById('nav-open-button');
    const closeButton = document.getElementById('nav-close-button');
    const navlink = document.querySelectorAll('.nav-link');
    console.log(navlink)
    // Logika tampilan navbar ketika 900px
    function toggleNavbar() {
        document.body.classList.toggle('show-mobile-menu');
        console.log("Berhasil menambahkan class")
    }
    openButton.addEventListener('click', toggleNavbar);
    closeButton.addEventListener('click', toggleNavbar);

    navlink.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('show-mobile-menu')
        })
    })
}

