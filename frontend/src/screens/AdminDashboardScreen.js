import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";
import "./AdminDashboardScreen.css";

import AdminBookList from "../components/AdminBookList";

const AdminDashboardScreen = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  return (
    <Container className="my-3">
      <MDBTabs className="myClass" pills justify>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            <div className="book-list-header-text my-4">
              <h1>Books</h1>
            </div>
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            <div className="book-list-header-text my-4">
              <h1>Authors</h1>
            </div>
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === "tab1"}>
          <AdminBookList />
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === "tab2"}>Tab 2 content</MDBTabsPane>
      </MDBTabsContent>
    </Container>
  );
};

export default AdminDashboardScreen;
