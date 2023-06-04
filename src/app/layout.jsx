import Header from '@/components/Header'
import './globals.css'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'IMDB - CLONE',
    description: 'Clone of IMDB website Educational'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                {/* header */}
                <Header />
                {/* Navbar */}

                {/* search box */}
                {children}
            </body>
        </html>
    )
}
