import { redirect } from 'next/navigation'

/**
 * /services permanently redirects to /courses.
 * Using Next.js server-side redirect() gives a proper 308 response
 * which search engines honour as a permanent redirect — preserving link equity.
 */
export default function ServicesPage() {
  redirect('/courses')
}
