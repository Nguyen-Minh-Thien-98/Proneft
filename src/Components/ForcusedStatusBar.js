import { StatusBar} from 'react-native'
import { useIsFocused } from '@react-navigation/core'
import React from 'react'

const ForcusedStatusBar = (props) => {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props}/> : null
}

export default ForcusedStatusBar