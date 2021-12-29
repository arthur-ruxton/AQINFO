import React from 'react'
import { useState } from 'react' 

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Donate = () => {
  const [showDonate, setShowDonate] = useState(false);
  const handleCloseDonate = () => setShowDonate(false);
  const handleShowDonate = () => setShowDonate(true);

  return (
    <>
      <Button onClick={handleShowDonate}>
        Donate
      </Button>
      <Modal show={showDonate} onHide={handleCloseDonate}>
        <Modal.Header closeButton>
          <Modal.Title>Donate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><a href="https://www.foei.org/" target="_blank">FRIENDS OF THE EARTH</a></p>
          <p><a href="https://www.rainforest-alliance.org/" target="_blank">RAINFOREST ALLIANCE</a></p>
          <p><a href="https://earthjustice.org/" target="_blank">EARTH JUSTICE</a></p>
          <p><a href="https://www.greenpeace.org.uk/" target="_blank">GREENPEACE</a></p>
          <p><a href="https://oceanconservancy.org/" target="_blank">OCEAN CONSERVANCY</a></p>
          <p><a href="https://www.earthisland.org/" target="_blank">EARTH ISLAND</a></p>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Donate
