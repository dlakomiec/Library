import React from 'react';
import styled from 'styled-components';
import AdminNavigation from '../AdminNavigation/AdminNavigation';

const Wrapper = styled.div`
  margin-left: 220px;
  display: flex;
  justify-content: center;
`;

const AdminDashboard = () => (
  <>
    <AdminNavigation />
    <Wrapper>
      <h2>Panel admina</h2>
    </Wrapper>
  </>
);

export default AdminDashboard;
