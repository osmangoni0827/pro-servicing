import React, { useState } from 'react';

const OrderListTable = ({ OrderInformation }) => {
    // const { name, email, orderTitle, price, state } = OrderInformation;
    console.log(OrderInformation)
    const [id, setid] = useState('');
    const HandleSubmit = (e) => {
        fetch('https://pacific-harbor-21117.herokuapp.com/update/' + id, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: e.target.value })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log('update');
                }
            })
    }
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Customer Name</th>
                    <th className="text-secondary" scope="col">Service Name</th>
                    <th className="text-secondary" scope="col">price</th>
                    <th className="text-secondary" scope="col">Customer Email</th>
                    <th className="text-secondary" scope="col">Order Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    OrderInformation.map((order, index) =>

                        <tr>
                            <td>{index + 1}</td>
                            <td>{order.name}</td>
                            <td>{order.orderTitle}</td>
                            <td>{order.price}</td>
                            <td>{order.email}</td>
                            <td onClick={() => setid(order._id)} >

                                <form >
                                    <select onClick={HandleSubmit} id="states" name="stateList" >
                                        <option>{order.status}</option>
                                        <option value="Pending">Pending</option>
                                        <option value="On Going">On Going</option>
                                        <option type='submit' value="Done">Done</option>
                                    </select>
                                </form>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderListTable;