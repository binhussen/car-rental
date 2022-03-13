
const style = {
    borderTop: "1px solid #E7E7E7",
    padding: "10px 10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "80px",
    width: "100%",
    background:'red',
    display:'flex',
    alignItems:'center',
    background: "#E7E7E7"
};

const footer = (props) => {
    return (
        <div   style={style} className="container">
            &copy; {props.Year}  Abysinia auto inc.
        </div>

    );
}

export default footer;