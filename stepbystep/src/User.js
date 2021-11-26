const User = () => {
     
    let abc = "who are you"
    function apple() {
        console.log(abc);
        return (abc)
    }

// on click it doesnot return abc thats why we use useState()
    return ( 
        <div>
      <h1>user</h1>
      <button onClick={apple}>
          click me
      </button>
      </div>
     );
}
 
export default User;