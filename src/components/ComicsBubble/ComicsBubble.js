import TypeWriter from "../TypeWriter";
import './comicsBubble.css';
import cn from 'classnames';

const ComicBubble = ({ text, position = 'left', className }) => {
    return (
        <div className={cn(
            "bubble",
            {
                'bubble--bottom-right': position === 'right',
                'bubble--bottom-left': position === 'left'
            },
            className,
        )}>
            <TypeWriter text={text}></TypeWriter>
        </div>
    );
}

export default ComicBubble;