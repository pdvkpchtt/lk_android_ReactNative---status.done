import React from 'react'
import Svg, { G, Path, Rect } from 'react-native-svg'
import useThemeStore from '../../theme/store/store'
import SwitchTheme from '../../theme/SwitchTheme'

const RunIcon = ({ props }) => {
  const isTheme = useThemeStore((state) => state.theme)
  return (
    <Svg viewBox="0 0 7 12" width="7" height="12">
      <G {...props}>
        <Rect width="7" height="12" rx="6" />
        <Path
          d="M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z"
          fill={SwitchTheme(isTheme).runicon}
        />
      </G>
    </Svg>
  )
}

export default RunIcon
