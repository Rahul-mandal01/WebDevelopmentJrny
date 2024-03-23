import Card from './Card';

function Tours({tours, removeTour}){
    return (
        <div>
            <div>
                <h2> Plan with Rahul </h2>
            </div>

            <div>
                {
                    tours.map ( (tour) => {

                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;