function Note ({title, text}) {
    return (
        <div className="note-frame">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    );
};

export default Note;