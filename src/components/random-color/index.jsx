import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#00fa00')

    const randomColorUtility = (hexLength) => {
        return Math.floor(Math.random() * hexLength)
    }

    const handleRandomHexColor = () => {
        const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
        let hexColor = '#'

        for (let index = 0; index < 6; index++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        console.log('>>color: ', hexColor)
        setColor(hexColor)
    }

    const handleRandomRgbColor = () => {
        const red = randomColorUtility(256)
        const green = randomColorUtility(256)
        const blue = randomColorUtility(256)
        console.log('>>check rgb color: ' + `rgb(${red},${green},${blue})`)
        setColor(`rgb(${red},${green},${blue})`)
    }

    useEffect(() => {
        if (typeOfColor === 'hex')
            handleRandomHexColor()
        else
            handleRandomRgbColor()
    }, [typeOfColor])

    return (
        <div className='container' style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: color
        }}>
            <button onClick={() => setTypeOfColor('hex')}>Create hex color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create rgb color</button>
            <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRgbColor}>Generate random color</button>

            <div>
                <h3>{typeOfColor} Color</h3>
                <h4>{color}</h4>
            </div>
        </div>
    )
}

export default RandomColor
