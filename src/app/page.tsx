import Image from 'next/image'
import { Hero } from './components/Hero'
import { AdvancedStatisticsSection } from './components/advanced-statistics-section/AdvancedStatisticsSection'

export default function Home() {
  return (
    <>
    <Hero />
    <main className="max-w-[1110px] min-h-screen flex flex-col items-center justify-between p-6">
      {/* <Hero /> */}
      <AdvancedStatisticsSection />
    </main>
    </>
  )
}
