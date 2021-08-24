import React from 'react';
import {Button} from '@material-ui/core';
import {useHomeStyles} from "./home.styles";
import {useTheme} from "@material-ui/core/styles";

const Home = props => {
    const classes = useHomeStyles();
    const theme = useTheme();
    const {baseVals, addAnotherDefault} = props;

    console.log('baseVals');
    console.log(baseVals);

    let finalVal = baseVals === null ? "null" : baseVals;
    return (
        <div>
          Hello world {finalVal}!
            <Button onClick={addAnotherDefault}>Testing</Button>
        </div>
    )
}

export default Home;