import React from 'react'
import Galaxy from './components/Galaxy';
import "./App.css"

const App = () => {
  const galaxies = [
    {
      nama: "Andromeda",
      gambar: "https://ilmugeografi.com/wp-content/uploads/2017/06/Galaksi-Andromeda.jpg",
      deskripsi: "Galaksi Andromeda merupakan galaksi yang populer selain Bimasakti. Galaksi Andromeda merupakan galaksi besar dengan diameter hampir 200 ribu tahun cahaya, yang berarti memiliki diameter dua kali lipat dibandingkan Galaksi Bimasakti. Andromeda sendiri memiliki massa 300 hingga 400 biliun kali masa matahari.",
      penemu: "Abd al-Rahman al-Sufi",
    },
    {
      nama: "Bima Sakti",
      gambar: "https://ilmugeografi.com/wp-content/uploads/2017/06/Galaksi-Bimasakti.jpg",
      deskripsi: "Galaksi Bimasakti merupakan galaksi yang ditemukan pada 18 juli 1783. Galaksi ini merupakan galaksi besar yang ditempati oleh manusia saat ini, dimana bumi terdapat didalamnya. Galaksi Bimasakti terdiri dari 400 milyar bintang lebih dengan garis tengah sekitar 130 ribu tahun cahaya",
      penemu: "Charles Messier",
    },
    {
      nama: "Centaurus",
      gambar: "https://ilmugeografi.com/wp-content/uploads/2017/06/Galaksi-Centaurus.jpg",
      deskripsi: "Jenis-Jenis Galaksi yang terakhir adalah galaksi centaurus. Galaksi Centaurus merupakan galaksi yang biasa dikenal sebagai nama NGC. Galaksi lenticular ini memiliki jarak sekitar 11 juta tahun cahaya. Ini adalah salah satu radio galaksi yang berada dekat dengan Bumi, sehingga inti galaksi aktif telah banyak dipelajari oleh astronom dan peneliti profesional.",
      penemu: "James Dunlop",
    },
    {
      nama: "Ursa Mayor",
      gambar: "https://ilmugeografi.com/wp-content/uploads/2017/06/Galaksi-Ursa-Mayor.jpg",
      deskripsi: "Galaksi Ursa Mayor memiliki nama unik, dimana galaksi ini memiliki jarak hingga 10 juta tahun cahaya dan galaksi ini biasanya sering dikenal dengan nama galaksi beruang besar.",
      penemu: "Richard A. Proctor",
    },
  ];

  return (
    <div className='App'>
      {galaxies.map((galaxy, key) => (
        <Galaxy
          key={key}
          nama={galaxy.nama}
          gambar={galaxy.gambar}
          deskripsi={galaxy.deskripsi}
          penemu={galaxy.penemu}
        />
      ))}
    </div>
  );
}

export default App