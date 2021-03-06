import { createTheme } from '@material-ui/core/styles';
import palette from './palette';
import { getDirection, getFont } from '../localization/index';

const theme = createTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            fontSize: "3.2857rem",
            lineHeight: "4rem",
            fontFamily: getFont()
        },
        h2: {
            fontWeight: 700,
            fontSize: "2.57rem",
            lineHeight: "3.2857rem",
            fontFamily: getFont()
        },
        h3: {
            fontWeight: 600,
            fontSize: "2rem",
            lineHeight: "2.7rem",
            fontFamily: getFont()
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.71rem",
            lineHeight: "2.43rem",
            fontFamily: getFont()
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.43rem",
            lineHeight: "2.14rem",
            fontFamily: getFont()
        },
        h6: {
            fontWeight: 700,
            fontSize: "1.14rem",
            lineHeight: "1.857rem",
            fontFamily: getFont()
        },
        subtitle1: {
            fontWeight: 400,
            fontSize: "1.25rem",
            lineHeight: "2rem",
            fontFamily: getFont(),
            marginTop: 15
        },
        body2: {
            fontWeight: 600,
            color: "#a4acc4",
            fontSize: ".94rem",
            fontFamily: getFont(),
            letterSpacing: 1,
            textAlign: "center",
        },
        body1: {
            fontWeight: 400,
            fontSize: "1.8rem",
            color: "#a4acc4",
            lineHeight: "1.857rem",
            fontFamily: getFont()
        },
        button: {
            fontWeight: 700,
            fontSize: ".9rem",
            lineHeight: 50,
            color: "#FFF",
            letterSpacing: 2,
            fontFamily: getFont()
        }
    }
})

export default theme;