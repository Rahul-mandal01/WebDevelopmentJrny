import './ItemDate.css';

function ItemDate(){

    const day=20;
    const month="June";
    const year=2001;

    return(
        <div className="mfg-date">
            <span>{day} </span>
            <span>{month} </span>
            <span>{year}</span>
            
        </div>

    );
}

export default ItemDate;