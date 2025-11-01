import {Container, Box, Typography, Paper} from "@mui/material"
import PredictionForm from "./components/PredictionForm"

export default function App() {
  return(
    <>
      <Box sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #e0f7fa, #e1bee7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 4,
       }}>

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: "2rem", sm: "4rem", md: "6rem" },
            fontWeight: 900,
            color: "rgba(0, 0, 0, 0.05)",
            textAlign: "center",
            zIndex: 0,
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
          >
            California House Price Predictor
        </Typography>

      <Typography
          variant="h6"
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" },
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            zIndex: 0,
            userSelect: "none",
            whiteSpace: "nowrap",
            }}
            >
           Predict your house price instantly!
      </Typography>

          <Container maxWidth="sm" sx={{ mt: 6 }}>
            <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
              <Typography variant="h4" align="center" gutterBottom>
                California House Price Predictor
              </Typography>
              <PredictionForm />
            </Paper>
         </Container>
      </Box>
    </>
  )
}