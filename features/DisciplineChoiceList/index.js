import { useEffect, useState } from 'react'
import { Text, useColorScheme } from 'react-native'
import { useUserStore } from '../../entities/user'
import Layout from '../../shared/ui/Layout'
import { LoadingBox } from '../../shared/ui/LoadingBox'
import getDisciplines from './api/getDisciplines'
import List from './ui/List'
import validateDisciplines from './utils/validateDisciplines'

const DisciplineChoiceList = ({ navigation, setChanges = () => {} }) => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const group = useUserStore((state) => state.getStudyGroup())
  // //console.log(group)
  const scheme = useColorScheme()
  const [schemeState, setSchemeState] = useState(scheme)

  const getList = async () => {
    const data = await getDisciplines()
    setItems(validateDisciplines(data.data, group))
    setLoading(false)
  }

  useEffect(() => {
    getList()
  }, [])

  useEffect(() => {
    if (schemeState != scheme) {
      getList()
      setSchemeState(scheme)
    }
  }, [scheme])

  return !loading ? <List setChanges={setChanges} items={items} navigation={navigation} /> : <LoadingBox />
}

export default DisciplineChoiceList
