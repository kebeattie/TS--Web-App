import './Card.css';

interface FactProp {
    headline: string,
    image: string,
    body: string
};

const Card = ({ facts }: {facts: FactProp}) => {
    // const loader = document.getElementById("loader");

    // loader.classList.add("hide");

    console.log(JSON.stringify(facts));



    return (
        <>
        {JSON.stringify(facts) === '{"headline":"","image":"","body":""}' ? (
            <div className="loader" id="loader"></div>
        ) : (

        
            <div className="card-container">
                <div className="card">
                    <img className="card-img-top" src={facts.image} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{facts.headline}</h5>
                        <p className="card-text">{facts.body}</p>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Card;