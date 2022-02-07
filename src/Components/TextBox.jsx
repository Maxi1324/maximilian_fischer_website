import { useRef,useState } from "react";
import { fadeOutLeft,fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium'

function Textbox(props) {
    const [shown,SetHook] = useState(false)
    const FadeIn = {
        bounce: {
          animation: 'x 2s',
          animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
        }
      }
    const Fadeout = {
        bounce: {
          animation: 'x 2s',
          animationName: Radium.keyframes(fadeOutLeft, 'fadeInLeft')
        }
    }
    let state = props.AktPage != props.OnPage
    if(state){
        if(shown){
            setTimeout(()=>SetHook(false), 1700);
        }
    }
    else{
        if(!shown){
            SetHook(true)
        }
    }

    if (!shown) {
        return (<></>)
    }
    else {
        return (
            <>
                <StyleRoot>
                    <div className="TextBox" style={(!state)?FadeIn.bounce:Fadeout.bounce} >
                        {props.text}
                    </div>
                </StyleRoot>
            </>
        );
    }
}

export default Textbox;