import Link from 'next/link'
import { useRouter } from 'next/router'

const Blog = () => {
  const router = useRouter()

  return (
    <Link href={`${router.pathname}/article`}>
      <a>article</a>
    </Link>
  )
}

export default Blog
