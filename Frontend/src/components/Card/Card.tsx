import './Card.css';

interface FactProp {
    headline: string,
    image: string,
    facttext: string
};

const Card = ({ facts }: {facts: FactProp}) => {

    return (
        <>
        {JSON.stringify(facts) === '{"headline":"","image":"","facttext":""}' ? (
            <div className="loader" id="loader"></div>
        ) : (

        
            <div className="card-container">
                <div className="card">
                    <img id="main-img" className="card-img-top" src={facts["image"]} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{facts["headline"]}</h5>
                        <p className="card-text">{facts["facttext"]}</p>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}

export default Card;