import { Box, Button, Container } from "@mui/material";
import react from "react";
import Typography from "@mui/material/Typography";
import placeHolder from "../../assets/img/istockphoto-1409329028-612x612.jpg";

function FasilitasPublic() {
  return (
    <div>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h1"
            align="center"
            sx={{ fontWeight: "bold", mt: "50px", fontSize: "50px" }}
          >
            Fasilitas Umum
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: "50px",
            gap: "50px",
            border: "1px solid gray",
            p: "25px",
            borderRadius: "10px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <img
            src={placeHolder}
            style={{ maxHeight: "250px", borderRadius: "20px" }}
          ></img>
          <Box>
            <Box sx={{display : "flex", gap : "20px"}}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Balai Desa
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "20px", mt: "10px", textAlign: "justify" }}
            >
              {" "}
              Balai Desa Kalideres, pusat pemerintahan desa di jantung Desa
              Kalideres, dipimpin oleh Ibu Suherni yang berdedikasi. Di sini,
              berbagai kegiatan administrasi dan pelayanan publik dilakukan
              dengan efisien. Ruang-ruang balai desa juga sering digunakan untuk
              pertemuan komunitas dan acara sosial. Ibu Suherni dan timnya aktif
              mengelola program-program yang bertujuan meningkatkan kualitas
              hidup warga desa, menjadikan balai desa sebagai pusat penting
              dalam pembangunan dan kesejahteraan masyarakat.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: "50px",
            gap: "50px",
            border: "1px solid gray",
            p: "25px",
            borderRadius: "10px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <img
            src={placeHolder}
            style={{ maxHeight: "250px", borderRadius: "20px" }}
          ></img>
          <Box>
            <Box sx={{display : "flex", gap : "20px"}}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Masjid At-Taqwa
              </Typography>
            </Box>
            <Typography
              sx={{ fontSize: "20px", mt: "10px", textAlign: "justify" }}
            >
              {" "}
              Balai Desa Kalideres, pusat pemerintahan desa di jantung Desa
              Kalideres, dipimpin oleh Ibu Suherni yang berdedikasi. Di sini,
              berbagai kegiatan administrasi dan pelayanan publik dilakukan
              dengan efisien. Ruang-ruang balai desa juga sering digunakan untuk
              pertemuan komunitas dan acara sosial. Ibu Suherni dan timnya aktif
              mengelola program-program yang bertujuan meningkatkan kualitas
              hidup warga desa, menjadikan balai desa sebagai pusat penting
              dalam pembangunan dan kesejahteraan masyarakat.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default FasilitasPublic;
