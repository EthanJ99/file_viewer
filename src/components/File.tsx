interface FileProps {
    file_type: string;
    name: string,
    date_added: string
}

function File ({file_type, name, date_added}: FileProps) {
    return (
        <ul className="fileClass">
           <li className="fileName">{name}</li>
           <li className="fileType">{file_type}</li>
           <li className="dateAdded">{date_added}</li>
        </ul>
    )
}

export default File;