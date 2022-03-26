import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content="#000000" />
            <meta name="description" content="Web site created using create-react-app" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
            <div id="root"/>
        </body>
    </Html>
  )
}