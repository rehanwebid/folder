const img = document.getElementById('gambar');

fetch(CONFIG.API_PHOTO)
  .then(res => res.json())
  .then(data => {
    img.src = data.url;
    img.onload = () => img.classList.add('show');
  })
  .catch(err => console.error('Gagal ambil foto:', err));