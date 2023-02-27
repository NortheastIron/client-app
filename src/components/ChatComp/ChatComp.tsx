import './style.css';

export default function ChatComp ({data} : {data: any}) {


    return (
        <div className="chat-comp">
            {
                data.map((item: any, index: any) => {
                    return <div className='item' key={index}>{item.from}</div>
                })
            }
        </div>
    );
}
