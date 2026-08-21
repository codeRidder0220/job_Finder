import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Companies from './pages/Comapnies'
import Layout from './layouts/Layout'
import ApplyJob from './components/ApplyJob'
import Application from './components/Application'

import {Routes , Route} from 'react-router-dom'
import JobDetail from './components/JobDetail'

function App() {

  return (
   <>
   <div className='bg-[#F8FAFC]'>

    <Layout>

    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/jobs' element={<Jobs/>}/>
    <Route path='/jobs/:id' element={<JobDetail/>}/>
    <Route path='/jobs/:id/apply' element={<ApplyJob/>}/>
    <Route path='/companies' element={<Companies/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/application' element={<Application/>}/>

    </Routes>

    </Layout>

   
   </div>
   </>
  )
}

export default App
