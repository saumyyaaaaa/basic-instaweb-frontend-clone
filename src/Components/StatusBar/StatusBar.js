import Avatar from '@material-ui/core/Avatar';
import React, { Component } from 'react';
import "./StatusBar.css";
import statusimg1 from "../../images/pp4.jpeg";
import statusimg2 from "../../images/pp2.png";
import statusimg3 from "../../images/pp3.jpeg";
import statusimg4 from "../../images/pp1.png";
import dp from "../../images/dp6.png";

class StatusBar extends Component{
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return (
            <div> 
                <div className='statusbar__container'>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg1}/>
                        <div className='statusbar__text'>andi_yo</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg2}/>
                        <div className='statusbar__text'>saumyyaaaaa</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg3}/>
                        <div className='statusbar__text'>notsosidistic.</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg4}/>
                        <div className='statusbar__text'>dravid_48</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={dp}/>
                        <div className='statusbar__text'>akashsingh</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg1}/>
                        <div className='statusbar__text'>anmol_roy88</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg2}/>
                        <div className='statusbar__text'>noturmahiii</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg3}/>
                        <div className='statusbar__text'>gagan75</div>
                    </div>
                    <div className='status'>
                        <Avatar className='statusbar__status' src={statusimg4}/>
                        <div className='statusbar__text'>bieberfan</div>
                    </div>
                </div>
            </div>
        );
    }
}

 export default StatusBar;