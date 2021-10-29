import { makeStyles } from "@material-ui/core";
const primaryColor = 'blue';
const Colors = makeStyles({
    primary: {
        backgroundColor: primaryColor
    },
    btnPrimary: {
        color: 'white',
        backgroundColor: primaryColor
    },
    btnDanger:{
        color: 'white',
        backgroundColor: 'red'
    }
})
export {Colors, primaryColor};