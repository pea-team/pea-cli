import React from 'react'
import { modalStore } from '@peajs/modal'

export default () => (
  <div>
    hi Pea
    <div className="home">
      styled
      <span>jsx</span>
    </div>
    <button onClick={() => modalStore.open('ModalLogin')}>open</button>
    <style jsx>{`
      .home {
        color: green;
      }
      span {
        color: red;
      }
    `}</style>
  </div>
)
