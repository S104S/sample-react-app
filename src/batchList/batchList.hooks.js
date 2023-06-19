import Store from '../store';
import axios from 'axios';

export function useBatches() {
    const [{batches}, setState] = Store.useStore();

    const onBatchSelected = (batchId) => {
        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.selectedBatch = batchId;
        })
    }

    const loadBatches = () => {
        console.log('loading batches');
        loadAllBatches();
    }

    const loadBatchesByClientId = (clientId) => {

    }

    return {
        batches,
        onBatchSelected,
        loadBatches
    }

}