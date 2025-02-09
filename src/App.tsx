import { useState } from 'react'
import './App.css'
import File, { FileData } from './components/File'
import Folder, { FolderData } from './components/Folder'
import FilterBox from './components/FilterBox'

function App() {
  const [filter, setFilter] = useState("");

  const data: (FileData|FolderData)[] = [
    {
        "type": "pdf",
        "name": "Employee Handbook",
        "added": "2017-01-06"
    },
    {
        "type": "pdf",
        "name": "Public Holiday policy",
        "added": "2016-12-06"
    },
    {
        "type": "folder",
        "name": "Expenses",
        "files":
        [
            {
                "type": "doc",
                "name": "Expenses claim form",
                "added": "2017-05-02"
            },
            {
                "type": "doc",
                "name": "Fuel allowances",
                "added": "2017-05-03"
            }
        ]
    },
    {
        "type": "csv",
        "name": "Cost centres",
        "added": "2016-08-12"
    },
    {
        "type": "folder",
        "name": "Misc",
        "files":
        [
            {
                "type": "doc",
                "name": "Christmas party",
                "added": "2017-12-01"
            },
            {
                "type": "mov",
                "name": "Welcome to the company!",
                "added": "2015-04-24"
            }
        ]
    }
  ]

  const filtered_data = filter != "" ? data.filter((item) => item.name === filter) : data;
  const fileList = filtered_data.map((file_item, index) => 
    file_item.type === "folder" ?
      <Folder key={index} type={file_item.type} name={file_item.name} files={file_item.files} /> :
      <File key={index} type={file_item.type} name={file_item.name} added={file_item.added} />
  )

  return (
    <div>
      <h2>File Browser</h2>
      {fileList}
      <FilterBox setFilter={setFilter}/>
    </div>
    
  );
    
}

export default App
