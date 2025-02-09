export interface FileData {
    type: string;
    name: string,
    added: string,
}

function File ({type, name, added}: FileData) {
    return (
        <ul className="fileClass">
           <li className="fileName">{name}</li>
           <li className="fileType">{type}</li>
           <li className="dateAdded">{added}</li>
        </ul>
    )
}

export default File;