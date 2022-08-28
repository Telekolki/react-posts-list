import React from 'react'
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({filter, setFilter}) {

    let options = [
        {name: 'Name', value: 'title'}, 
        {name: 'Description', value: 'body'}
      ]
      
  return (
    <div>
        <MyInput 
            type="text"
            placeholder="Search..."
            value={filter.query}
            onChange={e => (setFilter({...filter, query: e.target.value}))}>
        </MyInput>
        <MySelect 
            options={options} 
            defaultValue="Sort by"
            value={filter.sort}
            onChange={newSort => (setFilter({...filter, sort: newSort}))}
        ></MySelect>
    </div>
  )
}

export default PostFilter