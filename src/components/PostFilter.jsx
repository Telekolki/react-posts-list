import React from 'react'
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({filter, setFilter}) {

    let options = [
        {name: 'По названию', value: 'title'}, 
        {name: 'По описанию', value: 'body'}
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
            defaultValue="Выберите сортировку"
            value={filter.sort}
            onChange={newSort => (setFilter({...filter, sort: newSort}))}
        ></MySelect>
    </div>
  )
}

export default PostFilter