import React from "react";

function Layout() {
  return (
    <main className="layout container">
      <section className="content-box">
        <h2>Welcome</h2>
        <p>
          This is the desktop and mobile responsive layout. Resize your browser
          to see how it adapts.
        </p>
      </section>

      <section className="content-box">
        <h2>Features</h2>
        <p>
          On desktop: multiple columns. <br />
          On mobile: single column.
        </p>
      </section>

      <section className="content-box">
        <h2>About</h2>
        <p>
          Built with React + Vite and styled with plain CSS for full control.
        </p>
      </section>
    </main>
  );
}

export default Layout;
