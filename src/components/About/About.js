import React, {useState} from 'react';
import pizzaFacts from '../../pizzaFacts.json';
import {Button} from '../../globalStyles';
import { AboutButtonContainer, AboutContainer, AboutFacts, AboutHeading, AboutList } from './About.element';

function About() {
    const [counter, setCounter] = useState(1);

    const loadMore = () => {
        setCounter(counter + 1);
    }
  return (
    <AboutContainer>
        <AboutHeading>Pizza Facts</AboutHeading>
        <AboutFacts>
            {pizzaFacts.map((fact, index) => (
                index < counter &&
                <AboutList key={fact.id}>{fact.fact}</AboutList>
            ))}
        </AboutFacts>
        {counter !== pizzaFacts.length &&
        <AboutButtonContainer>
            <Button onClick={loadMore}>More Facts!</Button>
        </AboutButtonContainer>}
    </AboutContainer>
  )
}

export default About;