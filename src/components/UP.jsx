import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Up = () => {
  const [modal1Open, setModal1Open] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setModal1Open(true)}>
        Display a modal dialog at 20px to Top
      </Button>

      <Modal
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};
export default Up;
