"use client";
import React, {useState} from 'react';
import {api} from "~/trpc/react";

function Tasks() {
  const [title, setTitle] = useState("");
  const deleteMutation = api.task.deleteMutation.useMutation();

  const addMutation =  api.task.add.useMutation();
  const utils = api.useContext();


  const tasks = api.task.list.useQuery().data || [];

  const handleDelete = async (taskId:number)=>{
    await deleteMutation.mutateAsync({
      id:taskId,
    })
    await utils.task.list.refetch()
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    await addMutation.mutateAsync({
      title,
    });

    setTitle("");

    await utils.task.list.refetch()
  }

  return (
    <div className="border w-96  m-auto p-5 bg-slate-600 rounded-xl">
      
      <form className="flex justify-between mt-4" onSubmit={
       handleSubmit
      }>
        <input type="text" placeholder={'Add new todo task...'} className={"border p-2 w-96"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
        />
        <button type={'submit'} className="border px-4 bg-black text-white">Add</button>
      </form>
      <div className="w-96 text-center m-auto p-5 ">
      <ul className='w-80'>
        {tasks.map((task) => {
          return <li className="py-1 text-xl text-yellow-500 justify-between flex" key={task.id}>{task.title} <button onClick={()=>handleDelete(task.id)} className=" text-white rounded-xl p-1 ">X</button></li>
        })}
      </ul>
      </div>
    </div>
  );
}

export default Tasks;
