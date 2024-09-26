import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createElement} from "react";

export function App() {
    const [count, setCount] = useState(0)

    return createElement(
        'div',
        null,
        createElement(
            'a',
            {href: 'https://vitejs.dev', target: '_blank'},
            createElement(
                'img',
                {src: viteLogo, className:'logo', alt: 'Vite logo'}
            )
        ),
        createElement(
            'a',
            {href: 'https://react.dev', target: '_blank'},
            createElement(
                'img',
                {src: reactLogo, className:'logo', alt: 'React logo'}
            )
        ),
        createElement(
            'h1',
            {},
            'Vite + React',
            createElement(
                'div',
                {className: 'card'},
                createElement(
                    'button',
                    {onClick: () => setCount(count => count+1)},
                    `count is ${count}`
                ),
                createElement(
                    'p',
                    null,
                    `Edit <code>src/App.js</code> and save to test HMR`
                )
            ),
            createElement(
                'p',
                {className: 'read-the-docs'},
                'Click on the Vite and React logos to learn more'
            ),
            createElement(
                'div',
                {className: 'date-class'},
                createElement(
                    'p',
                    null,
                    `It's ${new Date().getFullYear()} now.`
                )
            )
        )
    );
}
