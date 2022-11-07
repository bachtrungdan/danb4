import React from 'react'

function ListModal(props) {

    return (
        <div>
            <ul className="list-group">
                {props.listData.map(function (value, index) {
                    return (
                        <div key={index}>
                            <li className="list-group-item flace list" key={index} onClick={() => { props.setIndex(index) }}
                                data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <div>{value.name}</div>
                                <div>{value.money}</div>
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default ListModal

