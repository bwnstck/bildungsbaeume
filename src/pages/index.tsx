import Layout from '$components/layout/Layout'
import BasicMeta from '$components/meta/BasicMeta'
import OpenGraphMeta from '$components/meta/OpenGraphMeta'

import Home from './Home'

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <div>
        <Home />
      </div>
    </Layout>
  )
}
