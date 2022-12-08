import React from 'react'
import { BrowserRouter,Routes , Route,Link } from 'react-router-dom'
import DetailUser from '../session7/DetailUser';
import FormUser from '../session7/FormUser'
import ListUser from '../session7/ListUser'
import styles from './styles.module.css';
function RouterAll() {
  return (
    <div>
        <BrowserRouter>
         {/* NAVIGATION */}
         <ul className={styles.navigation}>
          
          <li className={styles.link}>
            <Link to='/form'>Form</Link>
          </li>
          <li className={styles.link}>
            <Link to='/list'>List</Link>
          </li>
          <li className={styles.link}>
            <Link to='/detail'>Detail</Link>
          </li>
          
        </ul>

          {/* ROUTES SETTINGS */}
         <Routes>
          <Route path='/form' element={<FormUser />} />
          {/* update user  */}
          <Route path="/form/:id" element={<FormUser />} />
          <Route path='/list' element={<ListUser />} />
          <Route path='/detail/:id' element={<DetailUser />} />
          
           {/* NO MATCH ROUTE */}
           <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found</p>
              </main>
            }
          />
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterAll