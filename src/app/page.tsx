import Image from 'next/image'
import styles from './page.module.css'
import { Htag } from '@/components/Htag/Htag'

export default function Home() {
  return (
    <div>
      <Htag tag='h1'>text</Htag>
    </div>
  )
}
