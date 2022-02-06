import React from 'react';
import './table.css'
function Table() {
  return <div>
      <table>
        <tr>
            <th>Users</th>
            <th>Status</th>
            <th>Users</th>
            <th>Impression</th>
            <th>Conversation</th>
        </tr>
        <tr>
            <td>
                <section>
                    <div style={{ margin: '5px 0 10px 0' }}>
                        <img className='profile__image' src='https://via.placeholder.com/150' alt='profile' />
                    </div>
                    <div>Prince Something</div>
                </section>
            </td>
            <td>
                <div>
                    <span>Paused</span>
                </div>
            </td>
            <td>
                <section>
                    <div>
                        <strong>189</strong>
                    </div>
                    <div>Users</div>
                </section>
            </td>
            <td>
                <section>
                    <div>
                        <strong>189</strong>
                    </div>
                    <div>Users</div>
                </section>
            </td>
            <td>
                <section>
                    <div>
                        <strong>189</strong>
                    </div>
                    <div>Users</div>
                </section>
            </td>
        </tr>
    </table>
  </div>;
}

export default Table;
