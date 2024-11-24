import '..'
import messageStyle from './messageStyle.css';

function Message({ text }) {
    return <div>
        <p className="Message"><span>{text}</span></p>
    </div>;
};

export default Message;