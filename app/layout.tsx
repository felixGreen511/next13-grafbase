import './globals.css';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer'



export const metadata = {
  title: 'Fullstack Fibbles',
  description: 'Developed by Brilliant Microsystems app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
