const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("member");
    window.location.href = "/signin"; 
};

export default Logout;