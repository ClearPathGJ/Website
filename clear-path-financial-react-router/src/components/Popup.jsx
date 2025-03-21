import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popup">
      <span className="popup-close" onClick={() => setVisible(false)}>&times;</span>
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get weekly financial tips straight to your inbox!</p>
      <form action="https://yourlist.us1.list-manage.com/subscribe/post?u=YOUR_USER_ID&amp;id=YOUR_LIST_ID" method="post" target="_blank">
        <input type="email" name="EMAIL" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Popup;
