// import './style.css';
import './styles.scss';
import {useState} from "react";

export default function ChatComp ({data} : {data: any}) {

    const [text, setText] = useState('');

    function handleChange(event: any) {
        console.log('ev', event);
        setText(event.target.value);
    }

    function clickButton(event: any) {
        console.log('event but', event);
        setText('');
    }

    return (
        <div className="chat-comp">
            {
                data.map((item: any, index: any) => {
                    return <div className='chat-comp__item' key={index}>
                                <div className='chat-comp__item__from'>{item.from}</div>
                                <div className='chat-comp__item__to'>{item.to}</div>
                           </div>
                })
            }

            <div className='chat-comp__text-area'>
                <textarea value={text} onChange={handleChange}></textarea>
                <button onClick={clickButton}>sUBMIT</button>
            </div>
        </div>
    );
}
