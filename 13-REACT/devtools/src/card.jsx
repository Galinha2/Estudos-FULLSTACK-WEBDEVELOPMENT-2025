import Avatar from "./Avatar";

function Card ({title, avatar, phone, email}) {
    return(
        <div className="frame">
            <div className="frame-title">
                <h1>{title}</h1>
                <Avatar img={avatar}/>
            </div>
            <div className="frame-text">
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
};

export default Card;