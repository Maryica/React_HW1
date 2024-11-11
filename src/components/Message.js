import '..'
import MessageStyle from '../MessageStyle.css';

function Message({ }) {
    const date = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Intl.DateTimeFormat('en-US', options).format(date);

    return (
        <div className='message'>

            <h2>Сегодня <span>{today}</span></h2>
        </div>
    )
}

export default Message;