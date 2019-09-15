let dict={
    0:'label label-success',
    1:'label label-danger',
    2:'label label-default'
}

function GetStatusClass(params) {
    return dict[params];
}


export default GetStatusClass;