const grid = document.getElementById('grid');
const logo = document.getElementById('logo');

// Kutuların içereceği resimlerin URL'leri
const imageUrls = [
    'url(./img/5c6019d7-64fc-4fd4-a7bd-bd5f9ec7cd85.png)',
    'url(./img/fa9548c3-1231-4524-b2ab-0173b13b7f64.png)',
    'url(./img/3.png)',
    'url(./img/4.png)',
    'url(./img/5.png)',
    'url(./img/6.png)',
    'url(./img/7.png)',
    'url(./img/8.png)',
    'url(./img/9.png)',
    'url(./img/10.png)',
    'url(./img/11.png)',
    'url(./img/12.png)',
];

// Kutu oluşturma ve resim ekleme
for (let i = 0; i < 22 * 12; i++) {
  const box = document.createElement('div');
  box.style.backgroundImage = imageUrls[i % imageUrls.length];
  grid.appendChild(box);
}
// mosue logoya geldiğinde logonun ekrandaki yeri bir efektle 0.5 saniyede değişsin
logo.addEventListener('mouseenter', () => {
    logo.style.transition = '0.5s';
    const randomLeft = Math.random() * (window.innerWidth - logo.offsetWidth);
    const randomTop = Math.random() * (window.innerHeight - logo.offsetHeight);
    logo.style.left = `${randomLeft}px`;
    logo.style.top = `${randomTop}px`;
});