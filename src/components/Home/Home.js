import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css'

export class Home extends Component {
    render() {
        return (
            <>
                <div className='box1'>
                    
                    <div>
                        <h2>Words on a page</h2>
                        <br />
                        <p style={{ fontSize: '20px' }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vero autem, quo officiis quod 
                            
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
