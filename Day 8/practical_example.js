function loginUser(username){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("user logged in ",username);
      resolve({userId:101});

    },1000)
  });
}

function getUserProfile(user){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("fetch profile from userId",user.userId);
      resolve({...user,name:"aishani"});
    },1000)
  });
}

function getUserOrders(profile){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log("fetched order",profile.name);
      resolve(["order1","order2"]);
    },1000);
  });
}

loginUser("aishanisingh")
.then((user)=>{
  return getUserProfile(user);
})
.then((profile)=>{
  return getUserOrders(profile);
})
.then((orders)=>{
  console.log("Final orders:", orders);
});