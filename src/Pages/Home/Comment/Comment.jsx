import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Comment.css';
import img1 from '../../../assets/img/img (1).jpg';
import img2 from '../../../assets/img/img (2).jpg';
import img3 from '../../../assets/img/img (3).jpg';
import img4 from '../../../assets/img/img (4).jpg';
import img5 from '../../../assets/img/img (5).jpg';

const Comment = () => {
    

    return (
        <div className='container'>
            <div class='container-fluid' >
                <div className="row title" style={{ marginBottom: "20px" }} >
                    <div class="col-sm-12 btn btn-info">
                        All says About us
                    </div>
                </div>
            </div>
            <div class='container-fluid' >
                <OwlCarousel items={4}
                    className="owl-theme"
                    loop
                    nav
                    margin={8} >
                    <div><img className="img" src={img1} /></div>
                    <div><img className="img" src={img2} /></div>
                    <div><img className="img" src={img3} /></div>
                    <div><img className="img" src={img4} /></div>
                    <div><img className="img" src={img5} /></div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Comment;