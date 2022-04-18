import React, { useState } from "react";
import "../App.css"



const Todo = () => {

    const [inputData, setInputData] = useState('');
    const [items, setItem] = useState([]);
    
    // Add list 
    const addItem = () => {
        if (!inputData) {
            alert("Invalid Value")
        } else {

            setItem([...items, inputData])
            setInputData('')
        }
    }
    // function end
    
    // delete 
    const deleteItem = (id) => {
        const updateList = items.filter((e, i) => {
            return i != id;
        })
        setItem(updateList)
    }
    // function end

    // remove all
    const removeAll = () => {
        setItem([])

    }
    // function end
    return (
        <>
            <div className=" text-light text-center">
                <h1>Todo App With React</h1>

                <div className=" mt-5">

                    <input type="text" className=" w-25 border-0 border-bottom p-2 bg-transparent text-light inp" placeholder="Add Your List Here......"
                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)} />
                    <i className="fa fa-plus add-btn bg-success p-2 rounded-circle ms-2 fs-4 " title="Add item"
                        onClick={addItem}></i>
                </div>
                <div className="mt-5 ">
                    {
                        items.map((elem, ind) => {
                            return (
                                <div className="bgprimary container p-3 rounded m-4" key={ind}>
                                    <h5 className="me-5 d-flex justify-content-evenly">{elem}
                                        <i class="bg-light p-2 text-danger rounded-circle fa-solid fa-trash-can fa ms-5 float-end" title="Delete item" onClick={() => deleteItem(ind)}></i></h5>

                                </div>
                            )
                        })
                    }

                </div>
                <div className=" mt-5">
                    <button type="button" class="btn btn-danger fw-bold" onClick={removeAll}>Remove All</button>
                </div>
            </div>
        </>
    );
}
export default Todo