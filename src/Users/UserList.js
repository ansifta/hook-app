
import React from 'react';
import { Table, Tag, Space } from 'antd';
import userData from './UserData';

export const UserList = () => {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'LastName',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Mobile Number',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            )
        },

    ];


    class Demo extends React.Component {
        state = {
            top: 'topLeft',
            bottom: 'bottomRight',
        };

        render() {
            return (
                <div>

                    <Table
                        columns={columns}
                        pagination={{ pageSize: 2 }}
                        dataSource={userData}
                    />
                </div>
            );
        }
    }
}
