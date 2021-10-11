import React, { useState, useEffect } from 'react'



const Api = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch("https://reqres.in/api/users/");
        const json = await response.json();
        setUsers(json.data);

    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <h2>List of Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">

                    {
                        users.length &&
                        users.map((curElem) => {

                            return (<div className="col-10 col-md-4 mt-5" key={curElem.id}>
                                <div className="card p-2">
                                    <div className="d-flex aling-itemss-center">
                                        <div className="image"><img src={curElem.avatar} alt="images" className="rounded" width="155" /></div>
                                        <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{curElem.first_name} {curElem.last_name}</h4> <span className="textLeft"> Web Developer</span>

                                            <h5 className="mb-0 mt-0 textLeft">{curElem.email}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }

                </div>
            </div>

        </>)


}

export default Api