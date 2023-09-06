import Link from 'next/link'
import Admin from './admin-secret/page'

export default function Home() {
  return (
    <main>
      <p>under here comes the admin page</p>
      <hr></hr>
      <Link href="admin-secret"> Go to admin secret</Link>
    </main>
  )
}
