import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          {/* Index route below doesn't have its own path, it shares a path with its parent. Index route is the default child for the parent route. It renders when the user hasn't clicked an item in the invoice navigation list yet.*/}
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an Invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          // "*" matches when no other routes do.
          element={
            <main style={{ padding: "1rem" }}>
              <h3>There's nothing here!</h3>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
