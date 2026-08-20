import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Dashboard from './pages/Dashboard'
import Resources from './pages/Resources'
import Categories from './pages/Categories'
import Companies from './pages/Comapnies'
import Layout from './layouts/Layout'

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
    <Route path='/companies' element={<Companies/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/resources' element={<Resources/>}/>


    </Routes>

    </Layout>

   
   </div>
   </>
  )
}

export default App
