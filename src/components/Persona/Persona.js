import './persona.css';
import ComicsBubble from "../ComicsBubble/ComicsBubble";
import {useMemo} from "react";
import cn from 'classnames';
import noPiratL from '../../assets/noPiratL.png';
import noPiratM from '../../assets/noPiratM.png';
import defaultL from '../../assets/defaultL.png';
import defaultM from '../../assets/defaultM.png';
import thinkingL from '../../assets/thinkingL.png';
import thinkingM from '../../assets/thinkingM.png';
import smileL from '../../assets/smileL.png';
import smileM from '../../assets/smileM.png';

const Persona = ({ persona, type, side, text }) => {
    const { url } = useMemo(() => {
        if (persona === 'maya' && type === 'no-pirat') {
            return {
                url: noPiratM,
            }
        }

        if (persona === 'maya' && type === 'default') {
            return {
                url: defaultM,
            }
        }

        if (persona === 'maya' && type === 'smile') {
            return {
                url: smileM,
            }
        }

        if (persona === 'maya' && type === 'thinking') {
            return {
                url: thinkingM,
            }
        }

        if (persona === 'lucya' && type === 'no-pirat') {
            return {
                url: noPiratL,
            }
        }

        if (persona === 'lucya' && type === 'default') {
            return {
                url: defaultL,
            }
        }

        if (persona === 'lucya' && type === 'smile') {
            return {
                url: smileL,
            }
        }

        if (persona === 'lucya' && type === 'thinking') {
            return {
                url: thinkingL,
            }
        }
    }, [persona, type]);

    return (
        <div className={cn(
            "persona",
            {
                'persona--right': side === 'right',
                'persona--left': side === 'left'
            },
            )}
        >
            {text && (
                <ComicsBubble
                    text={text}
                    position={side}
                    className={cn(
                        "persona_bubble",
                        {
                            'persona_bubble--right': side === 'right',
                            'persona_bubble--left': side === 'left'
                        },
                    )}
                ></ComicsBubble>
            )}

            <img
                src={url}
                alt=""
                className="persona-image"
            />
        </div>
    );
}

export default Persona;