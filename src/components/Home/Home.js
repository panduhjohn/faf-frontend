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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda vero autem, quo officiis quod ullam? Consequuntur cumque eius nostrum voluptate eveniet sapiente cum numquam rem, recusandae dolorem sequi distinctio, praesentium asperiores reiciendis, est accusantium dolorum animi reprehenderit nobis facilis quis maiores assumenda laudantium. Nisi dignissimos atque voluptas aperiam, explicabo ducimus quaerat laudantium enim odit voluptatem optio. Facere aliquam dignissimos harum, a quibusdam quo quisquam praesentium quam illo mollitia repudiandae, eligendi, aut libero sint ipsum. Non praesentium fugit quam, commodi veniam fuga corporis temporibus id cumque, laudantium ea illum tempore aspernatur porro accusamus cupiditate, nobis sapiente optio iste possimus distinctio sed minima? Laborum facere eaque dolore animi non quisquam sit porro officia. Et voluptatem hic, tenetur deleniti perferendis asperiores, sapiente, eligendi nulla molestias architecto odit voluptatum provident iusto velit voluptas dolores unde. Error minima dolorem perferendis quis reiciendis expedita ipsum repellat non adipisci amet hic culpa, animi aut fuga. Quibusdam nobis ab molestias illum aperiam. Praesentium ex fugiat facilis vel nihil, quibusdam ipsam necessitatibus quidem illo dignissimos saepe optio ipsum, dolores dicta beatae? Maxime ducimus vero libero laudantium labore rerum saepe esse ea consequatur provident! Nisi quia, doloremque commodi architecto dolore fugiat delectus accusantium? Quidem quis neque et accusantium. Nisi blanditiis culpa pariatur vero, nemo nesciunt, laborum ab porro itaque optio ipsum. Culpa quibusdam eaque maxime quisquam nisi deleniti excepturi odio, debitis nemo provident placeat quo cumque ab iste quaerat. Non voluptatibus magni a repellat? Nesciunt impedit, fugit placeat vero quidem, totam soluta doloribus quasi accusamus sit consequatur! Officia aut obcaecati consequatur laborum asperiores totam corporis nam rerum, numquam, blanditiis magni animi commodi quo nisi recusandae architecto earum debitis libero eius excepturi doloremque. Omnis error minus odio, eveniet exercitationem sunt magnam incidunt fugit saepe, voluptate consectetur a, rerum quo maiores culpa explicabo doloribus natus deleniti. Delectus distinctio praesentium voluptate eum, repellendus, magnam et ea suscipit sunt esse iste commodi maxime inventore nulla sit doloremque soluta, eveniet eos asperiores quidem voluptatibus deleniti? Laboriosam soluta, debitis, tempora temporibus, quo saepe similique eos a officia reprehenderit doloremque totam fuga eius ullam reiciendis assumenda perspiciatis magni corporis vel nostrum. Nobis possimus quod quasi repellendus a quo ipsa reprehenderit porro dolorem molestias ex cumque aspernatur voluptatum aut libero iste harum, repudiandae modi culpa optio quisquam dicta est. Doloremque, facilis maiores suscipit expedita quasi quaerat rem ab, reprehenderit illo non quo veritatis provident! Nobis mollitia obcaecati enim voluptas perspiciatis. Repellendus deleniti inventore consectetur veniam blanditiis excepturi voluptas.
                            
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
