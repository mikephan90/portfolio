import { createGlobalStyle } from "styled-components";
import TransitionStyles from "./TransitionStyles";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #B22222;
        --secondary: #708090;
        --lightest-grey: #f1f1f1;
        --light-grey: #c0c0c0;
        --grey: #444444;
        --dark-grey: #303030;
        --darkest-grey: #1f1f1f;
    }

    ${TransitionStyles};
`;

export default GlobalStyle;
