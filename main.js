// Cara merubah tampilan header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav')

// addEventListener untuk membuat perubahan dalam html
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navBar.classList.toggle("active")
});

/* Cara menghapus class, 
contoh kasus nya kita ingin menghilangkan navbar jika diklik
maka kita tambahkan onClick di class nav nya dan karena
yang memunculkannya class active maka kita hilangkan class active nya
*/
// function myFunction() {
//     navBar.classList.remove("active");
//     hamburger.classList.remove("active");
//   }


  //kalau di click navbar nya otomatis hilang
  navBar.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active")
});