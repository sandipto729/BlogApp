const backendUrl = "http://localhost:8000";

const summeryApi={
    SignUp:{
        url: `${backendUrl}/api/signup`,
        method: "POST",
    },
    Login:{
        url: `${backendUrl}/api/login`,
        method: "POST",
    },
    ProfilePage:{
        url: `${backendUrl}/api/profile`,
        method: "GET",
    },
    CardFetch:{
        url: `${backendUrl}/api/getBlog`,
        method: "GET",
    },
    GetBlogID:{
        url: `${backendUrl}/api/getBlogID`,
        method: "POST",
    }
}


export default summeryApi;