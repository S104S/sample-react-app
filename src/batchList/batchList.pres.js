import React from 'react';
import {Button, List, ListItem, ListItemText, ListSubheader} from '@material-ui/core';
import {useBatchStyles} from "./batches.styles";
import {useTheme} from "@material-ui/core/styles";

const Batches = props => {
    const classes = useBatchStyles();
    const theme = useTheme();
    const {batches} = props;

    let batchItems = '';
    if(batches !== null && batches.length > 0) {
        batchItems = batches.map((batch) => {
            return (
                <ListItem button onClick={() => {
                    console.log('batch selected');
                    console.log(batch.id);
                }}>
                    <ListItemText>{batch.id}</ListItemText>
                </ListItem>
            )
        })
    }
    return (
        <List>
            <ListSubheader>Batches</ListSubheader>
            {batchItems}
        </List>
    )
}

export default Batches;