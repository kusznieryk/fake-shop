import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
        transition: 'all 1s'
      }
    }
  }
})
