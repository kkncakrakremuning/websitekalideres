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
import AOS from "aos";
import DirectionsIcon from "@mui/icons-material/Directions";
import backgroundHero from "../../assets/img/background-hero.jpg";
import Stargazing from "../../assets/img/Stargazing.jpeg";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
  const handleDirection = () => {
    window.open("https://maps.app.goo.gl/s8gZBRobEm2smzZc7", "_blank");
  };
  return (
    <div>
      <Box
        sx={{
          background: `url(${backgroundHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <Container
          sx={{
            display: "flex",
            mt: "0px",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
            textShadow: "2px 2px 4px black",
          }}
          maxWidth="xl"
        >
          <Box
            sx={{
              height: "80vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "40px",

              maxWidth: "150vw",
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography
              variant="h1"
              sx={{ fontWeight: "bold", fontSize: "90px" }}
            >
              Desa Kalideres
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "40px",
                textAlign: "justify",
                fontWeight: "light",
                lineHeight: "1.5",
              }}
            >
              Desa Kalideres di Cirebon, Jawa Barat, dikenal dengan sawah yang
              luas dan suasana pedesaan yang asri. Mayoritas penduduknya adalah
              petani, menjadikan pertanian sebagai pilar ekonomi desa. Tradisi
              turun-temurun tetap dijaga, dan lokasi strategisnya memberikan
              akses mudah ke fasilitas umum di Cirebon, membuat desa ini nyaman
              untuk ditinggali.
            </Typography>
            <Box
              sx={{
                borderRadius: "30px",
                backgroundColor: "#1876d2",
                color: "white",
                maxWidth: "170px",
                textAlign: "center",
                pt: "10px",
                pb: "10px",

                fontSize: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                ":hover": {
                  cursor: "pointer",
                },
              }}
              onClick={handleDirection}
            >
              <DirectionsIcon></DirectionsIcon>
              Visit US
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ pb: "30px", backgroundColor: "#425116", color: "white" }}>
        <Container maxWidth="xl" sx={{ mt: "0", pt: "10px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "50px",
              mt: "40px",
              textAlign: "right",
              textShadow: "2px 2px 4px black",
            }}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Pariwisata
          </Typography>
          <hr></hr>
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Card
              sx={{ maxWidth: 345, color: "white", height : "300px" }}
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{ background: "#22300f" }}
            >
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
                  <Typography variant="body2" color="white">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: 345, color: "white", height : "300px" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ background: "#22300f" }}
              disabled
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={Stargazing}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Stargazing
                  </Typography>
                  <Typography variant="body2" color="white">
                    "Rasakan keajaiban malam di Desa Kalideres: stargazing yang
                    memukau di bawah langit bertabur bintang!"
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: 345, color: "white", height: "300px" }}
              data-aos="fade-left"
              data-aos-duration="1000"
              style={{ background: "#22300f" }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={desaKalideres}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Bertani
                  </Typography>
                  <Typography variant="body2" color="white">
                    "Temukan kedamaian di Desa Kalideres: berjalanlah di antara
                    hamparan sawah hijau yang memanjakan mata, dan rasakan
                    kesejukan alam yang menyegarkan jiwa."
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: "50px",
                mt: "40px",
                textShadow: "2px 2px 4px black",
              }}
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Berita
            </Typography>
            <hr></hr>
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
                  backgroundColor: "#22300f",
                }}
                onClick={handleNewsone}
                data-aos="fade-right"
                data-aos-duration="1000"
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
                  backgroundColor: "#22300f",
                }}
                onClick={handleNewstwo}
                data-aos="fade-right"
                data-aos-duration="1000"
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
                  backgroundColor: "#22300f",
                }}
                onClick={handleNewsthree}
                data-aos="fade-right"
                data-aos-duration="1000"
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
