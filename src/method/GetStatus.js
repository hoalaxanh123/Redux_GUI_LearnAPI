let dict={
    0:'Còn hàng',
    1:'Hết hàng',
    2:'Ngừng kinh doanh'
}

function GetStatus(params) {
    return dict[params];
}


export default GetStatus;