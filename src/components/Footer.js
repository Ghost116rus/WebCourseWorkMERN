import React from 'react'

const Footer = () => {
  return (
    <div className="align-items-end" >
      <footer className="text-center text-white" style={{background: '#060817'}}>

      <div className="container p-4 pb-0">

      <section className="">
        <div className="d-flex justify-content-center align-items-center">
          <span className="me-3">Свяжитесь с нами по телефону - +7 952 220-77-77</span>
        </div>
      </section>

      <section className="" style={{marginTop: "15px"}}>
        <div className="d-flex justify-content-center align-items-center">
          <span className="me-3">Или по почте - elibraryKDA@mail.ru</span>
        </div>
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