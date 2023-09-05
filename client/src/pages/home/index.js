import axios from 'axios';
import { useEffect, useState } from 'react';

import Gong from '../Gong';
import SendEmail from '../SendEmail';
import '../bootstrap.min.css';
import './home.css';
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState({});
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    axios
      .get('/api/calendar')
      .then((res) => {
        console.log('res: ', res.data[0]);
        setData(res.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.error('error fetching Data:', err);
      });
  }, []);

  const onClickMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const formatEmailText = ({ call_summary, actionable_items, ai_bites }) => {
    return `Call Summary: ${call_summary}\nActionable Items: ${actionable_items}\nAI Bites: ${ai_bites}`;
  };

  if (loading || Object.keys(data).length <= 0) return null;

  return (
    <section className="landing">
      <div className="main">
        <div className="title">
          <h1>A E</h1>
          <p className="topic">Sales AI Co-pilot</p>
        </div>

        <div className="settings">
          <i className="fas fa-ellipsis-h" id="dot" onClick={onClickMenu} />
          <Gong showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </div>

      <div className="list">
        {data.call.map((c, index) => (
          <label className="list-item" key={index}>
            <input
              type="radio"
              value={idx}
              checked={idx === index}
              onChange={() => {
                setIdx(index);
              }}
              className="radio"
            />

            <div>
              {c.from} - {c.to}
            </div>

            <div className="para">{c.call_id}</div>
          </label>
        ))}
      </div>

      <hr className="middle" />

      <div className="last-call">
        <i className="fas fa-chevron-left" id="arrow" />

        <div style={{ display: 'flex' }}>
          <div>Last Call: {data.call[idx].last_call} </div>
        </div>

        <i className="fas fa-chevron-right" id="arrow" />
      </div>

      <div className="content">
        <div style={{ fontWeight: 600 }}>Call Summary:</div>
        <div>{data.call[idx].call_summary}</div>

        <div style={{ fontWeight: 600 }}>Actionable Items:</div>
        <div>{data.call[idx].actionable_items}</div>

        <div style={{ fontWeight: 600 }}>AI Bites:</div>
        <div>{data.call[idx].ai_bites}</div>
      </div>

      <SendEmail
        email-text={formatEmailText({
          call_summary: data.call[idx].call_summary,
          actionable_items: data.call[idx].actionable_items,
          ai_bites: data.call[idx].ai_bites
        })}
      />
    </section>
  );
};

export default Home;
