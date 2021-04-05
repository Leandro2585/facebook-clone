import React from 'react'
import AppRoute from './src/routes'
import { StatusBar } from 'expo-status-bar'

export default function App () {
  return (
    <>
    <StatusBar style="dark"/>
    <AppRoute/>
    </>
  )
}
