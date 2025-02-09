import { useState } from 'react';
import File from '../components/File';
import { FileData } from '../components/File';

export interface FolderData {
    type: string;
    name: string,
    files: FileData[]
}

function Folder({ type, name, files }: FolderData) {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    const fileList = files?.map((fileItem, index) =>
        <File
            key={index}
            name={fileItem.name}
            type={fileItem.type}
            added={fileItem.added} />
    );

    // Not returning the folder type as the list looks better without it
    return (

        <div>
            <ul className="folderClass">
                <li className="folderName" onClick={() => handleClick()}>📁 {name}</li>
            </ul>
            
            {isOpen ? fileList : null}
        </div>
    )
}

export default Folder;