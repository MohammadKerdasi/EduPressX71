import "./Error.css"
import ErrorImg from "./../../../public/assetsProject/imges/error.png"
export default function Error(){
    return(
        <>
        <section className="nz-error-section">
        <div className="nz-h2-div"><h2>Error</h2></div>
        <div className="nz-img-div"><img src={ErrorImg} /></div>
        </section>
        </>
    )
}