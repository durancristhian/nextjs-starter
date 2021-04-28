import { extendTheme } from '@chakra-ui/react'

const defaultSystemFonts =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
const customFont = `"Open Sans", ${defaultSystemFonts}`

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    body: customFont,
    heading: customFont,
  },
})

export default theme
