import { Container, Grid } from "@mui/material";
import React, { useState } from "react";
import PrimarySearchAppBar from "./components/common/header";
import Footer from "./components/common/footer";
import OutlinedCard from "./components/Shared/car";
import Home from './pages/home'

function App() {
    const currentYear = new Date().getFullYear();
    const [year] = useState(currentYear)

    return (
        <Grid container direction="column">
            <PrimarySearchAppBar />
            <Container>
                <OutlinedCard />
                <Home />
            </Container>
            <Grid>
                <Footer Year={year} />
            </Grid>
        </Grid>
    );
}

export default App;
