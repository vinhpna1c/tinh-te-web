import Image from 'next/image'
import Header from './components/Header'
import TagItem from './components/TagItem'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap overflow-x-auto'>
          <TagItem>Home</TagItem>
          <TagItem>#final cut pro ipad</TagItem>
          
        </div>


      </div>

    </div>
  )
}
