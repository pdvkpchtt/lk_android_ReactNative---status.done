import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Dimensions, Linking, StyleSheet, View, Alert } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import AnimatedLogo from './AnimatedLogo'
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export default function SplashScreen({ navigation }) {
  const colors = ['#7EDAB9']
  const MARGIN = 10
  const vWidth = 586 + MARGIN
  const vHeight = 413 + MARGIN
  const width = (Dimensions.get('window').width - 64) * 0.8
  const height = ((width * vHeight) / vWidth) * 0.8

  const bg_back = 'white'
  const progress = useSharedValue(0)
  const progressOpacity = useSharedValue(0)
  const progressOpacityStroke = useSharedValue(1)
  const strokeWidth = useSharedValue(12)
  const [theme, setTheme] = useState('dark')

  const style = StyleSheet.create({
    back: {
      width: '100%',
      height: '100%',
      backgroundColor: bg_back,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })

  const paths = [
    'M114.164 89.9062V13.6367C114.164 6.21484 109.867 1.72266 103.031 1.72266C96.0977 1.72266 91.9961 6.21484 91.9961 13.6367V88.2461C91.9961 107.484 80.2773 119.496 61.8203 119.496C43.2656 119.496 31.6445 107.582 31.6445 88.2461V13.6367C31.6445 6.21484 27.3477 1.72266 20.5117 1.72266C13.5781 1.72266 9.47656 6.21484 9.47656 13.6367V89.6133C9.47656 119.203 28.9102 138.832 61.8203 138.832C93.3633 138.832 114.164 119.301 114.164 89.9062Z',
    'M135.648 108.559C135.648 114.223 139.066 120.375 145.609 126.332C154.203 134.242 168.852 138.832 185.453 138.832C216.02 138.832 235.453 123.305 235.453 98.5C235.453 79.2617 224.32 67.7383 200.102 61.6836L179.105 56.4102C166.703 53.2852 160.355 46.8398 160.355 37.8555C160.355 26.1367 170.316 18.6172 185.648 18.6172C198.148 18.6172 208.012 24.3789 213.285 34.1445C215.727 38.0508 218.754 39.8086 222.855 39.8086C228.324 39.8086 232.035 36.0977 232.035 30.6289C232.035 24.3789 228.52 17.8359 222.27 12.1719C213.676 4.35938 200.297 0.0625 185.258 0.0625C156.645 0.0625 137.699 15.6875 137.699 39.5156C137.699 58.0703 148.832 70.082 171.098 75.5508L192.191 81.0195C206.84 84.7305 213.48 90.9805 213.48 100.941C213.48 113.148 203.52 120.18 186.625 120.18C173.734 120.18 163.676 115.395 156.449 105.824C152.25 100.551 149.027 98.5977 144.828 98.5977C139.555 98.5977 135.648 102.699 135.648 108.559Z',
    'M269.242 136.977C276.273 136.977 280.375 132.484 280.375 124.867V88.1484H308.402C335.648 88.1484 353.227 71.8398 353.227 45.375C353.227 19.6914 335.746 2.69922 308.988 2.69922H275.883C263.188 2.69922 258.207 7.48438 258.207 19.8867V124.867C258.207 132.484 262.309 136.977 269.242 136.977ZM280.375 70.082V21.0586H306.84C322.172 21.0586 330.961 30.043 330.961 45.5703C330.961 63.7344 322.074 70.082 298.832 70.082H280.375Z',
    'M412.016 136.977C418.852 136.977 423.148 132.387 423.148 125.062V21.7422H453.52C459.574 21.7422 463.578 17.9336 463.578 12.2695C463.578 6.60547 459.574 2.69922 453.52 2.69922H370.707C364.75 2.69922 360.551 6.60547 360.551 12.2695C360.551 17.8359 364.75 21.7422 370.707 21.7422H400.98V125.062C400.98 132.484 405.18 136.977 412.016 136.977Z',
    'M585.062 89.9062V13.6367C585.062 6.21484 580.766 1.72266 573.93 1.72266C566.996 1.72266 562.895 6.21484 562.895 13.6367V88.2461C562.895 107.484 551.176 119.496 532.719 119.496C514.164 119.496 502.543 107.582 502.543 88.2461V13.6367C502.543 6.21484 498.246 1.72266 491.41 1.72266C484.477 1.72266 480.375 6.21484 480.375 13.6367V89.6133C480.375 119.203 499.809 138.832 532.719 138.832C564.262 138.832 585.062 119.301 585.062 89.9062Z',
    'M11.1367 376.172C17.0938 376.172 20.4141 373.242 22.7578 365.625L31.9375 338.086H80.1797L89.3594 365.625C91.6055 373.145 95.1211 376.172 101.078 376.172C107.426 376.172 111.625 372.461 111.625 366.602C111.625 364.16 111.039 361.523 109.965 358.301L73.3438 254.688C70.0234 244.824 65.2383 240.625 56.3516 240.625C47.4648 240.625 42.6797 244.922 39.2617 254.688L2.64062 358.301C1.37109 362.012 0.785156 364.551 0.785156 366.895C0.785156 372.559 4.98438 376.172 11.1367 376.172ZM37.2109 321.094L55.5703 264.746H56.6445L74.9062 321.094H37.2109Z',
    'M152.152 400.098V359.473H153.227C157.816 370.312 168.461 376.465 182.621 376.465C207.035 376.465 222.074 359.375 222.074 331.348V315.234C222.074 287.305 207.23 270.215 183.109 270.215C168.461 270.215 156.84 277.051 152.641 288.184H151.566V281.836C151.273 274.805 147.465 270.898 140.922 270.898C134.184 270.898 130.473 275.195 130.473 282.91V400.098C130.473 407.812 134.379 412.109 141.215 412.109C148.148 412.109 152.152 407.812 152.152 400.098ZM152.152 332.031V316.211C152.152 298.535 161.234 288.086 176.176 288.086C191.41 288.086 200.004 298.926 200.004 318.262V328.418C200.004 347.559 191.41 358.594 176.469 358.594C162.016 358.594 152.152 347.949 152.152 332.031Z',
    'M267.582 400.098V359.473H268.656C273.246 370.312 283.891 376.465 298.051 376.465C322.465 376.465 337.504 359.375 337.504 331.348V315.234C337.504 287.305 322.66 270.215 298.539 270.215C283.891 270.215 272.27 277.051 268.07 288.184H266.996V281.836C266.703 274.805 262.895 270.898 256.352 270.898C249.613 270.898 245.902 275.195 245.902 282.91V400.098C245.902 407.812 249.809 412.109 256.645 412.109C263.578 412.109 267.582 407.812 267.582 400.098ZM267.582 332.031V316.211C267.582 298.535 276.664 288.086 291.605 288.086C306.84 288.086 315.434 298.926 315.434 318.262V328.418C315.434 347.559 306.84 358.594 291.898 358.594C277.445 358.594 267.582 347.949 267.582 332.031Z',
  ]

  const progressColor = useDerivedValue(() => {
    return theme === 'dark' ? 0 : withTiming(1)
  })

  setTimeout(() => {
    setTheme('light')
  }, 2800)

  const rStyleBG = useAnimatedStyle(() => {
    const backgroundColors = interpolateColor(progressColor.value, [0, 1], ['black', 'white'])

    return { backgroundColor: backgroundColors }
  })

  const rStyleText = useAnimatedStyle(() => {
    return {
      fill: interpolateColor(progressColor.value, [0, 1], ['white', 'black']),
      stroke: interpolateColor(progressColor.value, [0, 1], ['black', 'white']),
    }
  })

  useEffect(() => {
    setTimeout(() => {
      progress.value = withTiming(1, { duration: 2000, easing: Easing.linear })
      setTimeout(() => {
        progressOpacity.value = withTiming(1, { duration: 500, easing: Easing.linear })
        progressOpacityStroke.value = withTiming(0, { duration: 1 })
      }, 2000)
      setTimeout(() => {
        strokeWidth.value = withTiming(0, { duration: 500 })
      }, 2000)
      setTimeout(() => {
        progressOpacity.value = withTiming(0, { duration: 100, easing: Easing.linear })
      }, 3100)
    }, 100)
  }, [progress, strokeWidth])

  const [length, setLength] = useState(0)
  const ref = useRef()
  const strokeAnimation = useAnimatedProps(() => ({
    strokeDashoffset: length - length * Easing.bezier(0.37, 0, 0.63, 1).factory()(progress.value),
    fillOpacity: progressOpacity.value,
    strokeWidth: strokeWidth.value,
    strokeOpacity: progressOpacityStroke.value,
  }))

  const animatedBGProps = useAnimatedProps(() => ({
    strokeDashoffset: length + 10 - length * Easing.bezier(0.85, 1, 0.15, 1).factory()(progress.value),
    fillOpacity: progress.value,
    strokeWidth: strokeWidth.value - 2,
    strokeOpacity: progressOpacityStroke.value,
  }))

  return (
    <Animated.View style={[style.back, rStyleBG]}>
      <Svg
        width={width}
        height={height}
        viewBox={[-MARGIN / 2, -MARGIN / 2, vWidth + MARGIN / 2, vHeight + MARGIN / 2].join(' ')}
        style={{ right: 50, bottom: 50 }}
      >
        {paths.map((d, key) => (
          <React.Fragment key={key}>
            <AnimatedPath
              animatedProps={animatedBGProps}
              ref={ref}
              d={d}
              stroke={'#007AFF'}
              strokeWidth={0}
              strokeDashoffset={0}
              fillOpacity={0}
              strokeDasharray={length}
              strokeOpacity={0}
            />
            <AnimatedPath
              style={style}
              animatedProps={strokeAnimation}
              onLayout={() => setLength(ref.current.getTotalLength())}
              ref={ref}
              d={d}
              strokeWidth={0}
              strokeDasharray={length}
              strokeDashoffset={0}
              fillOpacity={0}
              strokeOpacity={0}
            />
          </React.Fragment>
        ))}
      </Svg>
    </Animated.View>
  )
}
