import '../styles/globals.css'

export default function RootLayout({
    children
}:{
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className='bg-gradient-to-r from-red-200 via-red-300 to-yellow-200'>{children}</body>
        </html>
    )
}