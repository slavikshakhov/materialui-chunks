import React, {useState} from 'react'
import Header from '../../src/Components/Headers/HeaderOne'
import Footer from '../../src/Components/Footers/FooterOne'

//move logic to _app.js
const one = () => {
    const [value, setValue] = useState(0)
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <div>
            <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            <div style={{height: '400px'}}></div>
            <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        </div>
    )
}


export default one
