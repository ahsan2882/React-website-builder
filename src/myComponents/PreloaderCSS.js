import { css, keyframes } from 'styled-components';

const lineAnim1 = keyframes`
        0% {
        stroke-dashoffset: 155.26px;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 155.26px;
        }
    `;
const lineAnim2 = keyframes`
        0% {
            stroke-dashoffset: 240.69px;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 240.69px;
        }
    `;
const lineAnim3 = keyframes`
        0% {
            stroke-dashoffset: 222.78px;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 222.78px;
        }
    `;
const lineAnim4 = keyframes`
        0% {
            stroke-dashoffset: 252.96px;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 252.96px;
        }
    `;
const lineAnim5 = keyframes`
        0% {
            stroke-dashoffset: 110.33px;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 110.33px;
        }
    `;
const lineAnim6 = keyframes`
        0% {
            stroke-dashoffset: 251.91px;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 251.91px;
        }
    `;
const lineAnim7 = keyframes`
        0% {
            stroke-dashoffset: 233.91px;
        }

        50% {
            stroke-dashoffset: 0;
        }

        100% {
            stroke-dashoffset: 233.91px;
        }
    `;

    const StyledPreloader = css`
        .preloader {
            position: fixed;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: 200;
            -webkit-transition: all 0.25s ease;
            transition: all 0.25s ease;
            -webkit-transition-delay: 1s;
            transition-delay: 1s;
            background-color: #3cacfe;
        }
        .preloader__svg {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
        }
        .preloader__svg-path:nth-child(1) {
            stroke-dasharray: 155.26px;
            stroke-dashoffset: 155.26px;
            animation: ${lineAnim1} 3s ease forwards infinite;
        }
        .preloader__svg-path:nth-child(2) {
            stroke-dasharray: 240.69px;
            stroke-dashoffset: 240.69px;
            animation: ${lineAnim2} 3s ease forwards infinite;
        }
        .preloader__svg-path:nth-child(3) {
            stroke-dasharray: 222.78px;
            stroke-dashoffset: 222.78px;
            animation: ${lineAnim3} 3s ease forwards infinite;
        }
        .preloader__svg-path:nth-child(4) {
            stroke-dasharray: 252.96px;
            stroke-dashoffset: 252.96px;
            animation: ${lineAnim4} 3s ease forwards infinite;
        }
        .preloader__svg-path:nth-child(5) {
            stroke-dasharray: 110.33px;
            stroke-dashoffset: 110.33px;
            animation: ${lineAnim5} 3s ease forwards infinite;
        }
        .preloader__svg-path:nth-child(6) {
            stroke-dasharray: 251.91px;
            stroke-dashoffset: 251.91px;
            animation: ${lineAnim6} 3s ease forwards infinite;
        }
        .preloader__svg-path:nth-child(7) {
            stroke-dasharray: 233.91px;
            stroke-dashoffset: 233.91px;
            animation: ${lineAnim7} 3s ease forwards infinite;
        }
        .loaded .preloader {
            transform: translateY(-100%);
        }
    `;

    export default StyledPreloader;