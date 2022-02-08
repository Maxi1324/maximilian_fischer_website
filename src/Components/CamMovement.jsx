import ReactScrollWheelHandler from "react-scroll-wheel-handler";

function CamMovement(props) {
    return (
        <ReactScrollWheelHandler
            upHandler={(e) => {
                if (props.CamPos.current > 0) {
                    props.CamPos.current -= 1
                    props.TextBoxen.current.AktPage(props.CamPos.current)
                }
            }}
            downHandler={(e) => {
                if (props.CamPos.current < 2) {
                    props.CamPos.current += 1
                    props.TextBoxen.current.AktPage(props.CamPos.current)
                }
            }} >
            {props.children}
        </ReactScrollWheelHandler>
    );
}

export default CamMovement;