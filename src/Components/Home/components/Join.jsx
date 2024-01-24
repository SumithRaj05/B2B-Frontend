import './Join.css'

export default function Join() {
    return (
      <>
        <div className="container-fluid join-back">
          <div className="row">
            {/* Text Div (60% width) */}
            <div className="col-md-7">
              <p className="join-p">
                So, What you're waiting for. Expand your Bejiness Network
              </p>
            </div>
  
            {/* Button Div (40% width) */}
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <button className="btn btn-lg join-btn">Join Us<lord-icon
    src="https://cdn.lordicon.com/qpvtavng.json"
    trigger="loop"
    delay="1500"
    stroke="bold"
    style={{width:'40px',height:'40px'}}>
</lord-icon></button>
            </div>
          </div>
        </div>
      </>
    );
  }