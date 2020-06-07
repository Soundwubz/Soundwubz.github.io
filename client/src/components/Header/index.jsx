import React from 'react';
import './styles.css';

class Header extends React.Component {
    imgUrl = 'url(' + process.env.PUBLIC_URL + '/img';
    profileImg = {
        background: this.imgUrl + '/profile.jpeg)',
        backgroundPositionX: "-250px",
        backgroundPositionY: "-10px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "800px 600px"
    }
    opBtnImg = {
        background: this.imgUrl + '/navbutton.png)',
        backgroundSize: "contain"
    }

    handleClick = () => {
        this.props.openNav();
    }

    render() {
        return (
            <div className="container-fluid" id="header">
                <div className="row">
                    <div className="col-2">
                        <div className="profile" style={this.profileImg}></div>
                    </div>
                    <div className="col-8">
                        <h1 id="name" className="text-white">Nathan Foster</h1>
                        <p id="subText" className="text-light">Full Stack Application Developer</p>
                    </div>
                    <div className="col-2" style={{justifyContent: "center", display: "flex"}}>
                        <div className="open-button" style={this.opBtnImg} onClick={this.handleClick}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;