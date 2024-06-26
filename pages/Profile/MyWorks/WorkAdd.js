import { useEffect } from 'react'
import { Text, View } from 'react-native'
import Layout from '../../../shared/ui/Layout'
import ListItemWithBottomTitleAndLink from '../../../shared/ui/ListItemWithBottomTitleAndLink'
import WorkAddManageForm, { useWorkAddStore } from './../../../features/WorkAddManageForm/index'

const WorkAdd = ({ navigation, route }) => {
  const reset = useWorkAddStore((state) => state.reset)

  useEffect(() => {
    reset()
  }, [])

  return (
    <Layout>
      <WorkAddManageForm navigation={navigation} route={route} />
    </Layout>
  )
}

export default WorkAdd
