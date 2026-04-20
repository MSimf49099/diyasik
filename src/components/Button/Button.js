import cn from "classnames";
import './button.css';

const Button = (ref, text, className) => {
    return (
        <button
            ref={ref}
            className={cn(
                'btn',
                className
            )}
            style={{
                position: 'relative',
                transition: 'transform 0.05s linear',
            }}
        >
            { text }
        </button>
    );
}

export default Button;