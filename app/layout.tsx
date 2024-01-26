import './globals.css'
import NavBar from './Components/NavBar'
import MyProfile from './Components/MyProfile'


export const metadata = {
  title: 'Harshana Prabhath',
  description: 'Blog of Harshana Prabhath',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className='dark:bg-slate-700 dark:text-black'>
       <NavBar/>
       <MyProfile/>
        {children}
        </body>
    </html>
  )
}
