// ADD NEW PHOTO FILENAMES HERE AFTER UPLOADING THEM TO GITHUB
const galleryPhotos = [
  'project-01.jpeg','project-02.jpeg','project-03.jpeg','project-04.jpeg','project-05.jpeg','project-06.jpeg','project-07.jpeg','project-08.jpeg','project-09.jpeg'
];
const gallery = document.getElementById('full-gallery');
galleryPhotos.forEach((file, index) => {
  const a = document.createElement('a'); a.href = file; a.target = '_blank';
  const img = document.createElement('img'); img.src = file; img.alt = `Steele's Roofing & Renovations project ${index + 1}`;
  a.appendChild(img); gallery.appendChild(a);
});
