import Header from '@/components/Header'
import './globals.css'

import { Roboto } from '@next/font/google'
import Providers from './Providers'

export const metadata = {
    title: 'IMDB - CLONE',
    description: 'Clone of IMDB website Educational'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    {/* header */}
                    <Header />
                    {/* Navbar */}

                    {/* search box */}
                    {children}
                </Providers>
            </body>
        </html>
    )
}
