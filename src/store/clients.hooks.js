import Store from './index';
import axios from 'axios';

export function useBatches() {
    const [{selectedBatch, batches, batchApiUrl}, setState] = Store.useStore();

    const loadBatchesByClientId = async (clientId) => {
        let batches = await axios.get(`${batchApiUrl}/find?clientId=${clientId}`)
    }

    const loadBatchById = async (batchId) => {
        let batch = null ;
        try {
            batch = await axios.get(`${batchApiUrl}/find?batchId=${batchId}`)
        } catch (err) {
            console.log('Error retrieving batch')
            console.log(err);
        }

        setState(draft => {
            draft.selectedBatch = batch
        })
    }


    return {
        selectedBatch,
        batches,
        loadBatchesByClientId,
        loadBatchById
    }
}