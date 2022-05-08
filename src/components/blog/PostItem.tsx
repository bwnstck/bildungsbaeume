import Link from 'next/link'

import { parseISO } from 'date-fns'

import { PostContent } from '$lib/posts'

import Date from './Date'

type Props = {
  post: PostContent
}
export default function PostItem({ post }: Props) {
  return (
    <Link href={'/posts/' + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h3>{post.title}</h3>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h3 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  )
}
