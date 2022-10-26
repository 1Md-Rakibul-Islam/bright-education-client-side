import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
    return (
        <Accordion className='w-75 mx-auto border rounded-3' defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Unlimited Support</Accordion.Header>
          <Accordion.Body>
          Any questions you may have will be answered within 24 hours during the course (except holidays). If there is any problem with Penchgi Marka, it will come to Google Meet 3 times a day and share your skin, and the problem will be solved. And once the course is over (even after 3 months) you will be given loose support
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Live Conceptual Session</Accordion.Header>
          <Accordion.Body>
            A couple of concepts to learn may not be clear to everyone at first glance. This is very normal. This is nothing to worry about. Because every milestone will have one or two live conceptual sessions. There, through new projects, main main concepts will be cleared better than all clear shampoo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Option to watch offline videos</Accordion.Header>
          <Accordion.Body>
            You do not have broadband! Mobile data or buy MB to watch videos? To watch the same video again and again like spending the Internet? There is nothing to take money for. You can save the course videos offline and watch them again and again through our Android app. Without any additional internet costs.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>International Job Placement</Accordion.Header>
          <Accordion.Body>
            In the era of globalization, why is your job placement target only Bangladesh? Rather, it will be of a level to get a job/intern in any country of the world. That's why the focus of our SCIC and Job Placement team is to prepare you for internships/jobs at companies in the country or abroad. Forwarding your CV to the country and companies in the country.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
};

export default FAQ;