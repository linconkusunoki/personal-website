import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <body className="h-screen flex justify-center items-center bg-slate-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
