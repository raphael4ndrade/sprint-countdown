import React from 'react';

const _style = {
    width: 15,
    height: 15,
    position: 'relative',
    top: 0,
    rigth: 0
};

const SettingButton = ({onClick}) => {

    return <input type='button' style={_style} onClick={onClick} value='Settings'/>
}

export default SettingButton;