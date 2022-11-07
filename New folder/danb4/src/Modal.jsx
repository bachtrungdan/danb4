
import React from 'react'

function modal(props) {
    console.log(5,props.index[0]);

    function add() {
        let name = document.querySelector('#name').value
        let money = document.querySelector('#money').value
    
        if (!name || !money) {
            return alert('hãy điền đầy đủ thông tin vào mục')
        }
 
        let newData = [...props.ListModal]
        newData.push({ name, money })
        props.changeListData(newData)
    }
    function Delete() {
        let newData = [...props.ListModal]
        newData.splice(props.index, 1)
        props.changeListData(newData)
    }

    function fix() {
        let name = document.querySelector('#name').value
        let address = document.querySelector('#address').value
        let newData = [...props.ListModal]
        newData[props.index] = { name, address }
        props.changeListData(newData)
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title dan" id="exampleModalLabel" >Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            công việc  <input type="text"  name="" id="name" /> <br /> <br />
                            deadline:  <input type="date" name="" id="money" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={add}>add</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={fix}>fix</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Delete}>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default modal


















// import React from 'react'

// function Modal(props) {

//     function addData() {
//         let ten = document.querySelector('#ten').value
//         let diaChi = document.querySelector('#diaChi').value
//         if (!ten || !diaChi) {
//             return alert('điền đầy đủ thông tin')
//         }
//     }

//     function deleteData() {
//         let cloneData = [...props.listData];
//         cloneData.splice(props.index, 1);
//         props.changeList(cloneData);
//         document.querySelector('.closeModal').click()
//       }
//     return (
//         <div>
//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Modal title </h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <input type="text" name="" id="ten" placeholder='tên' /> <br />
//                             <input type="text" name="" id="diaChi" placeholder='địa chỉ' /> <br />
//                             <input type="date" name="" id="" />
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">close</button>
//                             <button type="button" className="btn btn-primary" onClick={addData}>add</button>
//                             <button type="button" className="btn btn-primary">fix</button>
//                             <button type="button" className="btn btn-primary" onClick={deleteData}> delete</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Modal