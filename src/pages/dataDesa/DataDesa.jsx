import { Box, Container, Typography } from "@mui/material";
import react from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function DataDesa() {
  return (
    <Box
      style={{
        backgroundImage: "linear-gradient(#d5d4dc,black)",
        color: "white",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          align="center"
          sx={{ fontWeight: "bold", fontSize: "70px", pt : "50px" }}
        >
          {" "}
          Data Desa{" "}
        </Typography>
        <Typography variant="h3" align="center" sx={{ fontWeight: "Light" }}>
          {" "}
          Kenali Desa Kalideres melalui Data{" "}
        </Typography>
        <Box
          sx={{
            mt: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BarChart
            sx={{
              //change left yAxis label styles
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.4",
                fill: "white",
              },
              // change all labels fontFamily shown on both xAxis and yAxis
              "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                fontFamily: "Roboto",
              },
              // change bottom label styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.5",
                fill: "white",
              },
              // bottomAxis Line Styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
              // leftAxis Line Styles
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
            }}
            title="Jumlah penduduk Desa Kalideres"
            xAxis={[{ scaleType: "band", data: ["2020", "2021", "2022"] }]}
            series={[{ data: [3712, 3835, 3887] }]}
            width={600}
            height={400}
          />
          <Box sx={{ maxWidth: "50vw" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "35px" }}>
              Jumlah penduduk
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Jumlah penduduk Kalideres selama beberapa tahun terakhir mengalami
              peningkatan yang cukup signifikan. Pada tahun tertentu,
              penduduknya tercatat sebanyak 3.712 jiwa. Angka ini kemudian
              bertambah menjadi 3.835 jiwa, menunjukkan pertumbuhan yang stabil.
              Pertumbuhan ini terus berlanjut hingga tahun 2022, di mana jumlah
              penduduk Kalideres mencapai 3.887 jiwa. Peningkatan ini
              mencerminkan adanya dinamika kependudukan di daerah tersebut, yang
              mungkin dipengaruhi oleh berbagai faktor seperti urbanisasi,
              migrasi, dan peningkatan kelahiran.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BarChart
            title="Jumlah penduduk Desa Kalideres"
            xAxis={[{ scaleType: "band", data: ["2020", "2021", "2022"] }]}
            series={[{ data: [1877, 1958, 1982] }]}
            colors={["red"]}
            width={600}
            height={400}
            sx={{
              //change left yAxis label styles
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.4",
                fill: "white",
              },
              // change all labels fontFamily shown on both xAxis and yAxis
              "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                fontFamily: "Roboto",
              },
              // change bottom label styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.5",
                fill: "white",
              },
              // bottomAxis Line Styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
              // leftAxis Line Styles
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
            }}
          />
          <Box sx={{ maxWidth: "50vw" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "35px" }}>
              Jumlah Penduduk Laki-Laki
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Jumlah penduduk Kalideres selama beberapa tahun terakhir mengalami
              peningkatan yang cukup signifikan. Pada tahun tertentu,
              penduduknya tercatat sebanyak 3.712 jiwa. Angka ini kemudian
              bertambah menjadi 3.835 jiwa, menunjukkan pertumbuhan yang stabil.
              Pertumbuhan ini terus berlanjut hingga tahun 2022, di mana jumlah
              penduduk Kalideres mencapai 3.887 jiwa. Peningkatan ini
              mencerminkan adanya dinamika kependudukan di daerah tersebut, yang
              mungkin dipengaruhi oleh berbagai faktor seperti urbanisasi,
              migrasi, dan peningkatan kelahiran.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            mt: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <BarChart
            title="Jumlah penduduk Desa Kalideres"
            xAxis={[{ scaleType: "band", data: ["2020", "2021", "2022"] }]}
            series={[{ data: [1877, 1958, 1982] }]}
            colors={["red"]}
            width={600}
            height={400}
            sx={{
              //change left yAxis label styles
              "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.4",
                fill: "white",
              },
              // change all labels fontFamily shown on both xAxis and yAxis
              "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
                fontFamily: "Roboto",
              },
              // change bottom label styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                strokeWidth: "0.5",
                fill: "white",
              },
              // bottomAxis Line Styles
              "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
              // leftAxis Line Styles
              "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                stroke: "white",
                strokeWidth: 0.4,
              },
            }}
          />
          <Box sx={{ maxWidth: "50vw" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "35px" }}>
              Jumlah Penduduk Laki-Laki
            </Typography>
            <Typography sx={{ textAlign: "justify" }}>
              Jumlah penduduk Kalideres selama beberapa tahun terakhir mengalami
              peningkatan yang cukup signifikan. Pada tahun tertentu,
              penduduknya tercatat sebanyak 3.712 jiwa. Angka ini kemudian
              bertambah menjadi 3.835 jiwa, menunjukkan pertumbuhan yang stabil.
              Pertumbuhan ini terus berlanjut hingga tahun 2022, di mana jumlah
              penduduk Kalideres mencapai 3.887 jiwa. Peningkatan ini
              mencerminkan adanya dinamika kependudukan di daerah tersebut, yang
              mungkin dipengaruhi oleh berbagai faktor seperti urbanisasi,
              migrasi, dan peningkatan kelahiran.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default DataDesa;
