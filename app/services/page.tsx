'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ServicesRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/courses')
  }, [router])

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-serif mb-2">Redirecting to Courses...</h1>
        <p className="text-sm text-black/40">Please wait while we transfer you to our training programs.</p>
      </div>
    </div>
  )
}
