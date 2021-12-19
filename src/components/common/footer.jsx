import { Grid } from "@mui/material";

const style = {
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    coloe: "#ffffff"
};

const footer = (props) => {
    return (
        <Grid container>
            <div style={style} className="container">
                &copy; {props.Year}  This is footer
            </div>
        </Grid >
    );
}

export default footer;