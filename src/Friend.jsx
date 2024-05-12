/* eslint-disable react/prop-types */
const Friend = ({user}) => {


    const {name, email} = user;
    

    const box={
        border: '1px solid green',
        padding:'20px'
    }

    return (
        <div style={box}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;