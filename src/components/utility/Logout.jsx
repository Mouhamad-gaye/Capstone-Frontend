export default function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/login"
    
}