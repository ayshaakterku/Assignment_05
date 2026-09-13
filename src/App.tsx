import { Suspense, useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import type { Technology } from './components/type'
import TechnologyCard from './components/TechnologyCard'


const techData = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
console.log;
function App() {
  const [selectedByCategory, setSelectedByCategory] = useState(()=> techData ());
  console.log(selectedByCategory);

  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<div>Nadir Loading...</div>}>
      
      </Suspense> 
    </>
  )
}

export default App
