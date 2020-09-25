import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCard.css"
import database from '../../firebase';

const TinderCards = () => {
    const [people, setPeople] = useState([]);

    // Piece of code which runs on a codition
    useEffect(() => {
        // this is where the code run 

        // this is run one when component load
        database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    // Bad 
    // const people = [];
    // people.push('sunny', 'ali')

    // Good
    // setPeople([...people, "sunny", 'ali'])

    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className="tinderCards_cardContainer">
                {people.map((persons) => (
                    <TinderCard className="swipe"
                        key={persons.name}
                        preventSwipe={["up", "down"]}>
                        < div style={{ backgroundImage: `url(${persons.url})` }}
                            className="card"
                        >
                            <h3>{persons.name}</h3>
                        </div>
                    </TinderCard>
                ))
                }
            </div>
        </div >
    );
}

export default TinderCards