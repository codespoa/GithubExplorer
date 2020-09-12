import { createGlobalStyle } from "styled-components";

import BackgroundGit from "../assets/background-git.svg";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        &:focus {
            outline: none;
        }
    }

    body {
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        background: #ddd url(${BackgroundGit}) no-repeat 70% top;
    }

    button { 
        cursor: pointer;
        border: none;
    }

    input {
        border: none;
    }

    ul {
        list-style-type:none;
        padding:0;
        margin:0;
        overflow: hidden;
    }

    li {
        list-style: none;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 30px 20px;
    }
`;
