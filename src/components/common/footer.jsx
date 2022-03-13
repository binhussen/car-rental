
const style = {
    borderTop: "1px solid #E7E7E7",
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    background:'red'


};

const footer = (props) => {
    return (
        <div  style={style} className="container">
            &copy; {props.Year}  Abysinia auto inc.
        </div>

    );
}

export default footer;