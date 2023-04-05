import { useTheme, useThemeUpdate } from './ThemeContext'

const FunctionContextComponent = () => {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const Theme = { backgroundColor: darkTheme ? '#000000 ' : '#67bbf3', color: darkTheme ? '#7cc4f5' : '#000000' }

    return (
        <div>
            <button onClick={toggleTheme}>Change color</button>
            <div className='box' style={Theme}>
                Hello
            </div>
        </div>
    )
}

export default FunctionContextComponent