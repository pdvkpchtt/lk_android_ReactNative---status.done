import { Text } from 'react-native'
import useThemeStore from '../../theme/store/store'
import SwitchTheme from '../../theme/SwitchTheme'

export default function TextSmall(props) {
  const isTheme = useThemeStore((state) => state.theme)
  return (
    <Text
      style={{
        color: props.color || SwitchTheme(isTheme).textMain,
        fontSize: 14,
        fontFamily: 'Roboto',
        lineHeight: 20,
        letterSpacing: 0.25,
        ...props,
      }}
    >
      {props.children}
    </Text>
  )
}
