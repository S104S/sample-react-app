import Store from './store';

export function useApp() {
    const [{openDrawer}, setState] = Store.useStore();

    const showDrawer = () => {
        let shouldOpenDrawer = !openDrawer;

        console.log('loading defaults in hook');

        setState(draft => {
            console.log('draft');
            console.log(draft);
            draft.openDrawer = shouldOpenDrawer;
        })
    }


    return {
        openDrawer,
        showDrawer
    }

}