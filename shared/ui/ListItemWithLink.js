import { Pressable, StyleSheet, Text, View } from 'react-native'
import useThemeStore from '../theme/store/store'
import SwitchTheme from '../theme/SwitchTheme'
import Divider from './Divider'
import RunIcon from './Icons/RunIcon'
import TextMain from './Text/TextMain'

const ListItemWithLink = ({ title, onPress = null, position = 'middle', bg = null }) => {
  const isTheme = useThemeStore((state) => state.theme)
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignContent: 'flex-start',
            backgroundColor: pressed ? SwitchTheme(isTheme).pressedItem : bg ? bg : null,
            borderTopRightRadius: position === 'top' || position === 'all' ? 13 : 0,
            borderTopLeftRadius: position === 'top' || position === 'all' ? 13 : 0,
            borderBottomRightRadius: position === 'bottom' || position === 'all' ? 13 : 0,
            borderBottomLeftRadius: position === 'bottom' || position === 'all' ? 13 : 0,
            paddingHorizontal: 16,
          }}
        >
          <View style={styles.rows1}>
            <TextMain flexShrink={1}>{title}</TextMain>
            <View style={{ marginLeft: 8 }}>
              <RunIcon />
            </View>
          </View>
          {position === 'middle' || position === 'top' ? <Divider /> : null}
        </View>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  rows1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingRight: 0,
  },

  rows2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexShrink: 1,
  },
})

export default ListItemWithLink
