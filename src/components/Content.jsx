import React from "react";

function Content() {
  return (
    <div className="container my-5">
      <h3 className="fw-bold mb-3">Mau belajar apa hari ini?</h3>
      <p className="text-muted mb-4">Temukan tutorial berdasarkan minatmu.</p>

      {/* Baris Card Horizontal */}
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {/* Card 1 */}
        <div className="card text-center shadow-sm" style={{ width: "250px", height: "250px" }}>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <div className="fs-1 mb-2">
                <i className="bi bi-code-slash"></i>
              </div>
              <h5 className="card-title">Basic Programming</h5>
              <p className="card-text">Dasar-dasar C, C++, Java, JS.</p>
            </div>
            <a href="#" className="btn btn-outline-primary btn-sm mt-2">Lihat</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card text-center shadow-sm" style={{ width: "250px", height: "250px" }}>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <div className="fs-1 mb-2">
                <i className="bi bi-globe2"></i>
              </div>
              <h5 className="card-title">Web Programming</h5>
              <p className="card-text">HTML, CSS, JS, React.</p>
            </div>
            <a href="#" className="btn btn-outline-primary btn-sm mt-2">Lihat</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card text-center shadow-sm" style={{ width: "250px", height: "250px" }}>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <div className="fs-1 mb-2">
                <i className="bi bi-phone"></i>
              </div>
              <h5 className="card-title">Tutorial Lainnya</h5>
              <p className="card-text">Mobile, IoT, dan lainnya.</p>
            </div>
            <a href="#" className="btn btn-outline-primary btn-sm mt-2">Lihat</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
