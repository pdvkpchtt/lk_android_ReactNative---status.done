import React from 'react'
import Svg, { G, Path, Rect } from 'react-native-svg'
import useThemeStore from '../../theme/store/store'
import SwitchTheme from '../../theme/SwitchTheme'
const MyWorksIcon = ({ props, color }) => {
  const isTheme = useThemeStore((state) => state.theme)
  return (
    <Svg viewBox="0 0 28 28" width="28" height="28">
      <G {...props}>
        <Rect width="28" height="28" rx="6" fill="#FE3B30" />
        <Path
          d="M9.56738 23.063H18.4326C20.2505 23.063 21.2217 22.0835 21.2217 20.249V12.9028H14.8633C13.8423 12.9028 13.3442 12.3965 13.3442 11.3755V4.96729H9.56738C7.74951 4.96729 6.77832 5.93848 6.77832 7.77295V20.249C6.77832 22.0835 7.74121 23.063 9.56738 23.063ZM15.104 11.6328H21.1387C21.0972 11.2261 20.7983 10.8525 20.3418 10.3877L15.8428 5.83057C15.4028 5.39062 15.0127 5.0835 14.6143 5.04199V11.1431C14.6143 11.4668 14.7803 11.6328 15.104 11.6328ZM10.7959 16.605C10.4224 16.605 10.1567 16.3394 10.1567 15.9824C10.1567 15.6421 10.4224 15.3765 10.7959 15.3765H17.229C17.5859 15.3765 17.8599 15.6421 17.8599 15.9824C17.8599 16.3394 17.5859 16.605 17.229 16.605H10.7959ZM10.7959 19.7012C10.4224 19.7012 10.1567 19.4355 10.1567 19.0869C10.1567 18.7383 10.4224 18.4644 10.7959 18.4644H17.229C17.5859 18.4644 17.8599 18.7383 17.8599 19.0869C17.8599 19.4355 17.5859 19.7012 17.229 19.7012H10.7959Z"
          fill="white"
        />
      </G>
    </Svg>
  )
}

export default MyWorksIcon
