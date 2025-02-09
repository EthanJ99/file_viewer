import File from '../components/File';
import { FileData } from '../components/File';

export interface FolderData {
    type: string;
    name: string,
    files: FileData[]
}

function Folder({ type, name, files }: FolderData) {
    const fileList = files?.map((fileItem) =>
        <File
            name={fileItem["name"]}
            type={fileItem["type"]}
            added={fileItem["added"]} />
    );

    // Not returning the folder type as the list looks better without it
    return (

        <div>
            <ul className="folderClass">
                <li className="folderName">{name}</li>
            </ul>
            {fileList}
        </div>
    )
}

export default Folder;