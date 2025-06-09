import "bootstrap/dist/css/bootstrap.min.css"


export default function HomePage() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://ts2.mm.bing.net/th?id=OIP.hkhXGVvSAVQCsOzDy3q1rwHaFj&pid=15.1" className="d-block w-90" alt="Grand Mosque of Touba" />
            </div>
            <div className="carousel-item">
                <img src="https://ts3.mm.bing.net/th?id=OIP.kw7UKFLxvUPOyzrUVzU3lQHaEK&pid=15.1" className="d-block w-90" alt="La Grande Mosquée de Touba" />
            </div>
            <div className="carousel-item">
                <img src="https://ts2.mm.bing.net/th?id=OIP.-ZJ9QkICO8qjNlGLUZhGtQHaFj&pid=15.1" className="d-block w-90" alt="Great Mosque of Touba" />
            </div>
        </div>
        
        {/* Previous & Next Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    )
}