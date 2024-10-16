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
    },
    AllUser:{
        url: `${backendUrl}/api/alluser`,
        method: "GET",
    },
    AllBlogs:{
        url: `${backendUrl}/api/allBlogs`,
        method: "GET",
    },
    SelectedBlog:{
        url: `${backendUrl}/api/getSelectedBlog`,
        method: "GET",
    },
    AdminBlogAdd:{
        url:`${backendUrl}/api/adminaddBlog`,
        method:"POST",
    },
    UserBlogAdd:{
        url:`${backendUrl}/api/tempBlogAdd`,
        method:"POST",
    },
    TempBlogFetch:{
        url:`${backendUrl}/api/tempBlogFetch`,
        method:"GET",
    },
    TempBlogDelete:{
        url:`${backendUrl}/api/deleteTempBlog`,
        method:"POST",
    },
    TempBlogToMain:{
        url:`${backendUrl}/api/tempToMain`,
        method:"POST",
    },
}


export default summeryApi;