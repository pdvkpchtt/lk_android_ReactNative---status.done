import { useLayoutEffect, useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { useWorkAddStore } from '../../../features/WorkAddManageForm'
import useThemeStore from '../../../shared/theme/store/store'
import SwitchTheme from '../../../shared/theme/SwitchTheme'
import Layout from '../../../shared/ui/Layout'
import TextCaption from '../../../shared/ui/Text/TextCaption'

const EditText = ({ navigation, route }) => {
  const isTheme = useThemeStore((state) => state.theme)
  const { value, setValue } = useWorkAddStore((state) => ({
    value: state[route.params.value],
    setValue: state[route.params.setValue],
  }))
  const [text, setText] = useState(value)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text
          style={{
            fontSize: 20,
            lineHeight: 24,
            color: isTheme.includes('theme_usual') ? SwitchTheme(isTheme).textMain : '#fff',
            fontFamily: 'Roboto-Medium',
          }}
        >
          {route.params.header}
        </Text>
      ),
    })
  })
  return (
    <Layout>
      {/* <View style={{ marginHorizontal: 16 }}>
        <TextCaption>Название работы</TextCaption>
      </View> */}
      <TextInput
        style={{
          marginTop: 12,
          borderRadius: 20,
          fontSize: 17,
          fontFamily: 'Roboto-Regular',
          lineHeight: 22,
          textAlign: 'left',
          letterSpacing: -0.41,
          paddingHorizontal: 16,
          paddingVertical: 10,
          backgroundColor: SwitchTheme(isTheme).bgItem,
          color: SwitchTheme(isTheme).textMain,
        }}
        placeholder={route.params.header}
        placeholderTextColor={SwitchTheme(isTheme).placeholderSearch}
        autoFocus={true}
        cursorColor={SwitchTheme(isTheme).placeholderSearch}
        selectionColor={SwitchTheme(isTheme).placeholderSearch}
        editable
        multiline
        value={text}
        onChangeText={(value) => {
          setText(value)
          setValue(value.trim().replace(/\n/g, ' '))
        }}
        // ref={inputRef}
        // multiline={true}
        // //  placeholder={'Содержимое заметки'}
        // variant="unstyled"
        // width="100%"
        // _light={{
        //   bg: 'white',
        //   color: 'black',
        //   placeholderTextColor: '#C7C7CC',
        //   selectionColor: '#007AFF',
        // }}
        // _dark={{
        //   bg: '#2C2C2E',
        //   color: 'white',
        //   keyboardAppearance: 'dark',
        //   placeholderTextColor: '#7D7D7D',
        // }}
        // borderRadius="13px"
        // fontSize="17px"
        // lineHeight="22px"
        // textAlign={'left'}
        // fontStyle="normal"
        // letterSpacing={-0.41}
        // px="16px"
        // py="11px"
        // onChangeText={(value) => {
        //   setText(value)
        //   if (!hasChanged) {
        //     setHasChanged(true)
        //   }
        // }}
        // value={text}
      />
    </Layout>
  )
}

export default EditText
