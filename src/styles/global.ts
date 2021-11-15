import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        background: #171717;
    }

    main {
    background: #171717;
    width: 900px;
    height: 100vh;
    color: #ededed;
    }

    @media screen and (max-width: 900px) {
        main {
            width: 100%;
        }

        .timer{
            width: 100%;
        }

        .times {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px 25px;
            gap: 5px;
        }

        
    }

    .title {
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 45px;
    }

    .title h2 {
    font-size: 35px;
    }

    .timer {
    display: flex;
    justify-content: center;
    padding: 30px 25px;
    align-items: center;
    font-size: 75px;
    }

    .timer div {
        width: 100%;
    background: rgba(255, 255, 255, 0.22);
    color: #fff;
    padding: 15px;
    font-size: 75px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    }

    @media screen and (max-width: 900px) {
        main {
            width: 100%;
        }

        .timer{
            width: 100%;
        }

        .times {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px 25px;
            gap: 5px;
        }

        
    }

    .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 15px;
    }

    .actions button {
    padding: 15px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    @media screen and (max-width: 900px){
        .actions{
            padding: 15px 25px;
        }
        
        .actions button{
            width: 100%
        }
    }

    .actions button:hover {
    filter: brightness(0.9);
    }

    .times {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 25px;
    gap: 45px;
    }

    .times button {
    padding: 15px;
    font-size: 25px;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.22);
    color: #fff;
    width: 100%;
    }

    @media screen and (max-width: 900px){
        .times {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0px 25px;
            gap: 5px;
        }

        .times button {
            padding: 15px;
            font-size: 25px;
            border: none;
            border-radius: 5px;
            background: rgba(255, 255, 255, 0.22);
            color: #fff;
            width: 100%;
        }
    }

    .times button.selected{
        background: rgba(255,255,255,1);
        color: #000;
    }

    .start {
    background: #4e9f3d;
    color: #fff;
    }

    .stop {
    background: #b42b51;
    color: #fff;
    }
`;
