import react from "react";
import desaKalideres from "../../assets/img/desaKalideresCover.jpeg";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import placeHolder from "../../assets/img/istockphoto-1409329028-612x612.jpg";
import "aos/dist/aos.css";
import berita1 from "../../assets/img/berita1.jpg";
import berita2 from "../../assets/img/berita2.jpg";
import berita3 from "../../assets/img/berita3.jpeg";
import { useEffect } from "react";

function Home() {
  const handleNewsone = () => {
    window.open(
      "https://www.beritasatu.com/network/radarcirebon/258816/hadapi-pilkada-2024-pj-bupati-cirebon-tegaskan-soal-pentingnya-netralitas-asn",
      "_blank"
    );
  };
  const handleNewstwo = () => {
    window.open("https://maps.app.goo.gl/s8gZBRobEm2smzZc7", "_blank");
  };
  const handleNewsthree = () => {
    window.open(
      "https://radarcirebon.disway.id/read/184650/komisi-iv-dprd-tuding-disdik-sekolah-minim-pembinaan-pelajar",
      "_blank"
    );
  };
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          mt: "40px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Box sx={{ maxWidth: "40vw" }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: "32px" }}
          >
            Selamat Datang di Website Desa Kalideres
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: "25px", mt: "20px", textAlign: "justify" }}
          >
            Desa Kalideres, terletak di Cirebon, Jawa Barat, adalah sebuah desa
            yang kaya akan budaya dan tradisi lokal. Desa ini dikenal dengan
            hamparan sawah yang luas dan lingkungan pedesaan yang asri.
            Mayoritas penduduknya bekerja sebagai petani, menjadikan sektor
            pertanian sebagai tulang punggung ekonomi desa. Selain itu,
            Kalideres juga memiliki tradisi yang diwariskan secara
            turun-temurun, yang tetap dijaga hingga kini. Berada di lokasi yang
            strategis, desa ini memiliki akses mudah ke berbagai fasilitas umum
            di Cirebon, menjadikannya tempat yang nyaman dan tenang untuk
            ditinggali.
          </Typography>
        </Box>
        <Box>
          <img
            src={desaKalideres}
            style={{ maxWidth: "40vw", maxHeight: "70vh" }}
          ></img>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "#ededed", pb: "30px" }}>
        <Container maxWidth="xl" sx={{ mt: "30vh", pt: "10px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "32px",
              mt: "40px",
              textAlign: "right",
            }}
          >
            Pariwisata
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "55px",
              mt: "50px",
              textAlign: "right",
              fontWeight: "light",
            }}
          >
            Temukan lokasi-lokasi menarik yang anda bisa kunjungi untuk menemani
            libur pekan anda
          </Typography>
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Card sx={{ maxWidth: 345 }} data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={desaKalideres}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Waduk Kirota
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={desaKalideres}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Waduk Kirota
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={desaKalideres}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Waduk Kirota
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", fontSize: "32px", mt: "40px" }}
            >
              Berita
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "55px",
                mt: "30px",
                textAlign: "justify",
                fontWeight: "light",
                maxWidth: "50vw",
              }}
            >
              Berita terbaru seputar Kabupaten Cirebon
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  backgroundColor: "white",
                  pt: "10px",
                  pb: "10px",
                  pl: "10px",
                  pr: "10px",
                  mt: "20px",
                  borderRadius: "10px",
                  alignItems: "center",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  height: "120px",
                }}
                onClick={handleNewsone}
              >
                <img
                  src={berita1}
                  style={{ maxHeight: "120px", maxWidth: "150px" }}
                ></img>
                <Box sx={{ overflow: "ellipsis" }}>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Hadapi Pilkada 2024, Pj Bupati Cirebon Tegaskan Soal
                    Pentingnya Netralitas ASN
                  </Typography>
                  <Typography sx={{ fontSize: "10px", fontWeight: "light" }}>
                    Minggu 11-08-2024,03:00 WIB
                  </Typography>
                  <Typography sx={{ textAlign: "justify" }}>
                    Penjabat (Pj) Bupati Cirebon, Wahyu Mijaya, menegaskan
                    pentingnya netralitas Aparatur Sipil Negara (ASN) dalam
                    pelaksanaan pemilihan Bupati dan Wakil Bupati Cirebon pada
                    Pilkada serentak tahun 2024. Hal ini disampaikan dalam Rapat
                    Koordinasi dan Sosialisasi Pencalonan yang digelar oleh
                    Komisi Pemilihan Umum (KPU) Kabupaten Cirebon di sebuah
                    hotel di Kabupaten Cirebon, Sabtu 10 Agustus 2024.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  backgroundColor: "white",
                  pt: "10px",
                  pb: "10px",
                  pl: "10px",
                  pr: "10px",
                  mt: "20px",
                  borderRadius: "10px",
                  alignItems: "center",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  height: "120px",
                }}
                onClick={handleNewstwo}
              >
                <img
                  src={berita2}
                  style={{ maxHeight: "120px", maxWidth: "150px" }}
                ></img>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Kapolresta Cirebon Pimpin Sertijab Para Kasat hingga
                    Kapolsek Jajaran, Inilah Daftarnya
                  </Typography>
                  <Typography sx={{ fontSize: "10px", fontWeight: "light" }}>
                    Sabtu 10-08-2024,20:30 WIB
                  </Typography>
                  <Typography sx={{ textAlign: "justify" }}>
                    Kapolresta Cirebon, Kombes Pol Sumarni SIK SH MH memimpin
                    upacara serah terima jabatan (sertijab) para Kasat hingga
                    jajaran Polsek, Sabtu 10 Agustus 2024. Upacara sertijab
                    tersebut berlangsung di Lapangan Apel Mapolresta Cirebon.
                    Adapun sejumlah jabatan di lingkungan Polresta Cirebon yang
                    melaksanakan sertijab diantaranya Kasat Reskrim dari Kompol
                    Hario Prasetyo Seno SH SIK MM kepada Kompol Siswo De Ceullar
                    Tarigan SH SIK MM.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  backgroundColor: "white",
                  pt: "10px",
                  pb: "10px",
                  pl: "10px",
                  pr: "10px",
                  mt: "20px",
                  borderRadius: "10px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  alignItems: "center",
                  maxHeight: "120px",
                }}
                onClick={handleNewsthree}
              >
                <img
                  src={berita3}
                  style={{ maxHeight: "120px", maxWidth: "150px" }}
                ></img>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Komisi IV DPRD Tuding Disdik - Sekolah Minim Pembinaan
                    Pelajar
                  </Typography>
                  <Typography sx={{ fontSize: "10px", fontWeight: "light" }}>
                    Sabtu 10-08-2024,19:30 WIB
                  </Typography>
                  <Typography
                    sx={{ overflow: "ellipsis", textAlign: "justify" }}
                  >
                    SUMBER, RADARCIREBON.COM - Aksi tawuran konten antar pelajar
                    SMP di Kabupaten Cirebon menyedot perhatian publik.
                    Pasalnya, satu orang pelajar meninggal dunia akibat aksi
                    tersebut. Komisi IV DPRD Kabupaten Cirebon paling kenceng
                    mengkritik Dinas Pendidikan dan pihak sekolah. Ketua Komisi
                    IV DPRD Kabupaten Cirebon, Aan Setiawan SSi menyesalkan
                    adanya kejadian tawuran antar pelajar yang menyebabkan satu
                    pelajar meninggal dunia.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ mt: "50px", pt: "10px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "32px",
            mt: "40px",
            textAlign: "center",
          }}
        >
          UMKM
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: "30px", mt: "40px" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
