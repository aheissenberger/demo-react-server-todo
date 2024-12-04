import './globals.css'

export const metadata: Metadata = {
  title: 'ToDo App',
  description: 'A simple todo app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
      
      
        
        <main className="container mx-auto p-4">
          {children}
        </main>
       
      </body>
    </html>
  )
}

