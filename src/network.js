import Axios from "axios";
let res = [];

export const getnetwork = async (url, token, params) => {
//   console.log("//////////////////////////////");
//   var myHeaders = new Headers();
//   myHeaders.append("Authorization", token);

//   var requestOptions = {
//     method: "GET",
//     headers: myHeaders,
//     redirect: "follow",
//   };
//   // const { classes } = this.props;
//    fetch(url, requestOptions)
    
//     .then((result) => {return result.json()})
//     .catch((error) => {
//       return error;
//     });
   let response= await Axios.get(url, {
      headers: {
        Authorization: token,
      },params
    })
      
        

      .catch((error) => {
        // console.log("///////////////////////////");
      //   console.log(error);
      return error
       
      });
      return response;
    // if (res.status === 200) {
    //   return res;
    // } else {
    //   return "";
    // }
};
