import React, { useState } from "react";

function CreateForm() {
  const [host, useHost] = useState('');
  const [event, useEvent] = useState('');

  //handle submit event handler that onlcick of the button, grab host and event and emit it to the backend 

  return (
    <div id='create-form'>
      <h2>Create an event</h2>
      <form>
        <label> Host
          <input type='text' onChange={(e) => useHost(e.target.value)} />
        </label> 
        <label>Event
          <input type='text' onChange={(e) => useEvent(e.target.value)} />
        </label>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateForm;
