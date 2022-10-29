import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Landing from '../components/Landing'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Landing />
      <Footer />
    </div>
  )
}

export default Home
