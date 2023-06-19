import React, {useEffect} from 'react';
import Batches from './batches.pres';
import {useBatches} from "./batches.hooks";

const BatchesContainer = () => {
    console.log('b c');
    const {batches, loadBatches} = useBatches();

    useEffect(() => {
        console.log('use effect');
        console.log(batches);
        if (batches === null) {
            console.log('loading batches');
            loadBatches()
        }
    }, [batches])

    return (
        <Batches
            batches={batches}
        />
    )
}

export default BatchesContainer;