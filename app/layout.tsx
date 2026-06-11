
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="th">
      <body style={{margin:0,fontFamily:'Arial,sans-serif',background:'#f5f9ff'}}>
        {children}
      </body>
    </html>
  )
}
