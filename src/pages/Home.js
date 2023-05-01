import React from 'react'
import { Container } from 'react-bootstrap';

import {observer} from "mobx-react-lite";

import SearchComponent from "../components/SearchComponent";



const Home = observer(() => {

    return (
        <Container style={{height: "526px", marginTop: "250px", }}>
            <div >
                <SearchComponent/>
            </div>

        </Container>
    )
});

export default Home