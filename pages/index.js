import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const multiplier = 1
const width = 4000 * multiplier
const height = 2396 * multiplier

export default function Home() {
  return (
    <Image
      src='/img.jpg'
      alt='Picture'
      width={width}
      height={height}
      layout='responsive'
    />
  )
}
