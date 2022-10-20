import { useEffect, useState } from "react";

function GuestBook(){
    // textarea 입력 후 값 가져옴

    // ~배열~ 에 저장
    const [arr, setArr] = useState([]);
    useEffect(() => {
        console.log(arr);
    }, [arr]);

    const [save, setSave] = useState(false);
    const [content, setContent] = useState("");
    const onChange = (e) =>{
        setContent(e.target.value);
    };
    const onClick = (e) => { 
        e.preventDefault();
        if(content !== "" && content !== null){
            setSave(true);
            setContent(content);
            setArr(banana => [content, ...banana]);
            setContent("");

            // 방명록 입력 시간 띄우기, 근데 다 같이 바뀜..
            const date = new Date();
            const hours = date.getHours();
            setHours(hours);
            const minutes = String(date.getMinutes()).padStart(2, "0");
            setMinutes(minutes);
            console.log(minutes);
        }else{
            if(content === ""){
                return;
            }
            console.log('값X');
        }
    };
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    
    return(
        <div className="wrap">
            <div className="inner_wrap">
                <h2 style={{fontSize: '20px', marginBottom: '20px'}}>방명록 남기기</h2>
                <form>
                    <textarea placeholder="방명록을 입력해주세요!" value={content} onChange={onChange}>

                    </textarea>
                    <input type="submit" value={"등록"} onClick={onClick}/>
                </form>
                <div>
                    {save && (
                        <ul>
                            {arr.map((value, index) => 
                            <li key={index} style={{display:'flex', justifyContent:'space-between', border: '1px solid black', width: '500px', height: '100px', marginTop: '20px', padding: '16px'}}>
                                <div>
                                    {value} 
                                </div>
                                <div>
                                    {hours}:{minutes}
                                </div>
                            </li>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
export default GuestBook;
