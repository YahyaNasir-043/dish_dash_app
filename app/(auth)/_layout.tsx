import useAuthStore from '@/store/auth.store'
import { Redirect, Slot } from 'expo-router'
import React from 'react'
import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native'
import { images } from '../../constants'

export default function AuthLayout() {
  const { isAuthenticated } = useAuthStore();

  if(isAuthenticated) return <Redirect href="/" />

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">
        <View style={{height: Dimensions.get('screen').height / 2.25, width: '100%',}}>
          <ImageBackground source={images.loginGraphic} resizeMode="stretch" style={{ flex: 1, width: '100%', height: '100%' }} imageStyle={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}/>
          <Image source={images.logo} className="self-center size-48 absolute -bottom-16 z-10"/>
        </View>

        
      <Slot />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}