import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/reviews`;
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
            alert('Your review added successfully');
        } )
    };
    return (
        <div className='my-items-div'>
            <h2>Add A Review</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Review' {...register("review")} />
                <input className='mb-2' placeholder='Rating' type="number" {...register("rating")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='banner-btn' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReview;