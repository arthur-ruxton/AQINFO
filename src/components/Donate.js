import React from 'react'
import { useState } from 'react' 
import { Gift } from 'react-bootstrap-icons';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Donate = () => {
  const [showDonate, setShowDonate] = useState(false);
  const handleCloseDonate = () => setShowDonate(false);
  const handleShowDonate = () => setShowDonate(true);

  return (
    <>
      <Button onClick={handleShowDonate} className="donate">
        <Gift/>
      </Button>
      <Modal show={showDonate} onHide={handleCloseDonate} className='popup'>
        <Modal.Header closeButton>
          <Modal.Title>Donate to charity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><a href="https://www.foei.org/" target="_blank" rel="noreferrer">FRIENDS OF THE EARTH</a></p>
          <p><a href="https://www.rainforest-alliance.org/" target="_blank" rel="noreferrer">RAINFOREST ALLIANCE</a></p>
          <p><a href="https://earthjustice.org/" target="_blank" rel="noreferrer">EARTH JUSTICE</a></p>
          <p><a href="https://www.greenpeace.org.uk/" target="_blank" rel="noreferrer">GREENPEACE</a></p>
          <p><a href="https://oceanconservancy.org/" target="_blank" rel="noreferrer">OCEAN CONSERVANCY</a></p>
          <p><a href="https://www.earthisland.org/" target="_blank" rel="noreferrer">EARTH ISLAND</a></p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Donate
