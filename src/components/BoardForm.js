const BoardForm = ({textRef}) => {
    return(
        <form>
            <div className="study-detail-title">
            <textarea id="title" ref={textRef} placeholder="제목을 입력하세요."></textarea>
            </div>
            <div className="study-detail-content">
                <textarea id="content" placeholder="내용을 입력하세요!"></textarea>
            </div>
        </form>
    )
}
export default BoardForm;