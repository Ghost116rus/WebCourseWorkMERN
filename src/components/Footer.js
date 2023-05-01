import React from 'react'

const Footer = () => {
  return (
    <div className="align-items-end" >
      <footer className="text-center text-white" style={{background: '#060817'}}>

      <div className="container p-4 pb-0">

      <section className="">
        <p className="d-flex justify-content-center align-items-center">
          <span className="me-3">Register for free</span>
          <button type="button" className="btn btn-outline-light btn-rounded">
            Sign up!
          </button>
        </p>
      </section>

    </div>


    <div className="text-center p-3" style={{background: '#05050a'}}>
      © 2023 Copyright: KaleevDA.ru
    </div>


      </footer>
    </div>
  )
}

export default Footer