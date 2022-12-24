 
 const addToFavarite = (item ) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    // let isRepeated = favorite
    //   .reduce((acc, e, i) => {
    //     acc.push(e.title);
    //     return acc;
    //   }, [])
    //   .includes(item.title);
    // if (!isRepeated) {
        
      favorite.push(item);
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
    // console.log(isRepeated);
//   };

  export default addToFavarite