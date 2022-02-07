import Textbox from "./TextBox";
import { Component } from "react";

class TextBoxen extends Component {
    constructor(props) {
        super(props);
    }

    AktPage1 = 0

    state = {}
    render() {
        return (
            <>
                <Textbox text={text} OnPage={0} AktPage={this.AktPage1} x={100} y={100} tranInLeft={true} ></Textbox>
            </>
        );
    }

    AktPage(AktPage2) {
        this.AktPage1 = AktPage2
        this.forceUpdate(()=>{
        })
    }
}

export default TextBoxen;


const text = (
    <>
        <h1>Hello,</h1>
        <p>
            my name is Maximilian Fischer. I am a {Math.floor((new Date() - new Date(2005, 7, 24)) / 31536000000)} years old passionate Programmer.
            <br /><br />
            On this website I want to show you my Skills, my Projects and which Education I enjoyed.
            <br /><br />
            With the Scroll wheel you can Navigate!
        </p>
    </>
)
