import { Inter } from 'next/font/google'
import "@/src/styles/app.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'foodroya',
  description: 'فروشگاه انواع غذا ها و خوراکی های خانواده',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
