import React from "react";
import { useState } from "react";
import { TextField, Button, Stack, Typography, MenuItem } from "@mui/material";
import axios from "axios";

const oceanOptions = ["<1H OCEAN", "INLAND", "ISLAND", "NEAR BAY", "NEAR OCEAN"];

export default function PredictionForm() {
    const [form, setForm] = useState({
        longitude: "",
        latitude: "",
        housing_median_age: "",
        total_rooms: "",
        total_bedrooms: "",
        population: "",
        households: "",
        median_income: "",
        ocean_proximity: ""
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/predict", form);
            setPrediction(res.data.predicted_price.toFixed(2));
        } catch(err) {
            console.error(err);
            alert("Error : " + err.message);
        }
    };

    return(
     <>
        <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
            {Object.keys(form).map((key) =>
            key === "ocean_proximity" ? (
                <TextField
                key={key}
                select
                label="Ocean Proximity"
                name={key}
                value={form[key]}
                onChange={handleChange}
                fullWidth
                required
                >
                {oceanOptions.map((opt) => (
                    <MenuItem key={opt} value={opt}>
                    {opt}
                    </MenuItem>
                ))}
                </TextField>
            ) : (
                <TextField
                key={key}
                label={key.replaceAll("_", " ")}
                name={key}
                type="number"
                value={form[key]}
                onChange={handleChange}
                fullWidth
                required
                />
            )
            )}

                <Button variant="contained" color="primary" type="submit">
                Predict Price
                </Button>

                {prediction && (
                <Typography variant="h6" align="center" color="green">
                    Predicted Median House Value: ${prediction}
                </Typography>
                )}
        </Stack>
        </form>
     </>
    );
}
