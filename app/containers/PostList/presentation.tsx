import * as React from 'react'
import { Table, Button } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { Post } from '~/graphql'
import { WrappedProps } from './apollo'

const columns: TableColumnConfig<Post>[] = [
  {
    title: 'Title',
    render: (text: string) => <p>{text}</p>,
  },
  {
    title: 'Action',
    render: (text: string, record: Post) => (
      <span>
        <a href="#">Delete {text}</a>
        <span className="ant-divider" />
        <Button icon="down" size="small">
          {record.votes}
        </Button>
      </span>
    ),
  },
]

export const PostList: React.StatelessComponent<WrappedProps> = ({
  allPosts,
  _allPostsMeta,
  loading,
}) => (
  <Table
    columns={columns}
    dataSource={allPosts}
    rowKey="id"
    loading={loading}
  />
)
