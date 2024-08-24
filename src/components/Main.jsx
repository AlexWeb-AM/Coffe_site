export default function Main({title,des,src}) {
    return (
        <div className="main_child">
            <img src={src} alt="" />
            <h3>{title}</h3>
            <p>{des}</p>
        </div>
    )
}