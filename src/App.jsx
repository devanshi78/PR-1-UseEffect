import React, { useEffect, useState } from 'react'

const App = () => {
  const [list,setList] = useState();

  const handleApi = async() => {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await res.json();
      setList(data);
    } catch (error) {
      console.log(error.message)
      return [];
    }
  }

  useEffect(()=>{
    handleApi()
  },[])

  console.log("render....");
  console.log(list);

  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-8'>
            <table>
              <caption>
                <h2>Employee Details</h2>
              </caption>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Name</th>
                  <th>UserName</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {
                  list?.map((value,index) => {
                    const {name,username,email} = value;

                    return(
                      <tr>
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>{username}</td>
                        <td>{email}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App