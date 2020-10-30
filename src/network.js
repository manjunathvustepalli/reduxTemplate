import Axios from "axios";
let res = [];

export const getnetwork = async (url, token, params) => {
  console.log("////////////////////////////// from network tab");
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
        
      return error
       
      });
      return response;
   
};
export const post = async (url, token, formdata) => {
  let headers = {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
  await Axios.post(url, formdata, headers)
    .then((response) => {
      res = response;
      // ShowSuccessSnackbar("Added succesfully")
    })
    .catch((error) => {
      res = error;
      // console.log(error.response.status)
      // if(error.response.status===401){

      // }
    });
  return res;
};
export const put = async (url, token, formdata) => {
  let headers = {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
  return await Axios.put(url, formdata, headers)
    .then((response) => {
      res = response;
      // ShowSuccessSnackbar("Added succesfully")
    })
    .catch((error) => {
      res = error;
      // console.log(error.response.status)
      // if(error.response.status===401){

      // }
    });
  return res;
};
export const del = async (url, token) => {
  let headers = {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
  return await Axios.delete(url, headers)
    .then((response) => {
      res = response;
      // ShowSuccessSnackbar("Added succesfully")
    })
    .catch((error) => {
      res = error;
      // console.log(error.response.status)
      // if(error.response.status===401){

      // }
    });
  return res;
};

  




