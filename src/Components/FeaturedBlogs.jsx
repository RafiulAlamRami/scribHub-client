import React, { useContext, useEffect, useState } from 'react';
import 'ka-table/style.css';
import { Table } from 'ka-table';
import { DataType, EditingMode, SortingMode } from 'ka-table/enums';
import { AuthContext } from '../Provider/AuthProvider';



const FeaturedBlogs = () => {

    const {user}=useContext(AuthContext)

    const [datas,setDatas]=useState()

    useEffect(()=>{
        fetch('http://localhost:5000/feature')
        .then(res=>res.json())
        .then(data=>{
            setDatas(data)
            console.log(data);
        })
    },[])

    const dataArray = datas
    ?.slice(0,10).map((data, index) => ({
      column1: `${index+1}`,
      column2: `${data.title}`,
      column3: `${user?.displayName}`,
      column4: `column:4 row:${index}`,
      id: index,
    }));

    return (
        <div>
            <h1 className='text-[1.6rem] text-center font-bold'>Featured Blogs</h1>
            <Table
      columns={[
        { key: 'column1', title: 'No', dataType: DataType.String },
        { key: 'column2', title: 'Blog Title', dataType: DataType.String },
        { key: 'column3', title: 'Blog Owner', dataType: DataType.String },
        { key: 'column4', title: 'Profile Picture', dataType: DataType.String },
      ]}
      data={dataArray}
      editingMode={EditingMode.Cell}
      rowKeyField={'id'}
      sortingMode={SortingMode.Single}
    />
        </div>
    );
};

export default FeaturedBlogs;