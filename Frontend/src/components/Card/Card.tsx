import './Card.css';

interface FactProp {
    headline: string
};

const Card = ({ facts }: {facts: FactProp}) => {

    console.log(facts);

    const style = {
        width: "18rem"
    };
    return (
        <>
            <div className="card" style={style}>
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{facts.headline}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Card;