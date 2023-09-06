import Link from 'next/link'
import React from 'react'


const layout = ({ children }) => {
    const linkStyle = {color: "blue", margin: "5px"}
    return (
        <div style={{textAlign:"center", marginTop: "1rem"}} >
            <Link style={linkStyle} href={"/admin-secret/catagory"}>All catagores</Link>
            <Link style={linkStyle} href={"/admin-secret/catagory/add-catagory"}>Add catagories</Link>

            {children}
        </div>
    )
}

export default layout