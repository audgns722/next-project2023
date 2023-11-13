import "@/assets/scss/style.scss";

export const metadata = {
  title: 'Next.js를 이용한 포트폴리오 사이트 만들기',
  description: 'Next.js를 이용하여 사이트를 만들었습니다.',
  keywords: ["포트폴리오", "next.js", "next", "넥스트"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+sml" href="favicon1.svg" />
      <body>{children}</body>
    </html>
  )
}
