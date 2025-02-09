import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import File, { FileData } from './components/File'
import Folder, { FolderData } from './components/Folder'

function App() {
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

  console.log("Received data of type " + typeof(data));
  const fileList = data.map((file_item, index) => 
    file_item.type === "folder" ?
      <Folder key={index} type={file_item.type} name={file_item.name} files={file_item.files} /> :
      <File key={index} type={file_item.type} name={file_item.name} added={file_item.added} />
  )

  return (fileList);
    
}

export default App
