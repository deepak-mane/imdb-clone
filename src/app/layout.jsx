import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'IMDB - CLONE',
    description: 'Clone of IMDB website Educational'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
