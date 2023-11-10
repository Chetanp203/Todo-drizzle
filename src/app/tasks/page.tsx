import React from 'react';
import Tasks from "~/app/tasks/tasks";

function Page() {
  return (
    <div className={'p-4'}>
      <div className={'text-3xl text-center'}>Todo-List</div>
      <Tasks />
    </div>
  );
}

export default Page;
