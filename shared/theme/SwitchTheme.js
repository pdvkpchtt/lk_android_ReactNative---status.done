// const isTheme = useThemeStore((state) => state.theme)
// SwitchTheme(isTheme).bgFon
import { Dimensions } from 'react-native'
import ItFon from '../images/ItFon'
import UsualFon from '../images/UsualFon'
import UvsheuFon from '../images/UvsheuFon'
import AsiFon from '../images/AsiFon'
import FttFon from '../images/FttFon'
import GnfFon from '../images/GnfFon'
import IesFon from '../images/IesFon'
import InbFon from '../images/InbFon'
import InictFon from '../images/InictFon'
import TfFon from '../images/TfFon'
import EpshFon from '../images/EpshFon'
import ItFonDark from '../images/ItFonDark'
import UsualFonDark from '../images/UsualFonDark'
import UvsheuFonDark from '../images/UvsheuFonDark'
import AsiFonDark from '../images/AsiFonDark'
import FttFonDark from '../images/FttFonDark'
import GnfFonDark from '../images/GnfFonDark'
import IesFonDark from '../images/IesFonDark'
import InbFonDark from '../images/InbFonDark'
import InictFonDark from '../images/InictFonDark'
import TfFonDark from '../images/TfFonDark'
import EpshFonDark from '../images/EpshFonDark'
import VshistFonDark from '../images/VshistFonDark'
import VshistFon from '../images/VshistFon'
const SwitchTheme = (theme) => {
  const { width, height } = Dimensions.get('screen')

  const defaultThemeLight = {
    hoverBlue: '#4280C7',
    dateInDatePicker: '#000',
    usualIconOreol: '#DCE3EB',
    textMain: '#333333',
    textSec: '#898989',
    textHeader: '#7A7A7C',
    bgItem: 'white',
    pressedItem: '#E4E4ED',
    runicon: '#1D1B20',
    divider: '#DFDFDF',
    bgSection: '#FCFCFC99', //bginterval
    textbuttondate: '#000000',
    bgMesEducator: '#ffffff',
    textMesEducator: '#000000',
    textTimeMesEducator: '#8A8A8E',
    colorlineBottomNav: '#D7D7D7',
    textTopNav: '#000000',
    bgTopNav: '#F9F9F9',
    bgTopNavForThemes: '#F9F9F9',
    bgBottomNav: '#F9F9F9',

    checkBox: '#898989',
    textSearch: '#000000',

    FAB: '#FFFFFF',
    FABStroke: '#e7e7ec',
    FABIcon: '#C7C7CC',

    bgSearch: '#fff',
    placeholderSearch: '#808084',

    placeholderSearchpressed: '#C7C7CC',
    bgSearchpressed: '#E5E5E6',

    borderSearch: '#AAAAAD',
    typeColorlec: '#4CCA37',
    typeColorlecpressed: '#57B448',
    typeColorprac: '#2DAEF0',
    typeColorpracpressed: '#2F99CF',
    typeColorlab: '#FF9C45',
    typeColorlabpressed: '#E18A3D',
    typeColorzach: '#FF6E5B',
    typeColorzachpressed: '#E26555',
    typeColorekz: '#FF6E5B',
    typeColorekzpressed: '#E26555',
    typeColorkons: '#786FCC',
    typeColorkonspressed: '#655DAF',
    typeColorproch: '#63899A',
    typeColorprochpressed: '#557889',
    textButtonExit: '#FF6E5B',
    tabBarInactiveTintColor: '#45474A',
  }

  const defaultThemeDark = {
    hoverBlue: '#4280C7',
    dateInDatePicker: '#fff',
    bgItem: '#1D1D1D',
    textMain: '#FFFFFF',
    usualIconOreol: '#444444',
    textSec: '#8A8A8E',
    textHeader: '#636366', //textinterval
    pressedItem: '#4F4F4F',
    runicon: '#4E4E4E',
    divider: '#303030',
    bgSection: '#1C1C1F', //bginterval
    textbuttondate: '#000000',
    bgMesEducator: '#ffffff',
    textMesEducator: '#000000',
    textTimeMesEducator: '#8A8A8E',
    colorlineBottomNav: '#323233',
    textButtonExit: '#FF3B30',
    textTopNav: '#FFFFFF',
    bgTopNav: '#1D1D1D',
    bgTopNavForThemes: '#05080A',
    bgBottomNav: '#1D1D1D',

    checkBox: '#fff',
    textSearch: '#FFFFFF',

    FAB: '#1D1D1D', // тф гнф инб  епш
    FABStroke: '#2f2f2f',
    FABIcon: '#fff',

    bgSearch: '#000000',
    placeholderSearch: '#545454',

    placeholderSearchpressed: '#595959',
    bgSearchpressed: '#0A0A0A',

    borderSearch: '#313133',
    typeColorlec: '#34C759',
    typeColorlecpressed: '#3AAF58',
    typeColorprac: '#5AC8FA',
    typeColorpracpressed: '#5ABCE9',
    typeColorlab: '#FF9500',
    typeColorlabpressed: '#E29830',
    typeColorzach: '#FE3B30',
    typeColorzachpressed: '#E23B31',
    typeColorekz: '#FE3B30',
    typeColorekzpressed: '#E23B31',
    typeColorkons: '#AF52DE',
    typeColorkonspressed: '#9C4BC5',
    typeColorproch: '#5856D6',
    typeColorprochpressed: '#4A49B8',
    tabBarInactiveTintColor: '#dddddd',
  }

  switch (theme) {
    case 'theme_usual':
      return {
        ...defaultThemeLight,
        hoverEffect: '#f5f5f5',
        bgFon: '#F2F2F7', // цвет под фон картинки
        fonImage: <UsualFon width={width} height={height} />,

        placeselectionSearch: '#4A90E0', //color

        bgBadgeMes: '#FF3B30', //под вопросом, оттеннок ли?
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#4A90E0', //color
        bgbutton1: '#F2F2F2', //оттенок по-хорошему придать
        bgbutton1pressed: '#BDBDBD', //оттенок по-хорошему придать press
        textbutton1: '#4A90E0', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#4A90E0', //color
        bgbuttondefaultpressed: '#4A90E0',
        textbuttondefault: 'white',

        textlink: '#4A90E0', //color
        bgMesStudent: '#4A90E0', //color

        textMesStudent: '#4A90E0', //color
        textTimeMesStudent: '#4A90E0', //color
        colorIndicator: '#4A90E0', //color
        textHeaderButton: '#4A90E0', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#151C22', //color
        textdecoration: 'Стандартное оформление',
        textlozungdecoration: 'Для консерваторов',
      }
    case 'theme_it':
      return {
        ...defaultThemeLight,
        hoverEffect: '#E9A163',
        bgFon: '#F5B471', // цвет под фон картинки
        fonImage: <ItFon width={width} height={height} />,

        textOuterSec: '#4B3A27', // текст секондари вне хуйни бля крч вне карточек

        placeholderTextLight: '#F5C295',

        placeselectionSearch: '#EC9041', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#EC9041', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#EC9041', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#EC9041', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#EC9041', //color
        bgMesStudent: '#EC9041', //color

        textMesStudent: '#EC9041', //color
        textTimeMesStudent: '#EC9041', //color
        colorIndicator: '#EC9041', //color
        textHeaderButton: '#EC9041', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#EC9041', //color
        textdecoration: 'IT-институт',
        textlozungdecoration: 'Яркий. Сочный. Твой.',
      }
    case 'theme_asi':
      return {
        ...defaultThemeLight,
        hoverEffect: '#EE7F66',
        bgFon: '#FFF1EE', // цвет под фон картинки
        fonImage: <AsiFon width={width} height={height} />,

        textOuterSec: '#4F3937',

        placeselectionSearch: '#F16E51', //color

        placeholderTextLight: '#FEB5A5',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#F16E51', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#F16E51', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#F16E51', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#F16E51', //color
        bgMesStudent: '#F16E51', //color

        textMesStudent: '#F16E51', //color
        textTimeMesStudent: '#F16E51', //color
        colorIndicator: '#F16E51', //color
        textHeaderButton: '#F16E51', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#F16E51', //color
        textdecoration: 'АСИ',
        textlozungdecoration: 'Строим светлое будущее.',
      }
    case 'theme_ftt':
      return {
        ...defaultThemeLight,
        hoverEffect: '#383838',
        bgFon: '#FAFAFA', // цвет под фон картинки
        fonImage: <FttFon width={width} height={height} />,

        placeselectionSearch: '#0D0D0D', //color

        textOuterSec: '#4D4D4D',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        placeholderTextLight: '#6C6C6C',

        checkIcon: '#0D0D0D', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#0D0D0D', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#0D0D0D', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#0D0D0D', //color
        bgMesStudent: '#0D0D0D', //color

        textMesStudent: '#0D0D0D', //color
        textTimeMesStudent: '#0D0D0D', //color
        colorIndicator: '#0D0D0D', //color
        textHeaderButton: '#0D0D0D', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#0D0D0D', //color
        textdecoration: 'ФТТ',
        textlozungdecoration: 'pipe-lines, pipe-lines!!!',
      }
    case 'theme_inict':
      return {
        ...defaultThemeLight,
        hoverEffect: '#7AA8DD',
        bgFon: '#C0D9F5', // цвет под фон картинки
        fonImage: <InictFon />,

        textOuterSec: '#36404C',

        placeselectionSearch: '#5A97DC', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        placeholderTextLight: '#9DBDE2',

        checkIcon: '#5A97DC', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#5A97DC', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#5A97DC', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#5A97DC', //color
        bgMesStudent: '#5A97DC', //color

        textMesStudent: '#5A97DC', //color
        textTimeMesStudent: '#5A97DC', //color
        colorIndicator: '#5A97DC', //color
        textHeaderButton: '#5A97DC', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#5A97DC', //color
        textdecoration: 'ИНИЦТ',
        textlozungdecoration: 'Зверя нет сильней медведя! Наш ИНИЦТ вперед к победе!',
      }
    case 'theme_tf':
      return {
        ...defaultThemeLight,
        hoverEffect: '#7C86E2',
        bgFon: '#9099F1', // цвет под фон картинки
        fonImage: <TfFon width={width} height={height} />,

        placeselectionSearch: '#4D5BD8', //color

        textOuterSec: '#2D324D',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        placeholderTextLight: '#939CE9',

        checkIcon: '#4D5BD8', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#4D5BD8', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#4D5BD8', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#4D5BD8', //color
        bgMesStudent: '#4D5BD8', //color

        textMesStudent: '#4D5BD8', //color
        textTimeMesStudent: '#4D5BD8', //color
        colorIndicator: '#4D5BD8', //color
        textHeaderButton: '#4D5BD8', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#4D5BD8', //color
        textdecoration: 'ТФ',
        textlozungdecoration: 'Самый солнечный факультет УГНТУ!',
      }
    case 'theme_gnf':
      return {
        ...defaultThemeLight,
        hoverEffect: '#587FCB',
        bgFon: '#8DA8E0', // цвет под фон картинки
        fonImage: <GnfFon width={width} height={height} />,

        textOuterSec: '#2D374E',

        placeselectionSearch: '#2C5AB5', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#2C5AB5', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#2C5AB5', //color

        placeholderTextLight: '#5C87DE',

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#2C5AB5', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#2C5AB5', //color
        bgMesStudent: '#2C5AB5', //color

        textMesStudent: '#2C5AB5', //color
        textTimeMesStudent: '#2C5AB5', //color
        colorIndicator: '#2C5AB5', //color
        textHeaderButton: '#2C5AB5', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#2C5AB5', //color
        textdecoration: 'ГНФ',
        textlozungdecoration: 'Самый сильный и большой — это горно-нефтяной.',
      }
    case 'theme_inb':
      return {
        ...defaultThemeLight,
        hoverEffect: '#E46171',
        bgFon: '#E5A1A8', // цвет под фон картинки
        fonImage: <InbFon width={width} height={height} />,

        placeselectionSearch: '#D93045', //color

        textOuterSec: '#4D3235',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#D93045', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#D93045', //color

        placeholderTextLight: '#EA7B89',

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#D93045', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#D93045', //color
        bgMesStudent: '#D93045', //color

        textMesStudent: '#D93045', //color
        textTimeMesStudent: '#D93045', //color
        colorIndicator: '#D93045', //color
        textHeaderButton: '#D93045', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#D93045', //color
        textdecoration: 'ИНБ',
        textlozungdecoration: 'Акулы бизнеса.',
      }
    case 'theme_ies':
      return {
        ...defaultThemeLight,
        hoverEffect: '#66BD8F',
        bgFon: '#C2F1B1', // цвет под фон картинки
        fonImage: <IesFon width={width} height={height} />,

        placeselectionSearch: '#3D9E6B', //color

        textOuterSec: '#3C4D36',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#3D9E6B', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#3D9E6B', //color

        placeholderTextLight: '#71BE96',

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#3D9E6B', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#3D9E6B', //color
        bgMesStudent: '#3D9E6B', //color

        textMesStudent: '#3D9E6B', //color
        textTimeMesStudent: '#3D9E6B', //color
        colorIndicator: '#3D9E6B', //color
        textHeaderButton: '#3D9E6B', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#3D9E6B', //color
        textdecoration: 'ИЭС',
        textlozungdecoration: 'let the green into your heart.',
      }

    case 'theme_uvsheu':
      return {
        ...defaultThemeLight,
        hoverEffect: '#DF7D75',
        bgFon: '#C3DDEC', // цвет под фон картинки
        fonImage: <UvsheuFon width={width} height={height} />,

        placeselectionSearch: '#DE594F', //color

        textOuterSec: '#35424D',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#DE594F', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#DE594F', //color

        placeholderTextLight: '#F89D97',

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#DE594F', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#DE594F', //color
        bgMesStudent: '#DE594F', //color

        textMesStudent: '#DE594F', //color
        textTimeMesStudent: '#DE594F', //color
        colorIndicator: '#DE594F', //color
        textHeaderButton: '#DE594F', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#DE594F', //color
        textdecoration: 'УВШЭУ',
        textlozungdecoration:
          'Стремиться нужно вверх, Так вот УВШЭУ - твой успех Гринфинд знаний ты открыл, и в УВШЭУ поступил',
      }

    case 'theme_vshist':
      return {
        ...defaultThemeLight,
        hoverEffect: '#9E8FB0',
        bgFon: '#CDC0DA', // цвет под фон картинки
        fonImage: <VshistFon width={width} height={height} />,

        placeselectionSearch: '#8E76A9', //color

        textOuterSec: '#40364D',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#8E76A9', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#8E76A9', //color

        placeholderTextLight: '#B4A1C9',

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#8E76A9', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#8E76A9', //color
        bgMesStudent: '#8E76A9', //color

        textMesStudent: '#8E76A9', //color
        textTimeMesStudent: '#8E76A9', //color
        colorIndicator: '#8E76A9', //color
        textHeaderButton: '#8E76A9', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#8E76A9', //color
        textdecoration: 'ВыШкаИнСоТех',
        textlozungdecoration: 'Это вышка!',
      }

    case 'theme_epsh':
      return {
        ...defaultThemeLight,
        hoverEffect: '#8083E7',
        bgFon: '#F2F2F2', // цвет под фон картинки
        fonImage: <EpshFon width={width} height={height} />,

        placeselectionSearch: '#6E72E3', //color

        textOuterSec: '#4B3F3D',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        placeholderTextLight: '#AAACEC',

        checkIcon: '#6E72E3', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#6E72E3', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#6E72E3', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#6E72E3', //color
        bgMesStudent: '#6E72E3', //color

        textMesStudent: '#6E72E3', //color
        textTimeMesStudent: '#6E72E3', //color
        colorIndicator: '#6E72E3', //color
        textHeaderButton: '#6E72E3', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#6E72E3', //color

        tabBarActiveTintColorLeft: '#D9C358', //left
        tabBarActiveTintColorRight: '#D45A6E', //right

        textdecoration: 'ЕПШ',
        textlozungdecoration: 'Many options many skills.',
      }

    case 'theme_usual_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#333237',

        bgFon: '#000000', // цвет под фон картинки
        fonImage: <UsualFonDark width={width} height={height} />,

        placeselectionSearch: '#4a90e0', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#4a90e0', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#4a90e0', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#4a90e0', //color
        bgbuttondefaultpressed: '#4a90e0',
        textbuttondefault: 'white',

        textlink: '#4a90e0', //color
        bgMesStudent: '#4a90e0', //color

        textMesStudent: '#4a90e0', //color
        textTimeMesStudent: '#4a90e0', //color
        colorIndicator: '#4a90e0', //color
        textHeaderButton: '#4a90e0', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#fff', //color
        textdecoration: 'Стандартное оформление',
        textlozungdecoration: 'Для консерваторов',
      }
    case 'theme_it_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#E9A163',
        bgFon: '#000000', // цвет под фон картинки
        fonImage: <ItFonDark width={width} height={height} />,

        textOuterSec: '#FFFFFF', // текст секондари вне хуйни бля крч вне карточек

        placeselectionSearch: '#EC9041', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#1D1D1D',

        checkIcon: '#EC9041', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#EC9041', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#EC9041', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#EC9041', //color
        bgMesStudent: '#EC9041', //color

        textMesStudent: '#EC9041', //color
        textTimeMesStudent: '#EC9041', //color
        colorIndicator: '#EC9041', //color
        textHeaderButton: '#EC9041', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#EC9041', //color
        textdecoration: 'IT-институт',
        textlozungdecoration: 'Яркий. Сочный. Твой.',
      }
    case 'theme_asi_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#EE7F66',
        bgFon: '#160F0F', // цвет под фон картинки
        fonImage: <AsiFonDark width={width} height={height} />,

        textOuterSec: '#ffffff',

        placeselectionSearch: '#F16E51', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#F16E51', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#F16E51', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#F16E51', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#F16E51', //color
        bgMesStudent: '#F16E51', //color

        textMesStudent: '#F16E51', //color
        textTimeMesStudent: '#F16E51', //color
        colorIndicator: '#F16E51', //color
        textHeaderButton: '#F16E51', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#F16E51', //color
        textdecoration: 'АСИ',
        textlozungdecoration: 'Строим светлое будущее.',
      }
    case 'theme_ftt_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#373737',
        bgFon: '#020202', // цвет под фон картинки
        fonImage: <FttFonDark width={width} height={height} />,

        textOuterSec: '#fff',

        placeselectionSearch: '#616161', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#616161', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#616161', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#616161', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#616161', //color
        bgMesStudent: '#616161', //color

        textMesStudent: '#616161', //color'#007AFF',
        textTimeMesStudent: '#616161', //color
        colorIndicator: '#616161', //color
        textHeaderButton: '#616161', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#616161', //color
        textdecoration: 'ФТТ',
        textlozungdecoration: 'pipe-lines, pipe-lines!!!',
      }
    case 'theme_inict_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#2B507E',
        bgFon: '#1D1B38', // цвет под фон картинки
        fonImage: <InictFonDark width={width} height={height} />,

        placeselectionSearch: '#285FB0', //color

        textOuterSec: '#fff',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#285FB0', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#285FB0', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#285FB0', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#285FB0', //color
        bgMesStudent: '#285FB0', //color

        textMesStudent: '#285FB0', //color
        textTimeMesStudent: '#285FB0', //color
        colorIndicator: '#285FB0', //color
        textHeaderButton: '#285FB0', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#285FB0', //color
        textdecoration: 'ИНИЦТ',
        textlozungdecoration: 'Зверя нет сильней медведя! Наш ИНИЦТ вперед к победе!',
      }
    case 'theme_tf_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#4F5380',
        bgFon: '#2F3251', // цвет под фон картинки
        fonImage: <TfFonDark width={width} height={height} />,

        textOuterSec: '#fff',

        placeselectionSearch: '#5E649B', //color

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#5E649B', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#5E649B', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#5E649B', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#5E649B', //color
        bgMesStudent: '#5E649B', //color

        textMesStudent: '#5E649B', //color
        textTimeMesStudent: '#5E649B', //color
        colorIndicator: '#5E649B', //color
        textHeaderButton: '#5E649B', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#5E649B', //color
        textdecoration: 'ТФ',
        textlozungdecoration: 'Самый солнечный факультет УГНТУ!',
      }
    case 'theme_gnf_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#21468e',
        bgFon: '#1A2B4F', // цвет под фон картинки
        fonImage: <GnfFonDark width={width} height={height} />,

        placeselectionSearch: '#2C5AB5', //color

        textOuterSec: '#fff',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#2C5AB5', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#2C5AB5', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#2C5AB5', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#2C5AB5', //color
        bgMesStudent: '#2C5AB5', //color

        textMesStudent: '#2C5AB5', //color
        textTimeMesStudent: '#2C5AB5', //color
        colorIndicator: '#2C5AB5', //color
        textHeaderButton: '#2C5AB5', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#2C5AB5', //color
        textdecoration: 'ГНФ',
        textlozungdecoration: 'Самый сильный и большой — это горно-нефтяной.',
      }
    case 'theme_inb_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#b7283a',
        bgFon: '#3D1117', // цвет под фон картинки
        fonImage: <InbFonDark width={width} height={height} />,

        placeselectionSearch: '#9E2232', //color

        textOuterSec: '#fff',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#9E2232', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#9E2232', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#9E2232', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#9E2232', //color
        bgMesStudent: '#9E2232', //color

        textMesStudent: '#9E2232', //color
        textTimeMesStudent: '#9E2232', //color
        colorIndicator: '#9E2232', //color
        textHeaderButton: '#9E2232', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#9E2232', //color
        textdecoration: 'ИНБ',
        textlozungdecoration: 'Акулы бизнеса.',
      }
    case 'theme_ies_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#1B653C',
        bgFon: '#032E1B', // цвет под фон картинки
        fonImage: <IesFonDark width={width} height={height} />,

        placeselectionSearch: '#217547', //color

        textOuterSec: '#fff',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#217547', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#217547', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#217547', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#217547', //color
        bgMesStudent: '#217547', //color

        textMesStudent: '#217547', //color
        textTimeMesStudent: '#217547', //color
        colorIndicator: '#217547', //color
        textHeaderButton: '#217547', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#217547', //color
        textdecoration: 'ИЭС',
        textlozungdecoration: 'let the green into your heart.',
      }

    case 'theme_uvsheu_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#8B3535',
        bgFon: '#092434', // цвет под фон картинки
        fonImage: <UvsheuFonDark width={width} height={height} />,

        placeselectionSearch: '#9A3B3B', //color

        textOuterSec: '#fff',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#9A3B3B', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#9A3B3B', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#9A3B3B', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#9A3B3B', //color
        bgMesStudent: '#9A3B3B', //color

        textMesStudent: '#9A3B3B', //color
        textTimeMesStudent: '#9A3B3B', //color
        colorIndicator: '#9A3B3B', //color
        textHeaderButton: '#9A3B3B', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#9A3B3B', //color
        textdecoration: 'УВШЭУ',
        textlozungdecoration:
          'Стремиться нужно вверх, так вот УВШЭУ - твой успех. Гринфинд знаний ты открыл, и в УВШЭУ поступил.',
      }

    case 'theme_vshist_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#836B9E',
        bgFon: '#423B48', // цвет под фон картинки
        fonImage: <VshistFonDark width={width} height={height} />,

        placeselectionSearch: '#8E76A9', //color

        textOuterSec: '#fff',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#8E76A9', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#8E76A9', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#8E76A9', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#8E76A9', //color
        bgMesStudent: '#8E76A9', //color

        textMesStudent: '#8E76A9', //color
        textTimeMesStudent: '#8E76A9', //color
        colorIndicator: '#8E76A9', //color
        textHeaderButton: '#8E76A9', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#8E76A9', //color
        textdecoration: 'ВыШкаИнСоТех',
        textlozungdecoration: 'Это вышка!',
      }

    case 'theme_epsh_dark':
      return {
        ...defaultThemeDark,
        hoverEffect: '#6B6EC3',
        bgFon: '#323738', // цвет под фон картинки
        fonImage: <EpshFonDark width={width} height={height} />,

        placeselectionSearch: '#7376D2', //color

        textOuterSec: '#FCFDFF',

        bgBadgeMes: '#FF3B30',
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#7376D2', //color
        bgbutton1: '#F2F2F2',
        bgbutton1pressed: '#BDBDBD',
        textbutton1: '#7376D2', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#7376D2', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#7376D2', //color
        bgMesStudent: '#7376D2', //color

        textMesStudent: '#7376D2', //color
        textTimeMesStudent: '#7376D2', //color
        colorIndicator: '#7376D2', //color
        textHeaderButton: '#7376D2', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#7376D2', //color

        tabBarActiveTintColorLeft: '#D9C358', //left
        tabBarActiveTintColorRight: '#D14E63', //right

        textdecoration: 'ЕПШ',
        textlozungdecoration: 'Many options many skills.',
      }

    default: // usual
      return {
        ...defaultThemeLight,
        bgFon: '#F2F2F7', // цвет под фон картинки
        fonImage: <UsualFon width={width} height={height} />,

        placeselectionSearch: '#007AFF', //color

        bgBadgeMes: '#FF3B30', //под вопросом, оттеннок ли?
        bgBadgeMesGrade: '#7A7A7C',
        textBadgeMesGrade: '#ffffff',

        checkIcon: '#007AFF', //color
        bgbutton1: '#F2F2F2', //оттенок похорошему придать
        bgbutton1pressed: '#BDBDBD', //оттенок похорошему придать press
        textbutton1: '#007AFF', //color

        textbutton1pressed: 'black', //color pressed
        bgbuttondefault: '#007AFF', //color
        bgbuttondefaultpressed: '#1877DF',
        textbuttondefault: 'white',

        textlink: '#007AFF', //color
        bgMesStudent: '#007AFF', //color

        textMesStudent: '#007AFF', //color
        textTimeMesStudent: '#007AFF', //color
        colorIndicator: '#007AFF', //color
        textHeaderButton: '#007AFF', //color
        textHeaderButtonpressed: 'black', //color pressed

        tabBarActiveTintColor: '#007AFF', //color
        textdecoration: 'Стандартное оформление',
        textlozungdecoration: 'Для консерваторов',
      }
  }
}

export default SwitchTheme
