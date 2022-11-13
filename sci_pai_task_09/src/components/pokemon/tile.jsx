function Tile(props) {
    let id = props.id;
    let pokemonId = (id++).toLocaleString().padStart(3, '0');
    let graphImage = require('./images/' + pokemonId + '.png')

    return (
    <div className="pokemon-item">
        <div className="pokemon-image">
        <img alt={props.name} src={graphImage}/>
        </div>
        {props.showDetails ?
            <div className="pokemon-detail">
                <span className="pokemon-detail__id">#{pokemonId}</span>
                <span className="pokemon-detail__name">{props.name}</span>
                <span className="pokemon-detail__type">{props.type.join(", ")}</span>
            </div> : null
        }
    </div>
    )
}

export default Tile;
