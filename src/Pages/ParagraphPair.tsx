import "../index.css"

function ParagraphPair(props) {

    return(
    <> 
    <div className = "ParagraphContainer">
        <p>{props.Paragraph1}</p>
        <p>{props.Paragraph2}</p>  

        </div>
    </>
    )
}

export default ParagraphPair;