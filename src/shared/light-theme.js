import {createTheme} from "@material-ui/core";
import {red} from '@material-ui/core/colors';

export const LightTheme = createTheme({
    dark: false,
    palette: {
        primary: {
            main: 'rgb(255, 45, 85)'
        },
        background: 'rgb(242, 242, 242)',
        card: 'rgb(255, 255, 255)',
        text: red,
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)'
    }
})