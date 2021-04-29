import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React from 'react'

function Error() {
  return (
    <Alert status="error" justifyContent="center">
      <AlertIcon />
      <AlertTitle mr={4}>An error occurred</AlertTitle>
    </Alert>
  )
}

export default Error
