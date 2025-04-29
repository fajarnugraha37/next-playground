'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation';
 
export function NotFound() {
  const pathName = usePathname();

  return (
    <div>
      <h2>Oops! Something went wrong!</h2>
      <p>Could not find <strong>{pathName}</strong> resource</p>
      <br />
      <p><Link href="/">Return Home</Link></p>
    </div>
  )
}