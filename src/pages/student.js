import React, { Component } from 'React';
import { React } from 'react';
import student from './student';
import { Link } from 'react-router-dom';
class student extends Comment {
    render() {
        return (
            <div className='conatiner row'>
                <div className='col-md-12 col-sm-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h5>student
                                <Link to={'addSudent'} className="btn btn-success btn-sm float-end" >Addstudent</Link>
                            </h5>
                        </div>
                        <div className='card-body'>
                            <input className="form-control" name='nome' type="text">
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default student;