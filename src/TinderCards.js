import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import styled from 'styled-components';
import database from './firebase';

function TinderCards() {

    const [people, setPeople] = useState([ //same thing as const people = [];
        {
            name: 'steve jobs',
            url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fd%2Fdc%2FSteve_Jobs_Headshot_2010-CROP_%2528cropped_2%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FSteve_Jobs&tbnid=4Wl8anTkWJOwdM&vet=12ahUKEwjE7-jCyPLxAhVBG6wKHQXMDE4QMygAegUIARDKAQ..i&docid=cvmgKjU7_-0ZBM&w=3026&h=2929&q=steve%20jobs&client=safari&ved=2ahUKEwjE7-jCyPLxAhVBG6wKHQXMDE4QMygAegUIARDKAQ",
        },
        {
            name: 'mark zucky',
            url: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        }
    ]);

    //Piece of code which runs based on a condition
    useEffect(() => {
        //this is where code runs...

        //this will run ONCE when the component loads, and never again
        const unsubscribe = database
        .collection('people')
        .onSnapshot((snapshot) => 
        setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            // this is the cleanup to unsubscribe listeners
            unsubscribe();
        }

    }, []);

    /*
    Bad:
    const people = [];
    people.push('sonny', 'quazi')

    Good: (Push to an array in react)
    setPeople([...people, 'sonny', 'quazi'])
    */


    return (
        <div>
                <TinderCardContainer>
                {people.map((person) => (
                    <Swipe>
                    <TinderCard
                        key={person.name}
                        preventSwipe={["up", "down"]}
                    >
                        <Card>
                            <div
                            
                                style={{ backgroundImage: `url(${person.url})` }}
                            >
                                
                                <h3>{person.name}</h3>
                            </div>
                         </Card>
                        
                    </TinderCard>
                    </Swipe>
            ))}
            </TinderCardContainer>
            
        </div>
    );
}

const Card = styled.div`

    
    position: relative;
    width: 600px;
    padding: 20px;
    max-width: 85vw;
    height: 50vh;
    border-radius: 20px;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);

    h3 {
        position: absolute;
        bottom: 10px;
        color: grey;
    }
    
`;

const TinderCardContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5vh;

`;

const Swipe = styled.div`
    position: absolute;
`;
export default TinderCards;