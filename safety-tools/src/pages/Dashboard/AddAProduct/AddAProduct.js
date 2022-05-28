import React from 'react';
import './AddAProduct.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://nameless-depths-31123.herokuapp.com/tools`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            alert('Your item added successfully. Go to manage products to check');
        } )
    };
    return (
        <div className='my-items-div'>
            <h2>Add new items</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Minimum Order Quantity' type="number" {...register("minQuantity")} />
                <input className='mb-2' placeholder='Available Quantity' type="number" {...register("avaQuantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='banner-btn' type="submit" value="Add Item" />
            </form>
            <br />
            <Link className="back-btn" to="/dashboard/manageproducts">Back to Manage Products</Link>
            {/* <AddedItems></AddedItems> */}
        </div>
    );
};

export default AddAProduct;