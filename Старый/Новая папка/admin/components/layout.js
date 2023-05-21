import Head from "next/head"

import Header from "./header"
import Menu from "./menu"

export function Layout({children}){
    return(<>
        <Head>
            <title>Магазин кроссовок</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Menu />
        <div className="content">
            {children}
        </div>
    </>)
}