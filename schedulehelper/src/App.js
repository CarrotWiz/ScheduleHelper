import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import Header from './pages/Header';
import BrowseClasses from './pages/BrowseClasses';
import UploadCurriculum from './pages/UploadCurriculum';
import {on_load} from './DataLoader';

function App() {

  const [page, setPage] = useState(0);
  const courses = on_load();

  return (
    <div className="App">
      <Header />
      {page === 0 ? <StartPage setPage={setPage}/>: null}
      {page === 1 ? <BrowseClasses courses={courses} setPage={setPage}/>: null}
      {page === 2 ? <UploadCurriculum setPage={setPage} />: null}
    </div>
  );
}

export default App;
