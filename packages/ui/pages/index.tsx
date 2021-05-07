import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Typography, Skeleton, Card, Space } from 'antd'
import { AppLayout } from 'components/AppLayout'
import { useQuery } from 'react-query'
import axios from 'axios'
import UserHeader from 'components/UserHeader'
import styled from 'styled-components'
import Link from 'next/link'
import PageTitle from 'components/PageTitle'
import EditProgram from 'components/EditProgram'

const { Title } = Typography
const ProgramCard = styled(Card)`
  h4 {
    cursor: pointer;
  }
`
const Home = () => {
  const router = useRouter()
  const { data, isLoading } = useQuery<any>(
    'defaultWorkspace',
    () => axios.get('/workspaces/default'),
    { retry: false },
  )
  useEffect(() => {
    if (!isLoading && !data?.data?.workspace?.programs?.length)
      router.push('/workspace/intro')
  }, [data])

  return (
    <AppLayout
      title={<PageTitle title="Programs" />}
      selectedKey="programs"
    >
      <UserHeader
        getContent={(userInfo) => ({
          title: `Hello ${userInfo.name}, welcome back!`,
          description: `Here's info about your programs`,
        })}
      />
      {isLoading || !data?.data?.workspace?.programs?.length ? (
        <Skeleton />
      ) : (
        <div className="space-align-container">
          <Space style={{ padding: '24px' }}>
            {data?.data?.workspace?.programs.map((program) => (
              <ProgramCard bordered style={{ width: 284 }}>
                <Space
                  style={{
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Link
                    href={`/programs/${program.workspaceId}/${program.programId}`}
                  >
                    <Title level={4}>{program.name}</Title>
                  </Link>
                  <EditProgram program={program} />
                </Space>
                <p>{program.description}</p>
              </ProgramCard>
            ))}
          </Space>
        </div>
      )}
    </AppLayout>
  )
}

export default Home
